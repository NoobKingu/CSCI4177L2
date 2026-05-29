function LandingPage() {
  return (
    <div>
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <h2 class="navbar-brand text-primary">TenantTrails</h2>
          <div class="justify-content-end">
          <button class="btn">Sign In</button>
          <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-column align-items-center justify-content-center text-center pt-5 mt-5">
        <h6 class="text-primary">launching in Halifax, Nova Scotia</h6>
        <h1><b>Know what you're <br></br> signing before <br></br> you sign it.</b></h1>
        <p>Honest apartment reviews from past tenants. See AI- <br></br> generated summaries. Make informed decisions about <br></br> where you live.</p>
        <div class="d-flex gap-3">
          <button class="btn btn-primary">Create Free Account</button><button class="btn btn-basic"> Sign In</button>
        </div>
        <div class="d-flex pt-5 gap-4">
          <p>⭐<br></br><b>Verified Reviews</b><br></br>Real ratings with photos and<br></br>videos from past tenants.</p>
          <p>🤖<br></br><b>AI Summaries</b><br></br>Key issues and sentiment<br></br>extracted from every<br></br>review.</p>
          <p>💬<br></br><b>Ask Questions</b><br></br>Comment on reviews and<br></br>get answers from past<br></br>tenants.</p>
        </div>
      </div>
    </div>
  )
}
export default LandingPage