import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    image: '/assets/img/blog/1.jpg',
    category: 'Technolgoy',
    date: '06 December, 2025',
    title: 'Considered imprudence of technical friendship experience.',
    link: '/blog-single-with-sidebar'
  },
  {
    id: 2,
    image: '/assets/img/blog/2.jpg',
    category: 'Artificial',
    date: '14 August, 2025',
    title: 'Expression acceptance imprudence particular experience turn.',
    link: '/blog-single-with-sidebar'
  },
  {
    id: 3,
    image: '/assets/img/blog/3.jpg',
    category: 'Integration',
    date: '12 October, 2025',
    title: 'Considered imprudence of technical friendship in custom subscription.',
    link: '/blog-single-with-sidebar'
  }
];

export default function Blog() {
  return (
    <div className="home-blog-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Latest Blog</h4>
              <h2 className="title split-text-right split-text-in-right">News & Update</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-style-one fade-up-anim">
                <div className="thumb zoom-thumb">
                  <Link href={post.link}>
                    <Image 
                      className="img-reveal" 
                      src={post.image} 
                      alt="Blog Post" 
                      width={800} 
                      height={400}
                    />
                  </Link>
                </div>
                <div className="info">
                  <div className="blog-one-meta">
                    <ul>
                      <li>
                        <Link href="#">{post.category}</Link>
                      </li>
                      <li>
                        {post.date}
                      </li>
                    </ul>
                  </div>
                  <h2 className="blog-title">
                    <Link href={post.link}>{post.title}</Link>
                  </h2>
                  <Link href={post.link} className="btn-simple">
                    Explore More <i className="fas fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}