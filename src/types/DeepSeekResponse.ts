export interface DeepSeekResponse {
    id: string;
    provider: string;
    model: string;
    object: string;
    created: number;
    choices: Choice[];
    usage: Usage;
  }

  export interface Choice {
    logprobs: null | any; // Pode ser mais específico se necessário
    finish_reason: string;
    native_finish_reason: string;
    index: number;
    message: Message;
    refusal: null | any;
  }
  
  export interface Message {
    role: string;
    content: string;
  }
  
  export interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  }