interface LoginProps {
  handleLogin: () => void;
};

export default function Login({ handleLogin }: LoginProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-600">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-4">Bem-vindo de volta</h1>
        <p className="text-center text-gray-600 mb-6">Faça login com o Google para continuar</p>
        
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#EA4335"
              d="M23.76 12.27c0-.82-.07-1.61-.2-2.38H12v4.52h6.59a5.64 5.64 0 01-2.45 3.7v3.06h3.97c2.32-2.13 3.65-5.26 3.65-8.9z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.97-3.06c-1.07.72-2.45 1.14-3.98 1.14a6.93 6.93 0 01-6.54-4.57H1.37v2.86A12 12 0 0012 24z"
            />
            <path
              fill="#FBBC04"
              d="M5.46 14.57a7.07 7.07 0 010-4.5V7.2H1.37a12 12 0 000 9.6l4.09-2.22z"
            />
            <path
              fill="#4285F4"
              d="M12 4.73c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.76 11.76 0 0012 0 12 12 0 001.37 7.2l4.09 2.86A6.93 6.93 0 0112 4.73z"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700">Continuar com o Google</span>
        </button>
  
        <p className="text-xs text-center text-gray-500 mt-4">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Termos de Serviço
          </a>{" "}
          e{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
