import Image from 'next/image';

const Process = () => {
  return (
    <div className="process-style-one-area default-padding-top bg-theme text-light bg-cover" style={{backgroundImage: 'url(/assets/img/shape/banner-6.jpg)'}}>
      <div className="shape">
        <Image src="/assets/img/illustration/6.png" alt="Image Not Found" width={400} height={300} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8">
            <div className="site-heading">
              <h4 className="sub-title">How it works</h4>
              <h2 className="title split-text-right split-text-in-right">Crafting smarter AI through our process</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="process-style-one-items">
              {/* Single Item */}
              <div className="process-style-one-item fade-up-anim">
                <h2>01</h2>
                <h4>Discovery & Strategy</h4>
                <p>
                  Librarian indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                </p>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="process-style-one-item fade-up-anim">
                <h2>02</h2>
                <h4>Custom AI Development </h4>
                <p>
                  Perfection indulged speaking was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                </p>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="process-style-one-item fade-up-anim">
                <h2>03</h2>
                <h4>Optimization & Support </h4>
                <p>
                  Artificial indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                </p>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;