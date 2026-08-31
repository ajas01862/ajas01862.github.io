import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import NotFound from './Pages/404';

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;
        let loadingFallback;

        const finishLoading = () => {
            if (cancelled) {
                return;
            }

            requestAnimationFrame(() => {
                window.setTimeout(() => {
                    if (!cancelled) {
                        setLoaded(true);
                    }
                }, 250);
            });
        };

        if (document.readyState === 'complete') {
            finishLoading();
        } else {
            window.addEventListener(
                'load',
                finishLoading,
                { once: true },
            );
        }

        loadingFallback = window.setTimeout(
            finishLoading,
            2500,
        );

        return () => {
            cancelled = true;

            window.clearTimeout(
                loadingFallback,
            );

            window.removeEventListener(
                'load',
                finishLoading,
            );
        };
    }, []);

    const isNotFound =
        window.location.pathname !== '/' &&
        window.location.pathname !== '';

    if (isNotFound) {
        return <NotFound />;
    }

    return (
        <>
            {!loaded && <Loader />}

            <div
                className={`app ${
                    loaded ? 'app-loaded' : ''
                }`}
            >
                <Background />

                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}