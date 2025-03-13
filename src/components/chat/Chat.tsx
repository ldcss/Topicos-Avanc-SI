import { DeepSeekService } from '@/service/DeepSeekService';
import { MessageChat } from '@/types/MessageChat';
import {
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  type MessageProps = {
    text: string;
    actor: 'user' | 'bot';
  };
  const Message = ({ text, actor }: MessageProps) => {
    return (
      <Flex
        p={4}
        bg={actor === 'user' ? 'blue.500' : 'gray.100'}
        color={actor === 'user' ? 'white' : 'gray.600'}
        borderRadius="lg"
        w="fit-content"
        alignSelf={actor === 'user' ? 'flex-end' : 'flex-start'}
      >
        <Text>{text}</Text>
      </Flex>
    );
  };
  
  export default function Chat() {
    const [userInputValue, setUserInputValue] = useState<string>('')
    const [messages, setMessages] = useState<MessageChat[]>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserInputValue(event.target.value);
    };

    const handleRequest = () => {
      console.log("to no handle")
      const newMessage = {actor: "user", message: userInputValue}
      addMessage(newMessage)
      setUserInputValue('')
      DeepSeekService.getResponse("FALE COMO UM MINEIRO DE 30 ANOS AO RESPONDER MINHAS PERGUNTAS FILOSOFICAS: \n" + userInputValue).then(response => {
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
    
    return (
      <Flex h="100vh" py={12}>
        <Flex
          flexDirection="column"
          w="2xl"
          m="auto"
          h="full"
          borderWidth="1px"
          roundedTop="lg"
          bg={"#FAFAFA"}
        >
          <HStack p={4} bg="blue.500">
            <Heading size="lg" color="white">
              Chat App
            </Heading>
          </HStack>
  
          <Stack
            px={4}
            py={8}
            overflow="auto"
            flex={1}
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#d5e3f7',
                borderRadius: '24px',
              },
            }}
          >
            {
              messages.map((message, index) => (
                <Message key={index} text={message.message} actor={message.actor == "user" ? "user" : "bot"} />
              ))
            }
          </Stack>
  
          <HStack p={4} bg="gray.100">
            <Input bg="white" color="black" placeholder="Enter your text" onChange={handleInputChange} />
            <Button colorScheme="normal" bg={'white'} border={"#F1F1F1"} onClick={handleRequest}>Send</Button>
          </HStack>
        </Flex>
      </Flex>
    );
  }