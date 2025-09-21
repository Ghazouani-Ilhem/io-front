import Link from 'next/link';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="team-style-one-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">AI Developer</h4>
              <h2 className="title split-text-right split-text-in-right">Meet our talent for <br /> intelligent solutions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team-style-one-items">
              {/* Single Item */}
              <div className="team-style-one-item wow fadeInUp">
                <div className="thumb">
                  <Image src="/assets/img/team/13.jpg" alt="Image Not Found" width={300} height={300} />
                  <div className="social-overlay">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                    </ul>
                    <div className="icon">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h4><Link href="/team-details">Aleesha Brown</Link></h4>
                  <span>Ai Programmer</span>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="team-style-one-item wow fadeInUp" data-wow-delay="100ms">
                <div className="thumb">
                  <Image src="/assets/img/team/12.jpg" alt="Image Not Found" width={300} height={300} />
                  <div className="social-overlay">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                    </ul>
                    <div className="icon">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h4><Link href="/team-details">Kevin Martin</Link></h4>
                  <span>Data Analyst</span>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="team-style-one-item wow fadeInUp" data-wow-delay="200ms">
                <div className="thumb">
                  <Image src="/assets/img/team/11.jpg" alt="Image Not Found" width={300} height={300} />
                  <div className="social-overlay">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                    </ul>
                    <div className="icon">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h4><Link href="/team-details">Sarah Albert</Link></h4>
                  <span>Robotics Engineer</span>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="team-style-one-item wow fadeInUp" data-wow-delay="300ms">
                <div className="thumb">
                  <Image src="/assets/img/team/14.jpg" alt="Image Not Found" width={300} height={300} />
                  <div className="social-overlay">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                    </ul>
                    <div className="icon">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h4><Link href="/team-details">Amanulla Joey</Link></h4>
                  <span>Data Collector</span>
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

export default Team;