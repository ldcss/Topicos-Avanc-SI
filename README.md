# Topicos-Avanc-SI
Repositorio da disciplina da cadeira tópicos avançados em si 3
## Equipe:
- Lucas Daniel Costa da Silva
- Marcelo Vinicius Bastos
## Imersão:
https://docs.google.com/document/d/1zlhTjR9Wi6duA5XqCovOWozqQ5MoFKf3nOadirUJGJA/edit?usp=sharing

# Front: React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Canvas de Identificação do Domínio


1. Nome do Domínio
Análise de currículo para RH.

2. Descrição do Domínio
Funcionários de RH devem analisar centenas de currículos de candidatos para posições, e fazer uma análise para verificar se faz sentido para a vaga.

3. Justificativa da Escolha
Centenas de candidatos aplicam para essas vagas, os funcionários devem analisar currículo por currículo, o que pode demandar muito tempo, um assistente poderia fazer uma filtragem inicial dos currículos para deixar apenas os mais relevantes para serem analisados pelos funcionários ou para seguir para as próximas fases.

4. Problemas/Desafios Atuais
Longo tempo para analisar currículos;
Processo muito manual.

5. Oportunidades de IA Generativa
Filtragem de currículos mais relevantes;
Alta capacidade de processamento;
Economiza os funcionários para outras atividades que demandam um esforço mais criativo ou menos braçal;

6. Benefícios Esperados
Redução no tempo da análise;
Maior agilidade/eficiência no processo seletivo;
Liberação de mão de obra;

Canvas de Objetivos de Projeto


Instruções de Preenchimento
Preencha cada seção deste canvas com informações estratégicas sobre os objetivos do projeto de IA, mantendo um nível de detalhe apropriado para orientar as próximas fases do projeto. Este documento fornece uma base para a criação de metas operacionais na fase de Ideação da metodologia AI Design.

1. Objetivo Estratégico Geral
Maior agilidade na contratação de novos funcionários.

2. Objetivos Estratégicos Secundários
Liberação de mão de obra para outros processos;
3. Benefícios Esperados
Redução do tempo de análise de currículos em pelo menos 50%;
Melhoria no aproveitamento do tempo de funcionários de RH em 25% - 30% durante processos seletivos;

4. Indicadores-Chave de Sucesso (KPIs)
Taxa de currículos descartados por não serem correspondentes com a vaga (redução em 30%);
Tempo médio do processo seletivo reduzido em 30%;

5. Requisitos Estratégicos e Restrições
Respeitar as regulamentações de proteção de dados (LGPD).
Orçamento limitado para implementação inicial.
Necessidade de integração com sistemas legados.
Disponibilidade de dados de qualidade.

6. Priorização Inicial de Objetivos
Alta prioridade: Maior agilidade na contratação de novos funcionários.
Média prioridade: Filtragem de currículos mais relevantes.
Baixa prioridade: Melhoria no aproveitamento do tempo de funcionários de RH.
