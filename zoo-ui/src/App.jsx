import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import TicketsPage from "./pages/TicketsPage";
import VolunteersPage from "./pages/VolunteersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}