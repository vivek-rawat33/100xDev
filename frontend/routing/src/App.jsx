import { lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing")); //lazy loading
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function TopBar() {
  const navigate = useNavigate();

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide">🚀 MyApp</h1>
        <nav className="space-x-4">
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Landing Page
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
}

export default App;
