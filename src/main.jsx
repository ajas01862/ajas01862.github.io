import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
    installAnalyticsNavigationTracking,
    trackInitialPageView,
} from './utils/analytics';

window.dataLayer = window.dataLayer || [];

trackInitialPageView();

const cleanupAnalytics =
    installAnalyticsNavigationTracking();

ReactDOM.createRoot(
    document.getElementById('root'),
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        cleanupAnalytics();
    });
}