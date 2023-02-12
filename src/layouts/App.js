import { Outlet } from "react-router-dom";
import { checkAuthToken } from "../api/auth";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

function App() {
  const a = checkAuthToken();
  a.then((data) => {console.log(data.authorization);
    if (authorization === true) {
      
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
    }else{
      return(
        <>
          <h1>Inicia sesión</h1>
        </>
      );
    }
  });
  console.log(a);
}

function AdminLayot() {}

export default App;
