/// <reference types="vite/client" />

interface Window {
  dataLayer: Array<Record<string, unknown>>;
  clarity?: (...args: unknown[]) => void;
  __GTM_INITIALIZED__?: boolean;
  __CLARITY_INITIALIZED__?: boolean;
  __ANALYTICS_NAVIGATION_INSTALLED__?: boolean;
}
