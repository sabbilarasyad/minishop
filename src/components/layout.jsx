import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fa]">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;