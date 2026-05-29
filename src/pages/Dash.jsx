import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dash() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log(user)

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid d-flex align-items-center">
          <h2 class="navbar-brand text-primary">TenantTrails</h2>
          <input type="text" class="text-start me-auto" id="searchbar" placeholder="🔍 Search apartments by address or neighbourhood..." style={{ width: "400px" }}></input>
          <div class="d-flex align-items-center gap-2 justify-content-end">
            <h5 class="navbar-item text-primary">Welcome, {user?.email}</h5>
            <button class="btn btn-primary" onClick={() => handleLogout()}>Sign Out</button>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-column align-items-center justify-content-center text-center pt-5 mt-5">
        <h6 class="text-primary">Placeholder Dashboard for Lab2</h6>
      </div>
    </div>
  )
}
export default Dash