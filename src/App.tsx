import "./App.css";
import { MainPage } from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacts } from "./components/Contacts";
import { PersonalAccount } from "./components/PersonalAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<PersonalAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
