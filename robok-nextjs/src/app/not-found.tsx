import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{background: 'url(/assets/img/shape/banner-1.jpg)'}}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-8 offset-xl-2">
              <div className="banner-one-content fade-up-anim">
                <h1 className="error-code">404</h1>
                <h2>Page Not Found</h2>
                <div className="content">
                  <p>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                  </p>
                  <div className="button mt-30">
                    <Link href="/" className="btn btn-style-one light">
                      Go Home <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}