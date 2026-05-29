function Signup() {
    return (
        <div>
            <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>

            <div class="d-flex align-items-center justify-content-center min-vh-100">
                <div class="card shadow" style={{ width: "400px" }}>
                    <form class="card-body">
                        <h3 class="text-start text-primary"><b>TenantTrails</b></h3>
                        <h6>Create your account to submit reviews and comments.</h6>
                        <label for="fullname" class="form-label text-start mt-3">Full name</label>
                        <input type="text" class="form-control text-start" id="fullname" placeholder="Your name"></input>
                        <label for="email" class="form-label text-start mt-3">Email</label>
                        <input type="email" class="form-control text-start" id="email" placeholder="you@example.com"></input>
                        <label for="pass" class="form-label text-start mt-3">Password</label>
                        <input type="password" class="form-control text-start" id="pass" placeholder="At least 6 characters"></input>
                        <label for="passconfirm" class="form-label text-start mt-3">Confirm password</label>
                        <input type="password" class="form-control text-start" id="passconfirm" placeholder="Repeat password"></input>
                        <button class="btn btn-primary w-100 mt-3">Sign In</button>
                        <h6>Already have an account? <span class="text-primary">Sign in</span></h6>

                    </form>

                </div>
            </div>

        </div>
    )
}
export default Signup