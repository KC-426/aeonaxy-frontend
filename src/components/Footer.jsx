import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css"

export default function Footer() {
  return (
    <>
      <div className=" mx-auto bg-gray-50 py-10">
        <div className="flex footer-section-view">

          <div className="dribble-data px-12">
            <div>
              <h1 className="text-3xl font-bold text-pink-500">Dribble</h1>
            </div>
            <div className="font-semibold mt-4 dribble-leading-community">
              <span>
                Dribble is the world's leading community for creatives to share
                grow, and get hired.
              </span>
              <div className="mt-4 flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-pink-500 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0 0v5m0-5h5M5.3 14.7A7.947 7.947 0 004 10c0-2.24.936-4.282 2.442-5.743M14.7 14.7A7.947 7.947 0 0016 10c0-2.24-.936-4.282-2.442-5.743M5.3 5.3A7.947 7.947 0 016 10c0 2.24-.936 4.282-2.442 5.743m9.284-9.484A7.947 7.947 0 0114 10c0 2.24.936 4.282 2.442 5.743"
                  ></path>
                </svg>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"
                />

                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"
                />
              </div>
            </div>
          </div>


          <div className="footer-main-section">
            <div>
              <h1 className="font-bold text-xl mb-4">For Foreiner</h1>
            </div>
            <div className="footer-list-design font-semibold font-semibold">
              <ul>Go Pro!</ul>
              <ul>Explore design work</ul>
              <ul>Design blog</ul>
              <ul>Overtime Podcast</ul>
              <ul>Playoffs</ul>
              <ul>Weekly Warm-Up</ul>
              <ul>Refer a friend</ul>
              <ul>Code of conduct</ul>
            </div>
          </div>

          <div className="footer-main-section">
            <div>
              <h1 className="font-bold text-xl mb-4">Hire Designers</h1>
            </div>
            <div className="footer-list-design font-semibold">
              <ul>Post a job opening</ul>
              <ul>Post a freelance project</ul>
              <ul>Search for designers</ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-4 mt-4">Brands</h1>
            </div>

            <div className="footer-list-design font-semibold">
              <ul>Advertise with us</ul>
            </div>
          </div>

          <div className="footer-main-section">
            <div>
              <h1 className="font-bold text-xl mb-4">Company</h1>
            </div>
            <div className="footer-list-design font-semibold">
              <ul>About</ul>
              <ul>Careers</ul>
              <ul>Support</ul>
              <ul>Media kit</ul>
              <ul>Testimonials</ul>
              <ul>API</ul>
              <ul>Terms of service</ul>
              <ul>Privacy Policy</ul>
              <ul>Cookie Policy</ul>
            </div>
          </div>

          <div className="footer-main-section">
            <div>
              <h1 className="font-bold text-xl mb-4">Directories</h1>
            </div>
            <div className="footer-list-design font-semibold">
              <ul>Design jobs</ul>
              <ul>Designers for hire</ul>
              <ul>Freelance Designers for hire</ul>
              <ul>Tags</ul>
              <ul>Places</ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-4 mt-4">Design Assests</h1>
            </div>
            <div className="footer-list-design font-semibold">
              <ul>Dribble Marketplace</ul>
              <ul>Creative Market</ul>
              <ul>Fontspring</ul>
              <ul>Font Squirrel</ul>
            </div>
          </div>

          <div className="footer-main-section">
            <div>
              <h1 className="font-bold text-xl mb-4">Design Resources</h1>
            </div>
            <div className="footer-list-design font-semibold">
              <ul>Freelancing</ul>
              <ul>Design Hiring</ul>
              <ul>Desing Portfolio</ul>
              <ul>Design Education</ul>
              <ul>Creative Process</ul>
              <ul>Design Industry Trends</ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 flex justify-between mx-20 mt-20 pt-6">
          <div className="font-semibold">
            <span>@2023 Dribble All rights reserved.</span>
          </div>
          <div className="font-semibold">
            <span className="font-bold">20,501,853</span> shots dribbled
          </div>
        </div>
      </div>
    </>
  );
}
