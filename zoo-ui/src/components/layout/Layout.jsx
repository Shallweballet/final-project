import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideDecor from "./SideDecor";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-grid">
        <SideDecor side="left" />

        <section className="center">
          <Outlet />
        </section>

        <SideDecor side="right" />
      </main>

      <Footer />
    </div>
  );
}