import { lazy, Suspense, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Contact from "./components/Contact";
import { Context } from "./components/Context";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing")); //lazy loading
function App() {
  const [Prop, setProp] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={Prop}>
          //context api
          <TopBar />
        </Context.Provider>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading ..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading ..."}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={"Loading ..."}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function TopBar() {
  const navigate = useNavigate();
  const value = useContext(Context);

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
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default App;
