import React, { useState, useCallback } from "react";


const Link = React.memo(({ label, message, handleLinkHover, handleMouseLeave }) => (
  <li className="navbar-item">
    <a
      href="#"
      className="navbar-link"
      onMouseEnter={(e) => handleLinkHover(e, message)}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </a>
  </li>
));

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleLinkHover = useCallback((e, message) => {
    setMessage(message);
    setShowMessage(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowMessage(false);
  }, []);

  const links = [
    { id: 1, label: "Home", message: "Welcome to the homepage" },
    { id: 2, label: "About", message: "Learn more about our company" },
    { id: 3, label: "Products", message: "Explore our wide range of products" },
    { id: 4, label: "Services", message: "Discover the services we offer" },
    { id: 5, label: "Contact", message: "Get in touch with us" },
    { id: 6, label: "Blog", message: "Read our latest blog posts" },
    { id: 7, label: "FAQ", message: "Find answers to frequently asked questions" },
  ];
  

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="navbar-list">
          {links.map((link) => (
            <Link
              key={link.id}
              label={link.label}
              message={link.message}
              handleLinkHover={handleLinkHover}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </ul>
      </nav>

      {showMessage && (
        <div
          className="message"
          style={{
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
