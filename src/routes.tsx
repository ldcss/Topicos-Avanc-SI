import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page from './components/page/Page';
import About from './pages/about-us/About';
import Credits from './pages/credits/Credits';

export default function RoutesUrl(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Page>
                        <Home />
                    </Page>
                } />
                <Route path="/about" element={
                    <Page>
                        <About />
                    </Page>
                } />
                <Route path="/credits" element={
                    <Page>
                        <Credits />
                    </Page>
                } />
            </Routes>
        </BrowserRouter>
    )
}