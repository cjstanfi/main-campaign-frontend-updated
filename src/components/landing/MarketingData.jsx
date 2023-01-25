import React from 'react'
import checkImg from "../../assets/images/landing/svg/marketing-check-img.svg";
const MarketingData = () => {
  return (
    <>
        <div className="d-flex gap-3">
          <img className="check_icon mt-2" src={checkImg} alt="marketing-check-img" />
          <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="d-flex gap-3">
          <img className="check_icon mt-2" src={checkImg} alt="marketing-check-img" />
          <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="d-flex gap-3">
          <img className="check_icon mt-2" src={checkImg} alt="marketing-check-img" />
          <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="d-flex gap-3">
          <img className="check_icon mt-2" src={checkImg} alt="marketing-check-img" />
          <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue mb-0">
            Ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
    </>
  );
}

export default MarketingData