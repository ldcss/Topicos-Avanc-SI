# Decisões Técnicas


## Uso de LLM da DeepSeek via OpenRouter

### Motivação: Optamos por utilizar um modelo de linguagem da DeepSeek via OpenRouter devido à sua capacidade avançada de processamento de linguagem natural e flexibilidade na integração com diferentes contextos. Como o SUS é um sistema complexo, uma IA potente facilita a estruturação e personalização das respostas.

### Implementação: A LLM é empregada para interpretar entradas do usuário, gerar respostas detalhadas sobre serviços de saúde e auxiliar na formatação das informações fornecidas de maneira acessível.

### Benefícios: A solução melhora a precisão e confiabilidade das informações, reduzindo o tempo de desenvolvimento ao evitar a necessidade de criação manual de bases de conhecimento extensivas.

## Adoção de React, Tailwind e Vite para o Frontend

### Motivação: Optamos por utilizar React devido à sua escalabilidade e modularidade. O Tailwind CSS foi escolhido para garantir um design moderno e responsivo, enquanto o Vite proporciona um ambiente de desenvolvimento rápido e otimizado.

### Integração: O frontend se comunica diretamente com a API que intermedia a LLM da DeepSeek, garantindo um fluxo de interação rápido e dinâmico. A interface é projetada para facilitar o acesso a informações sobre o SUS e permitir uma experiência intuitiva ao usuário.

### Benefícios: A combinação dessas tecnologias garante um desempenho aprimorado, facilita a manutenção do código e melhora a experiência do usuário com uma interface limpa e eficiente.

## Utilização de engenharia de prompt

### Objetivo: Permitir que um script seja utilizado como entrada para agilizar o fornecimento de informações estruturadas sobre o SUS.

### Funcionamento: O script atua como fonte de dados, organizando e formatando as informações antes de serem processadas pela LLM.

### Vantagens: Essa abordagem reduz a complexidade de manutenção, melhora a consistência das respostas e permite uma adaptação mais rápida a novas diretrizes e mudanças nos serviços de saúde.