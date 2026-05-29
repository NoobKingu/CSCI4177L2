import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dash from './pages/Dash.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
    return (
    <AuthProvider >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dash/></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    </AuthProvider >
    )
}
export default App;