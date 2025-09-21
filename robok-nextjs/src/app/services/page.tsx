import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{background: 'url(/assets/img/shape/banner-1.jpg)'}}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-8 offset-xl-2">
              <div className="banner-one-content fade-up-anim">
                <h4>Our Services</h4>
                <h2>AI-optimized solutions for <strong style={{backgroundImage: 'url(/assets/img/shape/banner-2.jpg)'}}>innovative futures</strong></h2>
                <div className="content">
                  <p>
                    We provide comprehensive AI services to help businesses transform and grow in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Services</h4>
                <h2 className="title">AI-optimized design for innovative futures</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="service-style-one-items fade-up-anim">
            <div className="row gutter-zero">
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/2-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">AI Development</Link></h4>
                  <p>
                    Custom AI solutions tailored to your business needs. From machine learning models to intelligent automation systems.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
              
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/3-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">Data Science</Link></h4>
                  <p>
                    Extract valuable insights from your data with our advanced analytics and data science solutions.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
              
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/1-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">Machine Learning</Link></h4>
                  <p>
                    Build intelligent systems that learn and adapt to improve performance over time.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
              
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/4-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">Chatbot Solutions</Link></h4>
                  <p>
                    Intelligent conversational AI that enhances customer experience and automates support.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
              
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/2-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">Predictive Analytics</Link></h4>
                  <p>
                    Forecast future trends and behaviors to make data-driven business decisions.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
              
              {/* Single Item */}
              <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image src="/assets/img/icon/3-white.png" alt="Image Not Found" width={60} height={60} />
                  </div>
                  <h4><Link href="/services-details">AI Consulting</Link></h4>
                  <p>
                    Strategic guidance to help you identify and implement AI opportunities in your business.
                  </p>
                  <Link href="/services-details" className="btn-simple">Learn More <i className="fas fa-long-arrow-right"></i></Link>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-style-one-area default-padding-top bg-theme text-light bg-cover" style={{backgroundImage: 'url(/assets/img/shape/banner-6.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8">
              <div className="site-heading">
                <h4 className="sub-title">Our Process</h4>
                <h2 className="title">How we deliver AI solutions</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="process-style-one-items">
                <div className="process-style-one-item fade-up-anim">
                  <h2>01</h2>
                  <h4>Discovery & Strategy</h4>
                  <p>
                    We analyze your business needs and identify AI opportunities that align with your goals.
                  </p>
                </div>
                <div className="process-style-one-item fade-up-anim">
                  <h2>02</h2>
                  <h4>Custom AI Development</h4>
                  <p>
                    Our team builds tailored AI solutions using cutting-edge technologies and best practices.
                  </p>
                </div>
                <div className="process-style-one-item fade-up-anim">
                  <h2>03</h2>
                  <h4>Optimization & Support</h4>
                  <p>
                    We continuously monitor and optimize your AI systems to ensure peak performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-area default-padding bg-gray">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2>Ready to transform your business with AI?</h2>
                <p>Get started with our AI solutions today and unlock new possibilities for growth.</p>
              </div>
            </div>
            <div className="col-lg-4 text-end">
              <Link href="/contact-us" className="btn btn-style-one">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}