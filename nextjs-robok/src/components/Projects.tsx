import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    image: '/assets/img/projects/1.jpg',
    shape: '/assets/img/shape/4.png',
    title: 'Intelligent predictive maintenance system for industrial machinery',
    tags: ['Artificial', 'Technolgoy', 'Machine']
  },
  {
    id: 2,
    image: '/assets/img/projects/2.jpg',
    shape: '/assets/img/shape/5.png',
    title: 'Automated predictive maintenance system for industrial assets',
    tags: ['Artificial', 'Technolgoy', 'Machine']
  },
  {
    id: 3,
    image: '/assets/img/projects/3.jpg',
    shape: '/assets/img/shape/6.png',
    title: 'Advanced predictive maintenance for tech driven AI machinery',
    tags: ['Artificial', 'Technolgoy', 'Machine']
  }
];

export default function Projects() {
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
              {projects.map((project) => (
                <div key={project.id} className="project-style-one-item">
                  <div className="thumb">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={600} 
                      height={400}
                    />
                    <Image 
                      src={project.shape} 
                      alt="Project Shape" 
                      width={100} 
                      height={100}
                    />
                  </div>
                  <div className="info">
                    <div className="top">
                      <h3>
                        <Link href="/project-details">{project.title}</Link>
                      </h3>
                    </div>
                    <div className="bottom">
                      <a href="#" className="btn-simple">
                        Explore More <i className="fas fa-long-arrow-right"></i>
                      </a>
                      <ul className="project-tags mt-30">
                        {project.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}