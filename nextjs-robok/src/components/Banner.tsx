'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const brandLogos = [
  '/assets/img/logo/1-light.png',
  '/assets/img/logo/2-light.png',
  '/assets/img/logo/3-light.png',
  '/assets/img/logo/4-light.png',
  '/assets/img/logo/5-light.png',
];

export default function Banner() {
  return (
    <div 
      className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" 
      style={{ background: 'url(/assets/img/shape/banner-1.jpg)' }}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-8 offset-xl-2">
            <div className="banner-one-content fade-up-anim">
              <h4>AI automation Partner</h4>
              <h2>
                Elevate your business with{' '}
                <strong style={{ backgroundImage: 'url(/assets/img/shape/banner-2.jpg)' }}>
                  AI-Power
                </strong>
              </h2>
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
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
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
                  }}
                  className="swiper-wrapper"
                >
                  {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-item">
                        <Image 
                          src={logo} 
                          alt="Brand Logo" 
                          width={120} 
                          height={60}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}