'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <div className="faq-style-one-area accordion-secondary blurry-shape-right-bottom default-padding bg-gray" style={{backgroundImage: 'url(/assets/img/shape/7.png)'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="faq-style-one-info">
              <h4 className="sub-title">Question & Answer</h4>
              <h2 className="title split-text-right split-text-in-right">AI queries? expert responses await</h2>
              <Link href="/faq" className="btn btn-style-one btn-dark mt-10 wow fadeInUp" data-wow-delay="100ms">
                All Questions <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="accordion-style-one-items fade-up-anim">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-style-one-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button 
                      className={`accordion-button ${activeAccordion === 'collapseOne' ? '' : 'collapsed'}`}
                      type="button" 
                      onClick={() => toggleAccordion('collapseOne')}
                      aria-expanded={activeAccordion === 'collapseOne'}
                      aria-controls="collapseOne"
                    >
                      What is Artificial Intelligence?
                    </button>
                  </h2>
                  <div 
                    id="collapseOne" 
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseOne' ? 'show' : ''}`}
                    aria-labelledby="headingOne" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-style-one-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button 
                      className={`accordion-button ${activeAccordion === 'collapseTwo' ? '' : 'collapsed'}`}
                      type="button" 
                      onClick={() => toggleAccordion('collapseTwo')}
                      aria-expanded={activeAccordion === 'collapseTwo'}
                      aria-controls="collapseTwo"
                    >
                      What It Takes to Create an Image?
                    </button>
                  </h2>
                  <div 
                    id="collapseTwo" 
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseTwo' ? 'show' : ''}`}
                    aria-labelledby="headingTwo" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-style-one-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button 
                      className={`accordion-button ${activeAccordion === 'collapseThree' ? '' : 'collapsed'}`}
                      type="button" 
                      onClick={() => toggleAccordion('collapseThree')}
                      aria-expanded={activeAccordion === 'collapseThree'}
                      aria-controls="collapseThree"
                    >
                      How does AI Convert text to video?
                    </button>
                  </h2>
                  <div 
                    id="collapseThree" 
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseThree' ? 'show' : ''}`}
                    aria-labelledby="headingThree" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;