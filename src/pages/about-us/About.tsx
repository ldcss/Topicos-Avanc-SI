import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FotoLuquinhas from '../../assets/FotoLuquinhas.jpg';
import aquelaFoto from '../../assets/FotoQeuToGatinho.jpg';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl text-center mb-12 text-white">Sobre nós</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <img
            src={FotoLuquinhas}
            alt="Lucas Daniel"
            className="rounded-lg shadow-xl w-40 h-40 object-cover"
          />
          <h2 className="text-2xl font-bold text-black">Lucas Daniel</h2>
          <p className="text-sm text-gray-700">
            Estudante de engenharia da computação e aluno da Apple Developer Academy, apaixonado por tecnologia e inovação.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/lucas-daniel" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#0073e6] hover:text-black" size={20} />
            </a>
            <a href="https://linkedin.com/in/lucas-daniel" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0073e6] hover:text-black" size={20} />
            </a>
          </div>
        </div>
  
        <div className="bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <img
            src={aquelaFoto}
            alt="Marcelo Bastos"
            className="rounded-lg shadow-xl w-40 h-40 object-cover"
          />
          <h2 className="text-2xl font-bold text-black">Marcelo Bastos</h2>
          <p className="text-sm text-gray-700">
            Estudante de engenharia da computação, apaixonado por resolver problemas.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/marcelo-vinicius" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#0073e6] hover:text-black" size={20} />
            </a>
            <a href="https://linkedin.com/in/marcelo-vinicius" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0073e6] hover:text-black" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
