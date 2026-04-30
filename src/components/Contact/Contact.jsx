import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  const [status, setStatus] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    msg: e.target.msg.value,   // must match template
  };

  emailjs.send(
    'service_rlje9lr',
    'template_5ltlo9m',
    templateParams,
    '7B73MA4JhWKjNmnxq'
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message.");
  });
};

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>

      <SectionHeading title="Contact" />

      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">

          {/* LEFT SIDE FORM */}
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>

            <div id="st-alert">
              {status && <p style={{ color: '#facc15' }}>{status}</p>}
            </div>

            <form onSubmit={handleSubmit} className="st-contact-form" id="contact-form">

              <div className="st-form-field">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>

              <div className="st-form-field">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>

              <div className="st-form-field">
                <input type="text" name="subject" placeholder="Your Subject" required />
              </div>

              <div className="st-form-field">
                <textarea name="msg" rows="10" placeholder="Your Message" required></textarea>
              </div>

              <button className="st-btn st-style1 st-color1" type="submit">
                Send Message
              </button>

            </form>

            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>

            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>

            <div className="st-contact-info-wrap">

              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">eddiemeira@gmail.com</Link>
                </div>
              </div>

              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>Upon Request</span>
                </div>
              </div>

              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    Windermere Boulevard, <br />
                    Bath, ON K0H 1G0 <br />
                    Canada
                  </span>
                </div>
              </div>

              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;