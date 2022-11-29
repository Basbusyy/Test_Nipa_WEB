import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProfilePage from "./page/ProfilePage";
import TicketPage from "./page/TicketPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<TicketPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
