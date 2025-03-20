import { BiHeartCircle } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

export default function Page({children}: {children: JSX.Element | JSX.Element[]}) {
    var { pathname } = useLocation();

    console.log("pathname", pathname)
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <BiHeartCircle />
                            <span className="font-bold text-xl text-gray-800">
                                Welfare.c
                            </span>
                        </div>
                        <div className="flex space-x-8">
                            <Link to="/">
                                <button
                                    className={`${pathname == "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-500 cursor-pointer whitespace-nowrap !rounded-button`}
                                >
                                    Home
                                </button>
                            </Link>
                            
                            <Link to="/about">
                                <button
                                    className={`${pathname == "/about" ? "text-blue-600" : "text-gray-600"} hover:text-blue-500 cursor-pointer whitespace-nowrap !rounded-button`}
                                >
                                    About
                                </button>
                            </Link>
                            
                            <Link to="/credits">
                                <button
                                    className={`${pathname == "/credits" ? "text-blue-600" : "text-gray-600"} hover:text-blue-500 cursor-pointer whitespace-nowrap !rounded-button`}
                                >
                                    Credits
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    )
}