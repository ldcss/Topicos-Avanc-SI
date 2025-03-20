import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MessageProps = {
  text: string;
  actor: string;
};

export default function Message({ text, actor }: MessageProps) {
  const isUser = actor === 'user';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? '#4299E1' : '#E2E8F0',
          color: isUser ? '#FFFFFF' : '#2D3748',
          borderRadius: '8px',
          padding: '12px',
          maxWidth: '70%',
          whiteSpace: 'pre-wrap',
        }}
      >
        {
          text == 'isLoading' ? (<div className='animate-pulse text-md2 font-medium'>
          ...
        </div>) : (<ReactMarkdown remarkPlugins={[remarkGfm]}>
          {text}
        </ReactMarkdown>)
        }
      </div>
    </div>
  );
}
