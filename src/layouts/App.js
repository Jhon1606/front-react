import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuthToken } from "../api/auth";
import { token } from "../config";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";
import { useNavigate } from "react-router-dom";

function App() {
  
  let navigate = useNavigate();

  useEffect(() => {
    if (!token){
      return navigate("/login");
    }
 });

 if(token){
  return <AdminLayot />
 }


  // const [ auth, setAuth ] = useState(true);
  // checkAuthToken().then(data => {
  //   if(data.authorization === true){
  //     setAuth(true);
  //   }else{
  //     setAuth(false);
  //   }
  // });
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
