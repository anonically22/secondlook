import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Capabilities from '../components/sections/Capabilities';
import Findings from '../components/sections/Findings';
import Workflow from '../components/sections/Workflow';
import ReportExport from '../components/sections/ReportExport';
import FinalCTA from '../components/sections/FinalCTA';

const Landing = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans overflow-x-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--app-bg)', color: 'var(--app-text)' }}>
            <Header />
            <main className="flex flex-col">
                <Hero />
                <Capabilities />
                <Findings />
                <Workflow />
                <ReportExport />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
