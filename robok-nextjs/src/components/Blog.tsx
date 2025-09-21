import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
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
            {/* Single Item */}
            <div className="blog-style-one fade-up-anim">
              <div className="thumb zoom-thumb">
                <Link href="/blog-single-with-sidebar">
                  <Image className="img-reveal" src="/assets/img/blog/1.jpg" alt="Thumb" width={400} height={250} />
                </Link>
              </div>
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Technolgoy</a>
                    </li>
                    <li>
                      06 December, 2025
                    </li>
                  </ul>
                </div>
                <h2 className="blog-title">
                  <Link href="/blog-single-with-sidebar">Considered imprudence of technical friendship experience.</Link>
                </h2>
                <Link href="/blog-single-with-sidebar" className="btn-simple">
                  Explore More <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="blog-style-one fade-up-anim">
              <div className="thumb zoom-thumb">
                <Link href="/blog-single-with-sidebar">
                  <Image className="img-reveal" src="/assets/img/blog/2.jpg" alt="Thumb" width={400} height={250} />
                </Link>
              </div>
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Artificial</a>
                    </li>
                    <li>
                      14 August, 2025
                    </li>
                  </ul>
                </div>
                <h2 className="blog-title">
                  <Link href="/blog-single-with-sidebar">Expression acceptance imprudence particular experience turn.</Link>
                </h2>
                <Link href="/blog-single-with-sidebar" className="btn-simple">
                  Explore More <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="blog-style-one fade-up-anim">
              <div className="thumb zoom-thumb">
                <Link href="/blog-single-with-sidebar">
                  <Image className="img-reveal" src="/assets/img/blog/3.jpg" alt="Thumb" width={400} height={250} />
                </Link>
              </div>
              <div className="info">
                <div className="blog-one-meta">
                  <ul>
                    <li>
                      <a href="#">Integration</a>
                    </li>
                    <li>
                      12 October, 2025
                    </li>
                  </ul>
                </div>
                <h2 className="blog-title">
                  <Link href="/blog-single-with-sidebar">Considered imprudence of technical friendship in custom subscription.</Link>
                </h2>
                <Link href="/blog-single-with-sidebar" className="btn-simple">
                  Explore More <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;