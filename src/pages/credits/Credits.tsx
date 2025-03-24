import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";
import { SiAxios } from "react-icons/si";


export default function Credits() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 ">
      <h2 className="text-3xl text-center mb-12 text-white">
        Créditos e tecnologias utilizadas
      </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <FaReact
            className="rounded-lg  w-15 h-15 object-cover"
          />
          <h2 className="text-2xl font-bold text-black">React</h2>
          <h3 className="text-sm text-gray-700">
            Uma biblioteca JavaScript para criar interfaces de usuário
          </h3>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <RiTailwindCssFill 
            className="rounded-lg  w-15 h-15 object-cover"
          />
          <h2 className="text-2xl font-bold text-black">Tailwind</h2>
          <h3 className="text-sm text-gray-700">
            Um framework CSS baseado em utilitários para criar interfaces personalizadas rapidamente
          </h3>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <SiVitest
            className="rounded-lg  w-15 h-15 object-cover"
          />
          <h2 className="text-2xl font-bold text-black">Vite</h2>
          <h3 className="text-sm text-gray-700">
            Uma ferramenta de build e desenvolvimento rápido para projetos web modernos
          </h3>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <FaGithub
             className="rounded-lg  w-15 h-15 object-cover"          
          />
          <h2 className="text-2xl font-bold text-black">Github</h2>
          <h3 className="text-sm text-gray-700">
            Uma plataforma para hospedagem e gerenciamento de repositórios de código
          </h3>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/102b11/deepseek.png" alt="deepseek"/>
          <h2 className="text-2xl font-bold text-black">DeepSeek</h2>
          <h3 className="text-sm text-gray-700">
            Serviço de IA que fornece análise avançada e busca inteligente
          </h3>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <SiAxios
            className="rounded-lg  w-15 h-15 object-cover" 
          />
          <h2 className="text-2xl font-bold text-black">Axios</h2>
          <h3 className="text-sm text-gray-700">
            Biblioteca JavaScript para realizar requisições HTTP de forma simples e eficiente
          </h3>
        </div>
  
      </div>
    </div>
  );
}
