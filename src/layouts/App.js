import { Outlet } from "react-router-dom";
import Sidebar from '../layouts/Sidebar'
import Topbar from '../layouts/Topbar'

function App() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar/>
        </div>
        <div className="w-100">
          <Topbar/>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
