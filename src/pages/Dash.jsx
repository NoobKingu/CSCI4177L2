import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dash() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid">
          <h2 class="navbar-brand text-primary">TenantTrails</h2>
          <input type="text" class="text-start me-auto" id="searchbar" placeholder="🔍 Search apartments by address or neighbourhood..."></input>
          <div class="justify-content-end">
            <button class="btn">Sign Out</button>
            <h6 class="navbar-item text-primary">Welcome, {user?.name}</h6>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-column align-items-center justify-content-center text-center pt-5 mt-5">
        <h6 class="text-primary">test</h6>
      </div>
    </div>
  )
}
export default Dash