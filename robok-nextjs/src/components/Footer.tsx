import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer-style-one box-layout bg-dark text-light">
      <div className="footer-shape">
        <Image src="/assets/img/shape/globe.png" alt="Image Not Found" width={200} height={200} />
      </div>
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="f-item contact">
                <h4 className="widget-title"> Contact</h4>
                <p>
                  128 Kuaram old Road, parkvenue, Greater London, <br /> NW18JR Puran, United Kingdom
                </p>
                <ul className="contact">
                  <li>
                    <p>Phone Number</p>
                    <h4><a href="tel:+4733378901">+012-3455700</a></h4>
                  </li>
                  <li>
                    <p>Email</p>
                    <h4><a href="mailto:someone@example.com">info@robok.com</a></h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="footer-style-one-items">
                {/* Single Item */}
                <div className="f-item link">
                  <h4 className="widget-title">Company</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">About</Link>
                    </li>
                    <li>
                      <Link href="/about-us-2">Expertise</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Sustainability</Link>
                    </li>
                    <li>
                      <Link href="/blog-with-sidebar">News & Media</Link>
                    </li>
                    <li>
                      <Link href="/project">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="f-item link">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    <li>
                      <Link href="/services-details">Machine Learning</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Chatboot</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Ai Development</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Data Science</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Predictive Analytics</Link>
                    </li>
                    <li>
                      <Link href="/services-details">Machine Learning</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="f-item link">
                  <h4 className="widget-title">Resources</h4>
                  <ul>
                    <li>
                      <Link href="/about-us">Events</Link>
                    </li>
                    <li>
                      <Link href="/faq">Community</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Social Media</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Plans & Pricing</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Newsletter</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Career</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Footer Bottom */}
      <div className="footer-bottom-one">
        <div className="container">
          <div className="content">
            <div className="row align-center">
              <div className="col-lg-6 col-md-6">
                <div className="logo">
                  <Link href="#"><Image src="/assets/img/logo-light.png" alt="Logo" width={120} height={40} /></Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="footer-item-social text-end">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><Image src="/assets/img/icon/twitter-x.png" alt="Image Not Found" width={20} height={20} /></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Bottom */}

      {/* Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>© <a href="#">validthemes</a> 2025. All Rights Reserved</p>
            </div>
            <div className="col-lg-6 text-end">
              <ul>
                <li>
                  <Link href="/about-us">Terms</Link>
                </li>
                <li>
                  <Link href="/about-us">Privacy</Link>
                </li>
                <li>
                  <Link href="/contact-us">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Bottom */}
    </footer>
  );
};

export default Footer;