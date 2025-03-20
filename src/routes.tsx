import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page from './components/page/Page';

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
                        <h1>About</h1>
                    </Page>
                } />
                <Route path="/credits" element={
                    <Page>
                        <h1>Credits</h1>
                    </Page>
                } />
            </Routes>
        </BrowserRouter>
    )
}