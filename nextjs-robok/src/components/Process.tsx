import Image from 'next/image';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Librarian indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.'
  },
  {
    number: '02',
    title: 'Custom AI Development',
    description: 'Perfection indulged speaking was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.'
  },
  {
    number: '03',
    title: 'Optimization & Support',
    description: 'Artificial indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.'
  }
];

export default function Process() {
  return (
    <div 
      className="process-style-one-area default-padding-top bg-theme text-light bg-cover" 
      style={{ backgroundImage: 'url(/assets/img/shape/banner-6.jpg)' }}
    >
      <div className="shape">
        <Image 
          src="/assets/img/illustration/6.png" 
          alt="Process Illustration" 
          width={400} 
          height={300}
        />
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
              {processSteps.map((step, index) => (
                <div key={index} className="process-style-one-item fade-up-anim">
                  <h2>{step.number}</h2>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}