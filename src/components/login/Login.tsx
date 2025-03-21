interface LoginProps {
  handleLogin: () => void;
};

export default function Login({ handleLogin }: LoginProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
