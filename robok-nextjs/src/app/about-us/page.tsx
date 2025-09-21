import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{background: 'url(/assets/img/shape/banner-1.jpg)'}}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-8 offset-xl-2">
              <div className="banner-one-content fade-up-anim">
                <h4>About Us</h4>
                <h2>Unlock limitless possibilities with our <strong style={{backgroundImage: 'url(/assets/img/shape/banner-2.jpg)'}}>intelligent solutions</strong></h2>
                <div className="content">
                  <p>
                    We are a leading AI agency focused on leveraging advanced technology to help businesses overcome challenges and achieve unprecedented growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-style-one-area default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="about-style-one-info bg-gray fade-up-anim">
                <h2 className="fixed-text">Robok</h2>
                <h4 className="sub-title">About Robok</h4>
                <h2 className="title">Unlock limitless possibilities with our intelligent solutions</h2>
                <p>
                  This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help businesses or individuals overcome challenges and achieve unprecedented growth. Below are some key details that could be associated with this statement. AI algorithms analyze your business needs and automatically. Tailors responses based on user behavior to help businesses and individuals overcome challenges and achieve Real fond attachment.
                </p>
                <p>
                  Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only work but drive real results. We believe in the power of AI to transform industries and create new opportunities for growth and innovation.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="card-style-one-item fade-up-anim bg-gradient text-light">
                <Image src="/assets/img/illustration/4.png" alt="Image Not Found" width={300} height={200} />
                <div className="info">
                  <h3>API integration to your business</h3>
                  <p>
                    Application programming interface integration has become essential for modern machines businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-area default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="fun-fact text-center">
                <div className="js-counter">500+</div>
                <h4>Projects Completed</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fun-fact text-center">
                <div className="js-counter">50+</div>
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fun-fact text-center">
                <div className="js-counter">5+</div>
                <h4>Years Experience</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fun-fact text-center">
                <div className="js-counter">24/7</div>
                <h4>Support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Our Team</h4>
                <h2 className="title">Meet our talented team of AI experts</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-style-one-items">
                <div className="team-style-one-item wow fadeInUp">
                  <div className="thumb">
                    <Image src="/assets/img/team/13.jpg" alt="Image Not Found" width={300} height={300} />
                    <div className="social-overlay">
                      <ul>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4>Aleesha Brown</h4>
                    <span>AI Programmer</span>
                  </div>
                </div>
                <div className="team-style-one-item wow fadeInUp" data-wow-delay="100ms">
                  <div className="thumb">
                    <Image src="/assets/img/team/12.jpg" alt="Image Not Found" width={300} height={300} />
                    <div className="social-overlay">
                      <ul>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4>Kevin Martin</h4>
                    <span>Data Analyst</span>
                  </div>
                </div>
                <div className="team-style-one-item wow fadeInUp" data-wow-delay="200ms">
                  <div className="thumb">
                    <Image src="/assets/img/team/11.jpg" alt="Image Not Found" width={300} height={300} />
                    <div className="social-overlay">
                      <ul>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4>Sarah Albert</h4>
                    <span>Robotics Engineer</span>
                  </div>
                </div>
                <div className="team-style-one-item wow fadeInUp" data-wow-delay="300ms">
                  <div className="thumb">
                    <Image src="/assets/img/team/14.jpg" alt="Image Not Found" width={300} height={300} />
                    <div className="social-overlay">
                      <ul>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="info">
                    <h4>Amanulla Joey</h4>
                    <span>Data Collector</span>
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