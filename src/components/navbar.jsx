import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header>
      <nav className="bg-red-700 border-b-4 border-red-800 px-4 lg:px-6 py-2.5 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <a href="/" className="flex items-center">
            <img src={logo} alt="BookStore Logo" className="h-12 w-12 mr-3" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white drop-shadow-lg">BookStore</span>
              <span className="text-xs text-white/80 font-medium">Eko Muchamad Haryono</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center lg:order-2 gap-3">
            {loading ? (
              // Loading skeleton
              <div className="flex items-center gap-3">
                <div className="h-10 w-32 bg-white/20 rounded-lg animate-pulse"></div>
                <div className="h-10 w-20 bg-white/20 rounded-lg animate-pulse"></div>
              </div>
            ) : isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/20 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="text-right">
                    <p className="text-white font-semibold text-sm">{user?.name || "User"}</p>
                    <p className="text-white/80 text-xs">{user?.email || ""}</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="text-white! bg-red-900 hover:bg-red-950 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 shadow-lg transition-all duration-200">Logout</button>
              </>
            ) : (
              <>
                <a href="/login" className="text-white! hover:bg-white/10 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 transition-all duration-200">Login</a>
                <a href="/register" className="text-red-700! bg-white hover:bg-red-50 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 shadow-lg transition-all duration-200">Register</a>
              </>
            )}
          </div>

          <div className="flex lg:hidden items-center order-2 gap-2">
            {loading ? (
              // Loading skeleton mobile
              <div className="flex gap-2">
                <div className="h-8 w-16 bg-white/20 rounded-lg animate-pulse"></div>
                <div className="h-8 w-16 bg-white/20 rounded-lg animate-pulse"></div>
              </div>
            ) : isAuthenticated ? (
              <button onClick={handleLogout} className="text-white! bg-red-900 hover:bg-red-950 font-semibold rounded-lg text-xs px-3 py-2 shadow-lg transition-all" title="Logout">Logout</button>
            ) : (
              <>
                <a href="/login" className="text-white! hover:bg-white/10 font-semibold rounded-lg text-xs px-3 py-2 transition-all">Login</a>
                <a href="/register" className="text-red-700! bg-white hover:bg-red-50 font-semibold rounded-lg text-xs px-3 py-2 shadow-lg transition-all">Register</a>
              </>
            )}
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li><a href="/" className="block py-2 pr-4 pl-3 text-white! font-bold hover:text-white! lg:hover:bg-transparent lg:p-0 rounded transition-all" aria-current="page">Home</a></li>
              <li><a href="/tentang" className="block py-2 pr-4 pl-3 text-white! font-semibold hover:text-white! lg:hover:bg-transparent lg:p-0 rounded transition-all">Tentang</a></li>
              {!loading && isAuthenticated && <li><a href="/admin" className="block py-2 pr-4 pl-3 text-white! font-semibold hover:text-white! lg:hover:bg-transparent lg:p-0 rounded transition-all">Admin Panel</a></li>}
              <li className="lg:hidden border-t border-white/20 pt-3 mt-3">
                {loading ? (
                  <div className="py-2 pl-3">
                    <div className="h-16 bg-white/10 rounded-lg animate-pulse"></div>
                  </div>
                ) : isAuthenticated ? (
                  <div className="py-2 pl-3">
                    <div className="bg-white/10 rounded-lg px-3 py-2 mb-3">
                      <p className="text-white font-semibold text-sm mb-1">{user?.name || "User"}</p>
                      <p className="text-white/70 text-xs">{user?.email || ""}</p>
                    </div>
                    <button onClick={handleLogout} className="w-full text-left text-white font-semibold hover:bg-white/10 py-2 px-3 rounded transition-all">Logout</button>
                  </div>
                ) : (
                  <>
                    <a href="/login" className="block py-2 pr-4 pl-3 text-white font-semibold hover:bg-white/10 rounded transition-all">Login</a>
                    <a href="/register" className="block py-2 pr-4 pl-3 text-white font-semibold hover:bg-white/10 rounded transition-all">Register</a>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
