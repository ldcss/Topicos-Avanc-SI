import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <img
            src="https://public.readdy.ai/ai/img_res/5f8d3fb118bbda7711e8c4c4aa1585d5.jpg"
            alt="Lucas Daniel"
            className="rounded-lg shadow-xl w-40 h-40 object-cover"
          />
          <h2 className="text-2xl font-bold">Lucas Daniel</h2>
          <p className="text-sm text-gray-600">
            Estudante de engenharia da computação e aluno da Apple Developer Academy, apaixonado por tecnologia e inovação.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/lucas-daniel" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-gray-800" size={20} />
            </a>
            <a href="https://linkedin.com/in/lucas-daniel" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900" size={20} />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center transition-transform transform hover:scale-105">
          <img
            src="https://public.readdy.ai/ai/img_res/5f8d3fb118bbda7711e8c4c4aa1585d5.jpg"
            alt="Marcelo Vinicius"
            className="rounded-lg shadow-xl w-40 h-40 object-cover"
          />
          <h2 className="text-2xl font-bold">Marcelo Vinicius</h2>
          <p className="text-sm text-gray-600">
            Estudante de engenharia da computação, apaixonado por resolver problemas.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/marcelo-vinicius" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-gray-800" size={20} />
            </a>
            <a href="https://linkedin.com/in/marcelo-vinicius" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
