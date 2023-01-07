import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="container footer">
      <div className="row footer_top">
        <div className="col">
          <h3>Categories</h3>
          <ul>
            <li>Graphic & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Programming & Tech</li>
            <li>Data</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="col">
          <h3>About</h3>
          <ul>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnership</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellecture Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="col">
          <h3>Support</h3>
          <ul>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>
        <div className="col">
          <h3>Community</h3>
          <ul>
            <li>Events</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Community Standards</li>
            <li>Podcasts</li>
            <li>Affillates</li>
            <li>Invite a Friend</li>
            <li>Become a Seller</li>
            <li>Fiverr Elevate</li>
            <li>Exclusive Benefits</li>
          </ul>
        </div>
        <div className="col">
          <h3>More from Fiverr</h3>
          <ul>
            <li>Fiverr Pro</li>
            <li>Fiverr Studios</li>
            <li>Fiverr Logo Marker</li>
            <li>Fiverr Guide</li>
            <li>Fiverr Inspired</li>
            <li>Clear Voice</li>
            <li>Content Marketing</li>
            <li>AND CO</li>
            <li>Invoice Software</li>
            <li>Learn</li>
            <li>Online Courses</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_left d-flex me-auto mt-2 mt-lg-0">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo.png"
            alt=""
          />
          <div>&#169; Fiverr Internation Ltd. 2021</div>
        </div>
        <div className="footer_bottom_right d-flex my-2 my-lg-0">
          <div className="social">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="plus">
            <span>
              <i className="fa-solid fa-globe"></i> English
            </span>
            <span>$USD</span>
            <span>
              <i className="fa-solid fa-person"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer