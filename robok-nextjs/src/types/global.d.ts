declare global {
  interface Window {
    Swiper: new (selector: string, options?: Record<string, unknown>) => {
      destroy: () => void;
    };
    WOW: {
      init: () => void;
    };
    jQuery: (selector: string | Document) => {
      ready: (callback: () => void) => void;
    };
  }
}

export {};