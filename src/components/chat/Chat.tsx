import { DeepSeekService } from '@/service/DeepSeekService';
import { MessageChat } from '@/types/MessageChat';
import { useEffect, useRef, useState } from 'react';
import Message from '../message/Message';
  
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

    const handleRequest = () => {
      console.log("to no handle")
      const newMessage = {actor: "user", message: userInputValue}
      addMessage(newMessage)
      setUserInputValue('')
      DeepSeekService.getResponse(
        prompt + userInputValue).then(response => {
        // console.log(response.data)
        console.log(response.data.choices[0].message.content)
        const newBotMessage = {actor: "bot", message: response.data.choices[0].message.content}
        addMessage(newBotMessage)
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
          <header className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center space-x-3">
              <i className="fas fa-hospital-symbol text-blue-600 text-2xl"></i>
              <h1 className="text-base font-semibold text-gray-800">
                Recife Healthcare
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
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

  const prompt = `
  Você é um assistente especializado em transformar perguntas comuns em respostas sobre envolvendo atendimento a saúde em recife. Sua tarefa é converter a entrada do usuário em uma consulta eficaz sobre qual o melhor hospital para ser atendido baseado na demanda do usuário e a especialidade do hospital. Para isso, você deve ter em mente as seguintes informações:
  
  **Informações sobre hospitais**
  1. Hospital Eduardo Campos da Pessoa Idosa  
  Av. Recife, 810 - Estância, Recife - PE, 50870-901 
  (81) 3771-5371
  2. Hospital Geral de Areias
  Av. Recife, 810 - Estância, Recife - PE, 50870-901
  (81) 3182-3000
  3. Hospital da Mulher do Recife (HMR)
  Av. Recife, 5629 - Estância, Recife - PE, 50110-727
  (81) 2011-0100
  4. Hospital da Restauração Gov. Paulo Guerra
  Av. Gov. Agamenon Magalhães, s/n - Derby, Recife - PE, 52171-011
  (81) 3181-5400
  5. Hospital Barão de Lucena
  Av. Caxangá, 3860 - Iputinga, Recife - PE, 50731-000
  (81) 3184-6400
  6. Unidade de Pronto Atendimento Maria Esther Souto Carvalho
  Av. Mal. Mascarenhas de Morais, 4223 - Imbiribeira, Recife - PE, 51150-004
  (81) 3184-4328
  7. UPA Imbiribeira
  Av. Mal. Mascarenhas de Morais, 4223 - Imbiribeira, Recife - PE, 51150-004

  
  **Especialidades médicas**
  1. Clínica Geral
  2. Pediatria
  3. Ginecologia e Obstetrícia
  4. Cardiologia
  5. Ortopedia
  6. Neurologia
  7. Psiquiatria
  8. Dermatologia
  9. Oncologia
  10. Cirurgia Geral
  11. Anestesiologia
  12. Medicina do Trabalho
  13. Medicina Esportiva
  14. Medicina de Família e Comunidade
  15. Radiologia
  16. Oftalmologia
  17. Urologia
  18. Endocrinologia
  19. Hematologia
  
  **Entrada:**
  eu quebrei meu dedo, o que eu devo fazer?
  
  **Saída:**
  Se você quebrou o dedo e mora em Recife, aqui estão os passos que você deve seguir:

  Avaliação inicial: Se o dedo estiver muito inchado, dolorido, deformado ou com dificuldade de movimento, é provável que seja uma fratura.
  Imobilização: Evite mover o dedo afetado. Se possível, improvise uma tala com algo rígido (como uma régua ou caneta) e prenda com uma faixa ou tecido para imobilizar o dedo até chegar ao médico.
  Compressa fria: Aplique uma compressa fria (gelo envolto em um pano) para reduzir o inchaço e a dor. Não aplique gelo diretamente na pele.
  Procure atendimento médico:
  UPAs (Unidades de Pronto Atendimento): Recife tem várias UPAs 24 horas, como a UPA Eduardo Campos (San Martin) e a UPA Barão de Lucena.
  Hospitais: Você pode ir ao Hospital da Restauração (referência em traumas) ou ao Hospital Agamenon Magalhães.
  Postos de saúde: Se for algo menos grave, um posto de saúde pode encaminhar você para um local especializado.
  Documentos: Leve seu documento de identidade, cartão do SUS (se tiver) e qualquer outro documento de saúde.
  Evite automedicação: Não tome remédios sem orientação médica, especialmente anti-inflamatórios, pois podem piorar sangramentos em alguns casos.
  Siga as orientações médicas: Após o atendimento, siga as recomendações, como usar tala, gesso ou fazer fisioterapia, se necessário.
  Se a fratura for grave ou você tiver dificuldade de locomoção, peça ajuda a alguém para levá-lo ao hospital ou chame uma ambulância pelo 192 (SAMU).
  
  **Entrada:**
  Gostaria de saber mais onde posso encontrar um local para fazer exames ginecológicos em Recife de forma gratuita
  
  **Saída:**
  Em Recife, você pode realizar exames ginecológicos gratuitamente pelo Sistema Único de Saúde (SUS). Aqui estão algumas opções:

1. Unidades Básicas de Saúde (UBSs) ou Postos de Saúde

O que fazer: Procure a UBS mais próxima da sua residência. Lá, você pode agendar uma consulta com um ginecologista ou enfermeiro especializado.
Serviços oferecidos: Consultas, preventivos (Papanicolau), encaminhamentos para exames como ultrassom e mamografia.
Documentos necessários: Cartão SUS, documento de identidade e comprovante de residência.
2. Centros de Saúde Especializados

Centro de Saúde Amaury de Medeiros (CISAM)
Localizado no bairro da Encruzilhada, oferece atendimento ginecológico e exames especializados.
Endereço: Rua Professor José Brandão, s/n, Encruzilhada.
Telefone: (81) 3182-7600.
Centro de Saúde da Mulher (Hospital Agamenon Magalhães)
Oferece serviços específicos para saúde da mulher, incluindo exames ginecológicos.
Endereço: Av. Norte, s/n, Macaxeira.
Telefone: (81) 3182-7600.
3. Hospitais Públicos

Hospital da Mulher do Recife
Especializado em saúde da mulher, oferece consultas, exames e cirurgias ginecológicas.
Endereço: Rua Frei Caneca, s/n, Parque Amorim.
Telefone: (81) 2011-0101.
Hospital Barão de Lucena
Oferece atendimento ginecológico e encaminhamentos para exames.
Endereço: Av. General San Martin, 1379, Cordeiro.
Telefone: (81) 3182-7600.
4. Programas de Prevenção

Programa de Saúde da Mulher (SUS)
Oferece preventivos, consultas e exames como mamografia e ultrassom transvaginal. Procure a UBS mais próxima para se informar.
5. Ações e Campanhas

Fique atenta a campanhas de saúde da mulher, como o Outubro Rosa, que costumam oferecer exames gratuitos em postos de saúde e unidades móveis.
6. Agendamento

Utilize o Agendamento SUS pelo telefone 136 ou diretamente na UBS para marcar consultas e exames.
Dicas:

Chegue cedo para garantir atendimento, pois a demanda pode ser alta.
Leve sempre seu cartão SUS e documentos pessoais.
Se precisar de exames mais complexos, como ultrassom ou mamografia, peça encaminhamento na consulta.
Se precisar de mais informações, entre em contato com a Secretaria de Saúde de Recife pelo telefone 0800 281 1520.\n\n\n`