const GTM_EVENT = 'portfolio_virtual_page_view';

let lastTrackedUrl = '';

function getPageData() {
    const url = new URL(window.location.href);

    return {
        page_title: document.title,
        page_location: url.href,
        page_path: `${url.pathname}${url.search}${url.hash}`,
        page_hostname: url.hostname,
    };
}

export function pushDataLayer(event, data = {}) {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event,
        ...data,
    });
}

function updateClarity() {
    if (typeof window.clarity !== 'function') {
        return;
    }

    const data = getPageData();

    window.clarity(
        'set',
        'page_path',
        data.page_path.slice(0, 255),
    );

    window.clarity(
        'set',
        'page_title',
        data.page_title.slice(0, 255),
    );

    window.clarity(
        'set',
        'page_location',
        data.page_location.slice(0, 255),
    );
}

export function trackInitialPageView() {
    const currentUrl = window.location.href;

    if (lastTrackedUrl === currentUrl) {
        return;
    }

    lastTrackedUrl = currentUrl;

    const data = getPageData();

    pushDataLayer(GTM_EVENT, {
        ...data,
        navigation_type: 'initial',
    });

    updateClarity();
}

export function trackVirtualPageView() {
    const currentUrl = window.location.href;

    if (lastTrackedUrl === currentUrl) {
        return;
    }

    lastTrackedUrl = currentUrl;

    const data = getPageData();

    pushDataLayer(GTM_EVENT, {
        ...data,
        navigation_type: 'virtual',
    });

    updateClarity();
}

export function installAnalyticsNavigationTracking() {
    let installed = false;

    if (window.__ANALYTICS_NAVIGATION_INSTALLED__) {
        return () => {};
    }

    window.__ANALYTICS_NAVIGATION_INSTALLED__ = true;
    installed = true;

    const originalPushState = window.history.pushState;
    const originalReplaceState =
        window.history.replaceState;

    const handleNavigation = () => {
        window.setTimeout(trackVirtualPageView, 0);
    };

    const handlePopState = () => {
        window.setTimeout(trackVirtualPageView, 0);
    };

    const handleHashChange = () => {
        window.setTimeout(trackVirtualPageView, 0);
    };

    window.history.pushState = function (
        state,
        title,
        url,
    ) {
        const result = originalPushState.call(
            window.history,
            state,
            title,
            url,
        );

        handleNavigation();

        return result;
    };

    window.history.replaceState = function (
        state,
        title,
        url,
    ) {
        const result = originalReplaceState.call(
            window.history,
            state,
            title,
            url,
        );

        handleNavigation();

        return result;
    };

    window.addEventListener(
        'popstate',
        handlePopState,
    );

    window.addEventListener(
        'hashchange',
        handleHashChange,
    );

    return () => {
        if (!installed) {
            return;
        }

        window.history.pushState =
            originalPushState;

        window.history.replaceState =
            originalReplaceState;

        window.removeEventListener(
            'popstate',
            handlePopState,
        );

        window.removeEventListener(
            'hashchange',
            handleHashChange,
        );

        window.__ANALYTICS_NAVIGATION_INSTALLED__ =
            false;
    };
}