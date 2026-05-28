import './App.css'
function App() {
  return (
    <div>
    <div className="navbar">
    <h2 className="logo">TenantTrails</h2>
    <div className="rightContainer"><button className="btnwht">Sign In</button><button className="btnblu">Get Started</button></div>
    </div>
    <div className="landing">
      <p className='smallbluetext'>launching in Halifax, Nova Scotia</p>
      <h1><b>Know what you're <br></br> signing before <br></br> you sign it.</b></h1>
      <p>Honest apartment reviews from past tenants. See AI- <br></br> generated summaries. Make informed decisions about <br></br> where you live.</p>
      <button className="btnblu">Create Free Account</button><button className="btnwht"> Sign In</button>
    </div>
    </div>
  )
}
export default App