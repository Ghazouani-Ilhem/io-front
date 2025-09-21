'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const Testimonial = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        new window.Swiper('.testimonial-style-one-carousel', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.testimonial-swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
          },
        });
      }
    };

    // Wait for Swiper to be loaded
    const timer = setTimeout(initSwiper, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="testimonial-style-one-area blurry-shape default-padding bg-dark text-light">
      <div className="container container-stage-lg">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="testimonial-thumb image-scale-animation">
              <Image className="image-scale-animation-item" src="/assets/img/illustration/7.png" alt="Image Not Found" width={400} height={300} />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="site-heading">
              <h4 className="sub-title">Testimonials</h4>
              <h2 className="title split-text-right split-text-in-right">What People Say</h2>
            </div>
            <div className="testimonial-style-one-carousel swiper fade-up-anim">
              <div className="swiper-wrapper">
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="testimonial-style-one-item">
                    <div className="tm-provider">
                      <div className="quote">
                        <i className="icon-quote"></i>
                      </div>
                      <div className="info">
                        <h4>Michel Dark</h4>
                        <div className="icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      Targeting consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension the environment.
                    </p>
                  </div>
                </div>
                {/* End Single Item */}

                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="testimonial-style-one-item">
                    <div className="tm-provider">
                      <div className="quote">
                        <i className="icon-quote"></i>
                      </div>
                      <div className="info">
                        <h4>Kevin Martin</h4>
                        <div className="icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      Mentioning consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension the environment.
                    </p>
                  </div>
                </div>
                {/* End Single Item */}
              </div>

              {/* Navigation */}
              <div className="testimonial-one-control">
                <div className="testimonial-swiper-pagination"></div>
                <div className="testimonial-swiper-nav">
                  <div className="testimonial-swiper-button-prev">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="testimonial-swiper-button-next">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;