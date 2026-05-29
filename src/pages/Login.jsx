function Login() {
    return (
        <div>
            <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>

            <div class="d-flex align-items-center justify-content-center min-vh-100">
                <div class="card shadow" style={{ width: "400px" }}>
                    <form class="card-body">
                        <h3 class="text-start text-primary"><b>TenantTrails</b></h3>
                        <h6>See what past tenants had to say, before you sign.</h6>
                        <label for="email" class="form-label text-start mt-3">Email</label>
                        <input type="email" class="form-control text-start" id="email" placeholder="you@example.com"></input>
                        <label for="pass" class="form-label text-start mt-3">Password</label>
                        <input type="password" class="form-control text-start" id="pass" placeholder="Enter password"></input>
                        <button class="btn btn-primary w-100 mt-3">Sign In</button>
                        <h6>Don't have an account? <span class="text-primary">Create one</span></h6>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login