'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const Scripts = () => {
  useEffect(() => {
    // Initialize any client-side functionality here
    if (typeof window !== 'undefined') {
      // Initialize WOW.js
      if (window.WOW) {
        window.WOW.init();
      }
      
      // Initialize other libraries as needed
      if (window.jQuery) {
        // Initialize jQuery plugins
        window.jQuery(document).ready(function() {
          // Initialize any jQuery plugins here
        });
      }
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.appear.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/progress-bar.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/count-to.js" strategy="afterInteractive" />
      <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/validnavs.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/js/lenis.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
};

export default Scripts;