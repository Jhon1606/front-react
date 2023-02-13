import { useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuthToken } from "../api/auth";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

function App() {
  
  const [ auth, setAuth ] = useState(true);

  checkAuthToken().then(data => {
    if(data.authorization === true){
      setAuth(true);
    }else{
      setAuth(false);
    }
  });

  if(auth === true){
    return <AdminLayot />
  }else{
    window.location.href = '/login'
  }


}

function AdminLayot() {
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
}

export default App;
