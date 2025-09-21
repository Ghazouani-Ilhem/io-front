'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.brand-style-one-carousel', {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          },
        });
      }
    };

    // Wait for Swiper to be loaded
    const timer = setTimeout(initSwiper, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{background: 'url(/assets/img/shape/banner-1.jpg)'}}>
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-8 offset-xl-2">
            <div className="banner-one-content fade-up-anim">
              <h4>AI automation Partner</h4>
              <h2>Elevate your business with <strong style={{backgroundImage: 'url(/assets/img/shape/banner-2.jpg)'}}>AI-Power</strong> </h2>
              <div className="content">
                <p>
                  Technologies into businesses to enhance efficiency, decision-making, and overall performance. They offer services such as AI implementation.
                </p>
                <div className="button mt-30">
                  <Link href="/contact-us" className="btn btn-style-one light">
                    Join Today <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-items">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="brand-style-one-carousel swiper wow fadeInUp" data-wow-delay="400ms">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <Image src="/assets/img/logo/1-light.png" alt="Image Not Found" width={120} height={60} />
                    </div>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <Image src="/assets/img/logo/2-light.png" alt="Image Not Found" width={120} height={60} />
                    </div>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <Image src="/assets/img/logo/3-light.png" alt="Image Not Found" width={120} height={60} />
                    </div>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <Image src="/assets/img/logo/4-light.png" alt="Image Not Found" width={120} height={60} />
                    </div>
                  </div>
                  {/* End Single item */}
                  {/* Single item */}
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <Image src="/assets/img/logo/5-light.png" alt="Image Not Found" width={120} height={60} />
                    </div>
                  </div>
                  {/* End Single item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;