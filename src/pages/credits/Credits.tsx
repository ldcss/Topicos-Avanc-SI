export default function Credits() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Créditos e Tecnologias utilizadas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="ReactJS Library"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">React</h2>
          <h3 className="text-sm text-gray-600">
            Uma biblioteca JavaScript para criar interfaces de usuário
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="TailwindCSS Library"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">Tailwind</h2>
          <h3 className="text-sm text-gray-600">
            Um framework CSS baseado em utilitários para criar interfaces personalizadas rapidamente
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
            alt="ViteJS Framework"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">Vite</h2>
          <h3 className="text-sm text-gray-600">
            Uma ferramenta de build e desenvolvimento rápido para projetos web modernos
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub Repository Manager"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">GitHub</h2>
          <h3 className="text-sm text-gray-600">
            Uma plataforma para hospedagem e gerenciamento de repositórios de código
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/80?text=DeepSeek"
            alt="DeepSeek"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">DeepSeek</h2>
          <h3 className="text-sm text-gray-600">
            Serviço de IA que fornece análise avançada e busca inteligente
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center text-center 
                        transition-transform transform hover:scale-105">
          <img
            src="https://axios-http.com/assets/logo.svg"
            alt="Axios Library"
            className="rounded-lg shadow-xl w-20 h-20 object-cover"
          />
          <h2 className="text-2xl font-bold">Axios</h2>
          <h3 className="text-sm text-gray-600">
            Biblioteca JavaScript para realizar requisições HTTP de forma simples e eficiente
          </h3>
        </div>

      </div>
    </div>
  );
}
