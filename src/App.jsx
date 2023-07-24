import "./App.css";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/login&signup/Landing";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login/signup" element={<Landing />} />

            <Route path="/task-manager" element={<Dashboard />} />
            <Route path="/" element={<Navigate to={"/login/signup"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
