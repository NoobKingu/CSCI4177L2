import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useRef } from "react";

function Signup() {
    const { setUser } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    
    function handleSignup(e) {
        e.preventDefault();
        setError("");

        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value;

        if (!name || !email || !password || !confirmPassword){
            setError("Fields cannot be left empty!");
            return;
        }
        if (password.length < 6) {
            setError("Password cannot be less than 6 characters!");
            return;
        }
        if (password !== confirmPassword) {
            setError("Confirm password does not match entered password!");
            return;
        }

        setUser({email});
        navigate("/dashboard");
    }

    return (
        <div>
            <div class="d-flex align-items-center justify-content-center min-vh-100">
                <div class="card shadow" style={{ width: "400px" }}>
                    <form class="card-body" onSubmit={handleSignup}>
                        <h3 class="text-start text-primary"><b>TenantTrails</b></h3>
                        <h6>Create your account to submit reviews and comments.</h6>
                        <label for="fullname" class="form-label text-start mt-3">Full name</label>
                        <input type="text" class="form-control text-start" id="fullname" placeholder="Your name" ref={nameRef}></input>
                        <label for="email" class="form-label text-start mt-3">Email</label>
                        <input type="email" class="form-control text-start" id="email" placeholder="you@example.com" ref={emailRef}></input>
                        <label for="pass" class="form-label text-start mt-3">Password</label>
                        <input type="password" class="form-control text-start" id="pass" placeholder="At least 6 characters" ref={passwordRef}></input>
                        <label for="passconfirm" class="form-label text-start mt-3">Confirm password</label>
                        <input type="password" class="form-control text-start" id="passconfirm" placeholder="Repeat password" ref={confirmPasswordRef}></input>
                        <button class="btn btn-primary w-100 mt-3">Sign up</button>
                        <h6>Already have an account? <a class="text-primary cursor-pointer" onClick={() => navigate("/login")}>Sign in</a></h6>
                        {error && <h6 class="mt-3 alert alert-danger alert-dismissable"><button type="button" class="btn-close" onClick={() => setError("")}></button>{error}</h6>}

                    </form>

                </div>
            </div>

        </div>
    )
}
export default Signup