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
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(pathname) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  const normalizedPath =
    pathname === '/' || pathname === '' ? '/' : pathname;

  canonical.setAttribute('href', `${SITE_URL}${normalizedPath}`);
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const isNotFound =
    window.location.pathname !== '/' &&
    window.location.pathname !== '';

  useEffect(() => {
    document.title = isNotFound
      ? '404 — Page Not Found | Ajas'
      : 'Ajas — Developer, Builder & Learner';

    setMeta(
      'description',
      isNotFound
        ? 'The page you requested could not be found on Ajas’s portfolio.'
        : 'Ajas is a developer building practical web applications with React and JavaScript while exploring backend systems, databases, automation, and software engineering.',
    );

    setMeta(
      'robots',
      isNotFound
        ? 'noindex, nofollow, noarchive'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    setMeta(
      'googlebot',
      isNotFound
        ? 'noindex, nofollow, noarchive'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    setCanonical(window.location.pathname);
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
      window.addEventListener('load', finishLoading, { once: true });
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

      <div className={`app ${loaded ? 'app-loaded' : ''}`}>
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
