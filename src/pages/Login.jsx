import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useRef } from "react";

function Login() {
    const { setUser } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleLogin(e) {
        e.preventDefault();
        setError("");

        const email=emailRef.current.value;
        const password=passwordRef.current.value;

        if (!email || !password){
            setError("Fields cannot be left empty!");
            return;
        }

        if (password.length < 6) {
            setError("Password cannot be less than 6 characters!");
            return;
        }
        setUser({email});
        navigate("/dashboard");
    }

    return (
        <div>
            <div class="d-flex align-items-center justify-content-center min-vh-100">
                <div class="card shadow" style={{ width: "400px" }}>
                    <form class="card-body" onSubmit={handleLogin}>
                        <h3 class="text-start text-primary"><b>TenantTrails</b></h3>
                        <h6>See what past tenants had to say, before you sign.</h6>
                        <label for="email" class="form-label text-start mt-3">Email</label>
                        <input type="email" class="form-control text-start" id="email" placeholder="you@example.com" ref={emailRef}></input>
                        <label for="pass" class="form-label text-start mt-3">Password</label>
                        <input type="password" class="form-control text-start" id="pass" placeholder="Enter password" ref={passwordRef}></input>
                        <button class="btn btn-primary w-100 mt-3">Sign In</button>
                        {error && <h6 class="mt-3 alert alert-danger alert-dismissable"><button type="button" class="btn-close" onClick={() => setError("")}></button>{error}</h6>}
                        <h6>Don't have an account? <a class="text-primary cursor-pointer" onClick={() => navigate("/signup")}>Create one</a></h6>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login