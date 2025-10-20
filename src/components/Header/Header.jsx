import React from "react";
import { Container, Logo, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-gray-900/80 via-gray-950/80 to-black/90 border-b border-gray-800 shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Left - Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Logo width="120px" />
            </Link>
          </div>

          {/* Center - Navigation Items */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="relative text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Right - Auth Button */}
          <div className="flex items-center space-x-4">
            {authStatus && (
              <Button
                text="Logout"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg px-5 py-2 transition-all duration-300 shadow-md hover:shadow-gray-500/30 border border-gray-600"
              />
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
