import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page from './components/page/Page';
import About from './pages/about-us/About';
import Credits from './pages/credits/Credits';
import { User } from 'firebase/auth';

interface RoutesUrlProps {
    user: User | null;
}

export default function RoutesUrl({ user }: RoutesUrlProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Page user={user}>
                        <Home />
                    </Page>
                } />
                <Route path="/about" element={
                    <Page user={user}>
                        <About />
                    </Page>
                } />
                <Route path="/credits" element={
                    <Page user={user}>
                        <Credits />
                    </Page>
                } />
            </Routes>
        </BrowserRouter>
    )
}