import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="about-style-one-area default-padding-top blurry-shape-top-full">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div 
              className="about-style-one-info bg-gray fade-up-anim" 
              style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}
            >
              <h2 className="fixed-text">Robok</h2>
              <h4 className="sub-title">About Robok</h4>
              <h2 className="title">Unlock limitless possibilities with our intelligent solutions</h2>
              <p>
                This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help businesses or individuals overcome challenges and achieve unprecedented growth. Below are some key details that could be associated with this statement. AI algorithms analyze your business needs and automatically. Tailors responses based on user behavior to help businesses and individuals overcome challenges and achieve Real fond attachment.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="card-style-one-item fade-up-anim bg-gradient text-light">
              <Image 
                src="/assets/img/illustration/4.png" 
                alt="API Integration" 
                width={300} 
                height={200}
              />
              <div className="info">
                <h3>API integration to your business</h3>
                <p>
                  Application programming interface integration has become essential for modern machines businesses.
                </p>
                <div className="text-end mt-80">
                  <Link href="/about-us" className="btn btn-style-one border-light">
                    Explore More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-style-one-two fade-up-anim mt-30">
              <h4>Seamless Integration</h4>
              <div className="bottom">
                <Image 
                  src="/assets/img/illustration/5.png" 
                  alt="Integration Illustration" 
                  width={200} 
                  height={150}
                />
                <div className="fun-fact">
                  <div className="js-counter">28K</div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}