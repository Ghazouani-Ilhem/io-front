'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Michel Dark',
    rating: 5,
    text: 'Targeting consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension the environment.'
  },
  {
    id: 2,
    name: 'Kevin Martin',
    rating: 5,
    text: 'Mentioning consultation discover apartments. ndulgence off under folly death is wrote causes maintaing way spite. Plan upon yet way get coldest spot its week. Almost do am or limits hearts resolve parties the regular intension the environment.'
  }
];

export default function Testimonials() {
  return (
    <div className="testimonial-style-one-area blurry-shape default-padding bg-dark text-light">
      <div className="container container-stage-lg">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="testimonial-thumb image-scale-animation">
              <Image 
                className="image-scale-animation-item" 
                src="/assets/img/illustration/7.png" 
                alt="Testimonial Illustration" 
                width={400} 
                height={500}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="site-heading">
              <h4 className="sub-title">Testimonials</h4>
              <h2 className="title split-text-right split-text-in-right">What People Say</h2>
            </div>
            <div className="testimonial-style-one-carousel swiper fade-up-anim">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.testimonial-swiper-button-next',
                  prevEl: '.testimonial-swiper-button-prev',
                }}
                pagination={{
                  el: '.testimonial-swiper-pagination',
                  clickable: true,
                }}
                className="swiper-wrapper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-style-one-item">
                      <div className="tm-provider">
                        <div className="quote">
                          <i className="icon-quote"></i>
                        </div>
                        <div className="info">
                          <h4>{testimonial.name}</h4>
                          <div className="icon">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p>{testimonial.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

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
}