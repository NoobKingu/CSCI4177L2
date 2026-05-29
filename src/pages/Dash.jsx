function Dash() {
  return (
    <div>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid">
          <h2 class="navbar-brand text-primary">TenantTrails</h2>
          <input type="text" class="text-start me-auto" id="searchbar" placeholder="🔍 Search apartments by address or neighbourhood..."></input>
          <div class="justify-content-end">
            <button class="btn">Sign In</button>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-column align-items-center justify-content-center text-center pt-5 mt-5">
        <h6 class="text-primary">Temp Dash</h6>
      </div>
    </div>
  )
}
export default Dash