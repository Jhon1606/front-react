import { Outlet } from "react-router-dom";
import { checkAuthToken } from "../api/auth";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

function App() {
  
      
      return (
        <>
          <div className="d-flex">
            <div>
              <Sidebar />
            </div>
            <div className="w-100">
              <Topbar />
              <div className="p-5">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      );
  };

function AdminLayot() {}

export default App;
