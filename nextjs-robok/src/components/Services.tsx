import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/assets/img/icon/2-white.png',
    title: 'Ai Development',
    description: 'Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.',
    link: '/services-details'
  },
  {
    icon: '/assets/img/icon/3-white.png',
    title: 'Data Science',
    description: 'Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.',
    link: '/services-details'
  },
  {
    icon: '/assets/img/icon/1-white.png',
    title: 'Machine Learning',
    description: 'Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.',
    link: '/services-details'
  },
  {
    icon: '/assets/img/icon/4-white.png',
    title: 'Chatbot Solutions',
    description: 'Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.',
    link: '/services-details'
  }
];

const teamMembers = [
  '/assets/img/team/11.jpg',
  '/assets/img/team/12.jpg',
  '/assets/img/team/13.jpg',
  '/assets/img/team/3.jpg'
];

export default function Services() {
  return (
    <div className="services-style-one-area default-padding blurry-shape-half-right-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Services</h4>
              <h2 className="title split-text-right split-text-in-right">AI-optimized design for innovative futures</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="service-style-one-items fade-up-anim">
          <div className="row gutter-zero">
            {/* Single Item - Curve Text */}
            <div 
              className="col-lg-4 col-md-6 service-one-tags" 
              style={{ backgroundImage: 'url(/assets/img/shape/banner-7.jpg)' }}
            >
              <div className="curve-text">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                  <text><textPath href="#textPath">Automation & predictive maintenance</textPath></text>
                </svg>
                <Image 
                  src="/assets/img/illustration/2.png" 
                  alt="Automation Illustration" 
                  width={200} 
                  height={150}
                />
              </div>
            </div>
            {/* End Single Item */}
            
            {/* Service Items */}
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                  <div className="icon">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={60} 
                      height={60}
                    />
                  </div>
                  <h4><Link href={service.link}>{service.title}</Link></h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
            
            {/* Community Card */}
            <div 
              className="col-lg-4 col-md-6 community-card text-light" 
              style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}
            >
              <h4>Ai Community</h4>
              <p>
                Dive into the art scene and unleash your inner artist!
              </p>
              <div className="info">
                <div className="multi-users">
                  {teamMembers.map((member, index) => (
                    <Image 
                      key={index}
                      src={member} 
                      alt={`Team Member ${index + 1}`} 
                      width={40} 
                      height={40}
                    />
                  ))}
                  <i className="fas fa-plus"></i>
                </div>
                <h5>Over 40M+ users </h5>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
      </div>
    </div>
  );
}