import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; 
import { User } from 'firebase/auth';
import { TbHealthRecognition } from "react-icons/tb";

interface PageProps {
  children: JSX.Element | JSX.Element[];
  user: User | null;
}

export default function Page({ children, user }: PageProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log("Signed out successfully!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009eb0] to-[#101828]">
      <nav className="fixed top-0 left-0 right-0 bg-[#ffffff] shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TbHealthRecognition color='blue'/>
              <span className="font-bold text-xl text-[#155dfc]">Welfare.c</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/">
                <button className={`${pathname === "/" ? "text-[#029356]" : "text-[#0073e6]"} hover:text-[#1c398e] cursor-pointer whitespace-nowrap rounded-md`}>
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className={`${pathname === "/about" ? "text-[#029356]" : "text-[#0073e6]"} hover:text-[#1c398e] cursor-pointer whitespace-nowrap rounded-md`}>
                  About
                </button>
              </Link>
              <Link to="/credits">
                <button className={`${pathname === "/credits" ? "text-[#029356]" : "text-[#0073e6]"} hover:text-[#1c398e] cursor-pointer whitespace-nowrap rounded-md`}>
                  Credits
                </button>
              </Link>
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-[#0073e6] hover:text-[#1c398e]cursor-pointer whitespace-nowrap rounded-md"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
