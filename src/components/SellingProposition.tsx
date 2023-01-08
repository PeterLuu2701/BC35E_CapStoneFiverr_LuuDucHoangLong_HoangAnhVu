import React, {useState} from 'react'
import ModalVideo from "react-modal-video";

type Props = {}

const SellingProposition = (props: Props) => {

    const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 selling_proposition_left">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>
              <span>
                <i className="fa-regular fa-circle-check"></i>
                The best for every budget
              </span>
              <h6>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </h6>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-circle-check"></i>
                Quality work done quickly
              </span>
              <h6>
                Find the right freelancer to begin working on your project
                within minutes.
              </h6>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-circle-check"></i>
                Protected payments, every time
              </span>
              <h6>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </h6>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-circle-check"></i>
                24/7 support
              </span>
              <h6>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </h6>
            </li>
          </ul>
        </div>
        <div className="col-6 selling_proposition_right">
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="S5rvJOcff_I"
            onClose={() => setOpen(false)}
          />
          <img
            src="./img/selling.png"
            alt=""
            style={{ width: "100%" }}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default SellingProposition