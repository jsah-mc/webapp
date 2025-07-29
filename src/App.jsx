import { useRef, useEffect } from "react";
import "./App.css";
import Typed from "typed.js";

function App() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Hello, World!", "Welcome to my website!", "Enjoy your stay!"],
      typeSpeed: 100,
      backSpeed: 0,
      loop: true,
      showCursor: false,
      cursorChar: " ",
    });

    // Cleanup Typed instance on unmount
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <h1>
        <span ref={el}>alo</span>
      </h1>
    </>
  );
}

export default App;
