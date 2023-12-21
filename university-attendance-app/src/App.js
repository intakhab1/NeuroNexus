import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
