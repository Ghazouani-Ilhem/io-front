import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    image: '/assets/img/team/13.jpg',
    name: 'Aleesha Brown',
    position: 'Ai Programmer',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-dribbble', href: '#' },
      { icon: 'fab fa-facebook-f', href: '#' }
    ]
  },
  {
    id: 2,
    image: '/assets/img/team/12.jpg',
    name: 'Kevin Martin',
    position: 'Data Analyst',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-dribbble', href: '#' },
      { icon: 'fab fa-facebook-f', href: '#' }
    ]
  },
  {
    id: 3,
    image: '/assets/img/team/11.jpg',
    name: 'Sarah Albert',
    position: 'Robotics Engineer',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-dribbble', href: '#' },
      { icon: 'fab fa-facebook-f', href: '#' }
    ]
  },
  {
    id: 4,
    image: '/assets/img/team/14.jpg',
    name: 'Amanulla Joey',
    position: 'Data Collector',
    socialLinks: [
      { icon: 'fab fa-linkedin-in', href: '#' },
      { icon: 'fab fa-dribbble', href: '#' },
      { icon: 'fab fa-facebook-f', href: '#' }
    ]
  }
];

export default function Team() {
  return (
    <div className="team-style-one-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">AI Developer</h4>
              <h2 className="title split-text-right split-text-in-right">
                Meet our talent for <br /> intelligent solutions
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team-style-one-items">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="team-style-one-item wow fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="thumb">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={300} 
                      height={350}
                    />
                    <div className="social-overlay">
                      <ul>
                        {member.socialLinks.map((social, socialIndex) => (
                          <li key={socialIndex}>
                            <a href={social.href}>
                              <i className={social.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="icon">
                        <i className="fas fa-plus"></i>
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <h4><Link href="/team-details">{member.name}</Link></h4>
                    <span>{member.position}</span>
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