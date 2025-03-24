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

  const insertUserMessage = async () => {
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

    setUserInputValue('')

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
  
  return (
    <div className="flex flex-col md:flex-row gap-4 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      {/* Painel esquerdo (menor) */}
      <div className="bg-white rounded-md shadow-md p-4 text-sm text-gray-700 md:w-1/4 lg:w-1/5 mt-4 md:mt-16">
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
  
      {/* Contêiner de Chat (também menor) */}
      <div className="md:w-3/4 lg:w-4/5 bg-white rounded-md shadow-2xl overflow-hidden flex flex-col mt-4 md:mt-16 h-[calc(100vh-8rem)]">
        {/* Cabeçalho do chat */}
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <h1 className="font-semibold text-gray-800">Recife Healthcare</h1>
            <span className="text-green-500 text-xs">● Online</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm">
            Emergência SOS
          </button>
        </header>
  
        {/* Área de mensagens */}
        <div className="flex-1 overflow-y-auto px-4 py-4 text-sm max-h-[calc(100vh-16rem)]">
          {messages.map((msg, index) => (
            <Message key={index} actor={msg.actor} text={msg.message} />
          ))}
          <div ref={chatEndRef} />
        </div>
  
        {/* Botões de ações rápidas */}
        <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md">
            Encontrar hospital mais próximo
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md">
            Serviços de emergência
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md">
            Especialistas disponíveis
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded-md">
            Horários de funcionamento
          </button>
        </div>
  
        {/* Área de entrada de mensagem */}
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
              onClick={insertUserMessage}
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