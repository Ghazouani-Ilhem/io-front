'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqItems = [
  {
    id: 'collapseOne',
    heading: 'headingOne',
    question: 'What is Artificial Intelligence?',
    answer: 'Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.',
    isOpen: true
  },
  {
    id: 'collapseTwo',
    heading: 'headingTwo',
    question: 'What It Takes to Create an Image?',
    answer: 'Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.',
    isOpen: false
  },
  {
    id: 'collapseThree',
    heading: 'headingThree',
    question: 'How does AI Convert text to video?',
    answer: 'Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.',
    isOpen: false
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState('collapseOne');

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? '' : itemId);
  };

  return (
    <div 
      className="faq-style-one-area accordion-secondary blurry-shape-right-bottom default-padding bg-gray" 
      style={{ backgroundImage: 'url(/assets/img/shape/7.png)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="faq-style-one-info">
              <h4 className="sub-title">Question & Answer</h4>
              <h2 className="title split-text-right split-text-in-right">AI queries? expert responses await</h2>
              <Link 
                href="/faq" 
                className="btn btn-style-one btn-dark mt-10 wow fadeInUp" 
                data-wow-delay="100ms"
              >
                All Questions <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="accordion-style-one-items fade-up-anim">
              <div className="accordion" id="faqAccordion">
                {faqItems.map((item) => (
                  <div key={item.id} className="accordion-style-one-item">
                    <h2 className="accordion-header" id={item.heading}>
                      <button 
                        className={`accordion-button ${openItem === item.id ? '' : 'collapsed'}`}
                        type="button" 
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={openItem === item.id}
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div 
                      id={item.id} 
                      className={`accordion-collapse collapse ${openItem === item.id ? 'show' : ''}`}
                      aria-labelledby={item.heading} 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}