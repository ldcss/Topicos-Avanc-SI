import { Flex, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MessageProps = {
    text: string;
    actor: 'user' | 'bot';
  };


export default function Message ({ text, actor }: MessageProps) {
    return (
      <Flex
        p={4}
        bg={actor === 'user' ? 'blue.500' : 'gray.100'}
        color={actor === 'user' ? 'white' : 'gray.600'}
        borderRadius="lg"
        w="fit-content"
        alignSelf={actor === 'user' ? 'flex-end' : 'flex-start'}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </Flex>
    );
  };