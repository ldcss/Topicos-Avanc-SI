import { DeepSeekService } from '@/service/DeepSeekService';
import { useEffect, useRef, useState } from 'react';
import Message from '../message/Message';
import { FaPaperPlane } from "react-icons/fa";
import { prompt, welcomeMsg } from '../utils/defaultMessages';
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { MessageModel } from '@/types/MessageModel';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '@/firebase';
import { MessageChat } from '@/types/MessageChat';
  
export default function Chat() {
  const [userInputValue, setUserInputValue] = useState<string>('');
  const [messages, setMessages] = useState<MessageChat[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputValue(event.target.value);
  };
    
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      const isLoadingMessage = { actor: "bot", message: welcomeMsg };
      addMessage(isLoadingMessage);
    }
  }, []);

  const handleRequest = () => {
    const newMessage = { actor: "user", message: userInputValue };
    addMessage(newMessage);
    setUserInputValue('');

    const isLoadingMessage = { actor: "bot", message: "isLoading" };
    addMessage(isLoadingMessage);

    DeepSeekService.getResponse(prompt + userInputValue).then(response => {
      console.log(response.data.choices[0].message.content);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          ...updatedMessages[updatedMessages.length - 1],
          message: response.data.choices[0].message.content,
        };
        return updatedMessages;
      });
    });
  };

  // New function: Locate position and find the nearest hospital.
  const handleFindNearestHospital = () => {
    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const hospitalMessage = `Sua localização: lat ${latitude.toFixed(4)}, long ${longitude.toFixed(4)}. O hospital mais próximo é o Hospital Central, a 2 km de distância.`;
        const hospitalMsg = { actor: "bot", message: hospitalMessage };
        addMessage(hospitalMsg);
      },
      (error) => {
        console.error(error);
        alert("Não foi possível obter sua localização.");
      }
    );
  };

  const addMessage = (newMessage: MessageChat) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
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
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm">
            Emergência SOS
          </button>
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
  
        {/* Message Input Area */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleRequest()}
              placeholder="Pergunte sobre serviços de saúde..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleRequest}
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
