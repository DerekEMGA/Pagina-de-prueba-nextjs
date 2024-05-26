
import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer data-aos="fade-up" className={`${styles.footer} container-fluid`}>
        {/* Footer content */}
        <div className={`${styles.footerContent} row`}>
          {/* Contact */}
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Address: 123 Main Street, City</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          {/* Social Media */}
          <div className="col-md-4">
            <h3>Social Media</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          {/* About Us */}
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
