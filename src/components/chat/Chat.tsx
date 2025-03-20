import { DeepSeekService } from '@/service/DeepSeekService';
import { MessageChat } from '@/types/MessageChat';
import { useEffect, useRef, useState } from 'react';
import Message from '../message/Message';
import { FaPaperPlane } from "react-icons/fa";
import { prompt, welcomeMsg } from '../utils/defaultMessages';
  
  export default function Chat() {
    const [userInputValue, setUserInputValue] = useState<string>('')
    const [messages, setMessages] = useState<MessageChat[]>([])
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
    }, [])

    const handleRequest = () => {
      const newMessage = {actor: "user", message: userInputValue}
      addMessage(newMessage)
      setUserInputValue('')

      const isLoadingMessage = { actor: "bot", message: "isLoading" };
      addMessage(isLoadingMessage);

      DeepSeekService.getResponse(
        prompt + userInputValue).then(response => {
        // console.log(response.data)
        console.log(response.data.choices[0].message.content)
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = {
            ...updatedMessages[updatedMessages.length - 1], // Mantém as outras propriedades da mensagem
            message: response.data.choices[0].message.content, // Atualiza apenas o conteúdo da mensagem
          };
          return updatedMessages;
        });
      })
    };

    const addMessage = (newMessage: MessageChat) => {
      // Usando a função de atualização para garantir que o estado seja atualizado corretamente
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
    
    return (<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      {/* Phone container */}
      <div className="relative w-[375px] h-[750px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Phone screen */}
        <div className="relative w-full h-full bg-gray-50 rounded-[40px] flex flex-col pt-6">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-3 py-3 relative w-full z-50">
            <div className="flex items-center space-x-3">
              <i className="fas fa-hospital-symbol text-blue-600 text-2xl"></i>
              <h1 className="text-base font-semibold text-gray-800">
                Welfare.c
              </h1>
            </div>
          </header>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto px-3 pb-28">
          {messages.map((msg, index) => (
 
           <Message 
              key={index} 
              actor={msg.actor} 
              text={msg.message}
            />
          ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-3 py-3">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={userInputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleRequest()}
                  placeholder="Pergunte sobre serviços de saúde..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <button
                onClick={handleRequest}
                className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }