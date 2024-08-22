import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
