import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <h2 className="navbar-brand text-primary">TenantTrails</h2>
          <div className="justify-content-end">
            <button className="btn" onClick={() => {navigate("/login")}}>Sign In</button>
            <button className="btn btn-primary" onClick={() => {navigate("/signup")}}>Get Started</button>
          </div>
        </div>
      </nav>

      <div className="d-flex flex-column align-items-center justify-content-center text-center pt-5 mt-5">
        <h6 className="text-primary">launching in Halifax, Nova Scotia</h6>
        <h1><b>Know what you're <br></br> signing before <br></br> you sign it.</b></h1>
        <p>Honest apartment reviews from past tenants. See AI- <br></br> generated summaries. Make informed decisions about <br></br> where you live.</p>
        <div className="d-flex gap-3">
          <button className="btn btn-primary" onClick={() => {navigate("/signup")}}>Create Free Account</button><button className="btn btn-basic" onClick={() => {navigate("/login")}}> Sign In</button>
        </div>
        <div className="d-flex pt-5 gap-4">
          <p>⭐<br></br><b>Verified Reviews</b><br></br>Real ratings with photos and<br></br>videos from past tenants.</p>
          <p>🤖<br></br><b>AI Summaries</b><br></br>Key issues and sentiment<br></br>extracted from every<br></br>review.</p>
          <p>💬<br></br><b>Ask Questions</b><br></br>Comment on reviews and<br></br>get answers from past<br></br>tenants.</p>
        </div>
      </div>
    </div>
  )
}
export default LandingPage