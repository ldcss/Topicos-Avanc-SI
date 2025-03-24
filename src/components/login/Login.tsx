import stickerMedicina from '../../assets/sticker medicina .png';

interface LoginProps {
  handleLogin: () => void;
}

export default function Login({ handleLogin }: LoginProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#009eb0] to-[#101828]">
      <div className="flex flex-row gap-8 w-full max-w-5xl">
        {/* Card de informações e login (esquerda) */}
        <div className="bg-[#ffffff] shadow-md rounded-lg p-8 w-1/2">
          <h1 className="text-2xl font-semibold text-center mb-4 text-[#101828]">
            Bem-vindo!
          </h1>
          <p className="text-center text-[#0073e6] mb-6">
            Faça login com o Google para continuar
          </p>
          <button
            onClick={handleLogin}
            className="flex items-center justify-center w-full px-4 py-2 border border-[#101828] rounded-md hover:bg-[#f0f0f0] mb-6"
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
            <span className="text-sm font-medium text-[#0073e6]">
              Continuar com o Google
            </span>
          </button>

          <h2 className="text-xl font-semibold text-left mb-4 text-[#101828]">
            Sobre o Aplicativo
          </h2>
          <p className="text-left text-[#101828] mb-4">
            Este chatbot utiliza inteligência artificial para oferecer suporte médico na cidade de Recife.
          </p>
          <p className="text-left text-[#101828] mb-4">
            Nosso sistema auxilia os usuários com orientações de saúde e esclarecimento de dúvidas, proporcionando respostas rápidas e precisas.
          </p>
          <p className="text-left text-[#101828] mb-4">
            O aplicativo é constantemente atualizado para garantir a confiabilidade e segurança das informações fornecidas, integrando as mais recentes inovações em IA.
          </p>
          <p className="text-left text-[#101828]">
            Vale ressaltar que, apesar de ser uma ferramenta de apoio, o serviço não substitui o atendimento médico presencial. Consulte sempre um profissional de saúde para avaliações detalhadas.
          </p>
        </div>
  
        {/* Card com imagem relacionada à medicina (direita) */}
        <div className="w-1/2">
          <img
            src={stickerMedicina}
            alt="Imagem relacionada à medicina"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
