import { DeepSeekService } from '@/service/DeepSeekService';
import { useEffect, useRef, useState } from 'react';
import Message from '../message/Message';
import { FaPaperPlane } from "react-icons/fa";
import { prompt } from '../utils/defaultMessages';
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { MessageModel } from '@/types/MessageModel';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '@/firebase';

const db = getFirestore()
  
export default function Chat() {
  const [userInputValue, setUserInputValue] = useState<string>('')
  const [messages, setMessages] = useState<MessageModel[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      const user = auth.currentUser;
      if (user && user.email) {
        setUserEmail(user.email);
      }
  };
  fetchUserEmail();
}, []);

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUserInputValue(event.target.value);
};

useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);

useEffect(() => {
  if (!userEmail) return;

  const q = query(
    collection(db, 'messages'), 
    where('userEmail', '==', userEmail),
    orderBy('createdAt')
  );

  const unsub = onSnapshot(
    q,
    snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        ...doc.data() as MessageModel
      })))
    }
  );

  return unsub;
}, [userEmail]);

const insertUserMessage = async (customMessage?: string) => {

  const messageText = customMessage ?? userInputValue;
  
  if (!messageText) return; 

  if (!userEmail) {
    console.error("Usuário não autenticado");
    return;
  }

    await addDoc(collection(db, 'messages'), {
      id: uuidv4(),
      actor: "user",
      message: userInputValue,
      userEmail: userEmail,
      createdAt: serverTimestamp()
    })

    if (!customMessage) {
      setUserInputValue('');
    }

    const loadingDocRef = await addDoc(collection(db, 'messages'), {
      id: uuidv4(),
      actor: "bot",
      message: "...",
      userEmail: userEmail, 
      createdAt: serverTimestamp()
    });

    try {
      const response = await DeepSeekService.getResponse(prompt + userInputValue);
      const botResponse = response.data.choices[0].message.content;
      
      await updateDoc(loadingDocRef, {
        message: botResponse
      });
    } catch (error) {
      await updateDoc(loadingDocRef, {
        message: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente"
      });
      console.error("Erro ao obter resposta:", error);
    }
  }

// Função para calcular a distância entre dois pontos (em metros) usando a fórmula de Haversine.
const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371e3; // Raio da Terra em metros
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const findNearestHospital = async (latitude: number, longitude: number): Promise<{ name: string; distance: number } | null> => {
  const radius = 5000;
  const query = `
    [out:json];
    node
      [amenity=hospital]
      (around:${radius},${latitude},${longitude});
    out;
  `;
  const url = "https://overpass-api.de/api/interpreter?data=" + encodeURIComponent(query);
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.elements || data.elements.length === 0) {
      return null;
    }
    
    // Seleciona o hospital mais próximo
    const nearest = data.elements.reduce((prev: any, current: any) => {
      const distancePrev = haversineDistance(latitude, longitude, prev.lat, prev.lon);
      const distanceCurrent = haversineDistance(latitude, longitude, current.lat, current.lon);
      return distanceCurrent < distancePrev ? current : prev;
    });
    
    const nearestDistance = haversineDistance(latitude, longitude, nearest.lat, nearest.lon);
    
    return {
      name: nearest.tags?.name || "Hospital sem nome",
      distance: nearestDistance
    };
  } catch (error) {
    console.error("Erro ao buscar hospitais:", error);
    return null;
  }
};

const handleFindNearestHospital = () => {
  if (!navigator.geolocation) {
    alert("Geolocalização não é suportada pelo seu navegador.");
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const hospital = await findNearestHospital(latitude, longitude);
      let hospitalMessage = "";
      
      if (hospital) {
        hospitalMessage = `Baseado na sua localização o hospital mais próximo é o ${hospital.name}, a ${(hospital.distance / 1000).toFixed(2)} km de distância.`;
      } else {
        hospitalMessage = "Não foi possível encontrar um hospital próximo.";
      }
      
      await addDoc(collection(db, 'messages'), {
        id: uuidv4(),
        actor: "bot",
        message: hospitalMessage,
        userEmail: userEmail,
        createdAt: serverTimestamp()
      });
    },
    (error) => {
      console.error("Erro ao obter localização:", error);
      alert("Não foi possível obter sua localização.");
    }
  );
};

  return (
    <div className="flex flex-col md:flex-row gap-4 min-h-screen bg-gradient-to-br from-[#009eb0] to-[#101828] p-4">
      {/* Left Panel */}
      <div className="bg-white rounded-md shadow-md p-4 text-sm text-gray-700 md:w-1/4 lg:w-1/5 mt-4 md:mt-16 h-108">
        <h2 className="font-bold text-lg mb-2">Como usar o Assistente de Saúde</h2>
        <ul className="list-disc ml-4 mb-4 space-y-1">
          <li>
            <strong>Converse com a IA</strong>: Digite suas dúvidas ou preocupações sobre saúde na caixa de mensagens.
          </li>
          <li>
            <strong>Encontre Serviços de Saúde</strong>: Obtenha informações sobre hospitais, clínicas e especialistas próximos.
          </li>
          <li>
            <strong>Serviços de Emergência</strong>: Use o botão de Emergência SOS para assistência imediata.
          </li>
          <li>
            <strong>Ações Rápidas</strong>: Use os botões de ação rápida para perguntas comuns.
          </li>
        </ul>
        <div className="bg-blue-50 p-2 rounded-md border border-blue-200">
          <h3 className="font-semibold">Aviso Importante</h3>
          <p className="text-xs">
            Para emergências com risco de vida, sempre ligue para 192 imediatamente ou use o botão de Emergência SOS.
          </p>
        </div>
      </div>
  
      {/* Chat Container (Right Panel) */}
      <div className="md:w-3/4 lg:w-4/5 bg-white rounded-md shadow-2xl overflow-hidden flex flex-col mt-4 md:mt-16 max-h-[calc(100vh-100px)]">
        {/* Chat Header */}
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <h1 className="font-semibold text-gray-800">Recife Healthcare</h1>
            <span className="text-green-500 text-xs">● Online</span>
          </div>
        </header>
  
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 text-sm">
          {messages.map((msg, index) => (
            <Message key={index} actor={msg.actor} text={msg.message} />
          ))}
          <div ref={chatEndRef} />
        </div>
  
        {/* Quick Action Buttons */}
        <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
  <button
    onClick={handleFindNearestHospital}
    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md"
  >
    Encontrar hospital mais próximo
  </button>
  <button
    onClick={() => setUserInputValue("Estou gripado")}
    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md"
  >
    Estou gripado
  </button>
  <button
    onClick={() => setUserInputValue("Estou com dor de cabeça")}
    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md"
  >
    Estou com dor de cabeça
  </button>
  <button
    onClick={() => setUserInputValue("Tive um acidente grave")}
    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md"
  >
    Tive um acidente grave
  </button>
</div>

        {/* Message Input Area */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && insertUserMessage()}
              placeholder="Pergunte sobre serviços de saúde..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          <button
            onClick={() => insertUserMessage()}
            className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm flex items-center justify-center"
          >
            <FaPaperPlane />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
