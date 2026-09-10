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

const SITE_URL = 'https://ajas.qzz.io';

function setMeta(name, content) {
    let element = document.head.querySelector(
        `meta[name="${name}"]`,
    );

    if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
    }

    element.content = content;
}

function setCanonical(url) {
    let element = document.head.querySelector(
        'link[rel="canonical"]',
    );

    if (!element) {
        element = document.createElement('link');
        element.rel = 'canonical';
        document.head.appendChild(element);
    }

    element.href = url;
}

export default function App() {
    const [loaded, setLoaded] = useState(false);

    const isNotFound =
        window.location.pathname !== '/' &&
        window.location.pathname !== '';

    useEffect(() => {
        if (isNotFound) {
            document.title = '404 — Page Not Found | Ajas';
            setMeta('robots', 'noindex, nofollow');
            setMeta('googlebot', 'noindex, nofollow');
            setCanonical(`${SITE_URL}${window.location.pathname}`);
            return;
        }

        document.title = 'Ajas — Developer, Builder & Learner';

        setMeta(
            'robots',
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        );

        setMeta(
            'googlebot',
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        );

        setCanonical(`${SITE_URL}/`);
    }, [isNotFound]);

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
            window.addEventListener('load', finishLoading, {
                once: true,
            });
        }

        loadingFallback = window.setTimeout(finishLoading, 2500);

        return () => {
            cancelled = true;
            window.clearTimeout(loadingFallback);
            window.removeEventListener('load', finishLoading);
        };
    }, []);

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