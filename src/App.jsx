import { useRef, useEffect } from "react";
import "./App.css";
import Typed from "typed.js";
import Icon from "@mdi/react";
import { mdiHome, mdiCursorText } from "@mdi/js";

function App() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Hello, World!", "Welcome to my website!", "Enjoy your stay!"],
      typeSpeed: 100,
      backSpeed: 0,
      loop: true,
      showCursor: true,
      cursorChar: "<|>",
    });

    // Cleanup Typed instance on unmount
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <nav className="navcontainer">
          <ul className="nav">
            <li>
              <a href="/">
                <Icon path={mdiHome} size={0.6}></Icon>
              </a>
            </li>
          </ul>
          <ul className="nav1">
            <li id="spinner">HI</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>
          Well,
          <span ref={el}> alo</span>
        </h1>
      </main>
    </>
  );
}

export default App;
