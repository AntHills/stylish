import Sidebar from "./components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
