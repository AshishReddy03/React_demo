import { use, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About1 from "./Components/About1";
import Formbox from "./Components/Formbox";
import Alert from "./Components/Alert";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setAlert("DARK MODE ENABLED");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("LIGHT MODE ENABLED");
    }
  };
  const showalert = (msg) => {
    setAlert(msg);
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About1 />} />
        <Route
          path="/"
          element={
            <Formbox
              heading="ENTER THE TEXT TO ANALYSE BELOW"
              mode={mode}
              showalert={showalert}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
