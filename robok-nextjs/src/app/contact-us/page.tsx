'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{background: 'url(/assets/img/shape/banner-1.jpg)'}}>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-8 offset-xl-2">
              <div className="banner-one-content fade-up-anim">
                <h4>Contact Us</h4>
                <h2>Get in touch with our <strong style={{backgroundImage: 'url(/assets/img/shape/banner-2.jpg)'}}>AI experts</strong></h2>
                <div className="content">
                  <p>
                    Ready to transform your business with AI? Contact us today to discuss your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form">
                <h3>Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-style-one">
                        Send Message <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <h3>Get in touch</h3>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Address</h4>
                    <p>128 Kuaram old Road, parkvenue, Greater London, NW18JR Puran, United Kingdom</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone</h4>
                    <p><a href="tel:+0123455700">+012-3455700</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Email</h4>
                    <p><a href="mailto:info@robok.com">info@robok.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="content">
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-area">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1234567890!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0Ni4zIlc!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="400"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}