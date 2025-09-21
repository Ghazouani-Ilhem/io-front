import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="project-style-one-area default-padding bg-gray blurry-shape-half-right-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="fixed-content">
              <div className="site-heading">
                <h4 className="sub-title">Latest Projects</h4>
                <h2 className="title split-text-right split-text-in-right">Best projects for intelligent</h2>
              </div>
              <div className="project-fun-fact">
                <div className="js-counter">2,650+</div>
                <h4>Finished creative projects successfully using AI support</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-8 pl-50 pl-md-15 pl-xs-15">
            <div className="project-style-one-items">
              {/* Single Item */}
              <div className="project-style-one-item">
                <div className="thumb">
                  <Image src="/assets/img/projects/1.jpg" alt="Image Not Found" width={400} height={300} />
                  <Image src="/assets/img/shape/4.png" alt="Image Not Found" width={100} height={100} />
                </div>
                <div className="info">
                  <div className="top">
                    <h3><Link href="/project-details">Intelligent predictive maintenance system for industrial machinery</Link></h3>
                  </div>
                  <div className="bottom">
                    <a href="#" className="btn-simple">Explore More <i className="fas fa-long-arrow-right"></i></a>
                    <ul className="project-tags mt-30">
                      <li>Artificial</li>
                      <li>Technolgoy</li>
                      <li>Machine</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="project-style-one-item">
                <div className="thumb">
                  <Image src="/assets/img/projects/2.jpg" alt="Image Not Found" width={400} height={300} />
                  <Image src="/assets/img/shape/5.png" alt="Image Not Found" width={100} height={100} />
                </div>
                <div className="info">
                  <div className="top">
                    <h3><Link href="/project-details">Automated predictive maintenance system for industrial assets</Link></h3>
                  </div>
                  <div className="bottom">
                    <a href="#" className="btn-simple">Explore More <i className="fas fa-long-arrow-right"></i></a>
                    <ul className="project-tags mt-30">
                      <li>Artificial</li>
                      <li>Technolgoy</li>
                      <li>Machine</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="project-style-one-item">
                <div className="thumb">
                  <Image src="/assets/img/projects/3.jpg" alt="Image Not Found" width={400} height={300} />
                  <Image src="/assets/img/shape/6.png" alt="Image Not Found" width={100} height={100} />
                </div>
                <div className="info">
                  <div className="top">
                    <h3><Link href="/project-details">Advanced predictive maintenance for tech driven AI machinery</Link></h3>
                  </div>
                  <div className="bottom">
                    <a href="#" className="btn-simple">Explore More <i className="fas fa-long-arrow-right"></i></a>
                    <ul className="project-tags mt-30">
                      <li>Artificial</li>
                      <li>Technolgoy</li>
                      <li>Machine</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;