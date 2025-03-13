  interface LoginProps {
    handleLogin: () => void;
  };
  
  export default function Login({handleLogin}: LoginProps) {
    return (<>
    <button onClick={handleLogin}> Login with google </button>
    </>)
  }