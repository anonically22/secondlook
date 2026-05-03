import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Analyze from './pages/Analyze';
import Admin from './pages/Admin';
import AuditReport from './pages/AuditReport';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/analyze" element={<Analyze />} />
                <Route path="/audit" element={<AuditReport />} />
                <Route path="/masteradmin" element={<Admin />} />
            </Routes>
        </Router>
    );
}

export default App;
