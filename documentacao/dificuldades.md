# Dificuldades e Limitações

## Ajuste do Prompt com Informações Reais e Verossímeis

### Desafio: Foi necessário refinar a engenharia de prompt para garantir que a LLM da DeepSeek gerasse respostas precisas e condizentes com informações reais sobre o SUS.

### Problema Específico: O modelo algumas vezes interpretava mal as perguntas ou fornecia respostas genéricas sem base concreta.

### Solução: Realizamos ajustes contínuos nos prompts, utilizando contextos estruturados e exemplos práticos para guiar a IA na geração de respostas mais confiáveis e úteis.

## Problema de CORS na API do OpenRouter

### Desafio: Durante o desenvolvimento, encontramos restrições de CORS ao tentar acessar a API do OpenRouter diretamente do frontend.

### Solução Temporária: No ambiente de desenvolvimento, utilizamos o proxy do Vite para contornar o problema.

### Solução para Deploy: No deploy na Vercel, adotamos a estratégia de rewrite nas configurações do vercel.json, garantindo que as requisições fossem corretamente redirecionadas sem bloqueios de CORS.

## Complexidade na Integração com a LLM da DeepSeek

### Observação: Apesar da facilidade de uso da API, foi necessário compreender profundamente seu funcionamento para otimizar a interação com o chatbot.

### Impacto: A necessidade de ajustes finos no prompt e no processamento das respostas aumentou o tempo de desenvolvimento.

### Mitigação: Investimos tempo em testes e refinamento iterativo, garantindo um fluxo de interação mais fluido e natural.

## Desafios na Otimização do Frontend

### Desafio: Garantir que a interface do chatbot fosse rápida e responsiva, sem comprometer a experiência do usuário.

### Abordagem: Utilização de React, Tailwind e Vite para um desempenho otimizado, garantindo carregamento rápido e uma interface intuitiva.

### Benefício: Essa escolha permitiu que o chatbot tivesse um tempo de resposta adequado, mesmo ao lidar com consultas complexas sobre o SUS.