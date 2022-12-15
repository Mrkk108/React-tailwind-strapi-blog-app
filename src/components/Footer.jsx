import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#222222] text-gray-300 py-8 px-2 m-3">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase py-2 ml-3">CONTACT INFO</h6>
          <ol>
            <li className="">
              Reach out to us anytime and lets create a better future for all
              technology users together, forever.
            </li>
            <li className="">+1 (484) 321-8314</li>
            <li className="">info@softsages.com</li>
          </ol>
        </div>
        <div>
          <h6 className="font-bold uppercase py-2">OUR SERVICES</h6>
          <ol>
            <li className="py-1">Staffing</li>
            <li className="py-1">Software Development</li>
            <li className="py-1">Cyber Security</li>
            <li className="py-1">IoT Development</li>

            <div>
              <h6 className="font-bold uppercase py-2">CASE STUDY</h6>
              <ol>
                <li className="py-1">Applicant Tracking System</li>
                <li className="py-1">Workforce</li>
                <li className="py-1">DevOps_CI-CD</li>
                <li className="py-1">PCCSA</li>
                <li className="py-1">Capability Statements</li>
                <li className="py-1">Brochures</li>
              </ol>
            </div>
          </ol>
        </div>

        <div>
          <h6 className="font-bold uppercase py-2">Our Offices</h6>
          <ol>
            <h5 className="py-1 font-bold uppercase ">United States</h5>
            <li className="py-2 ">20 Mystic Lane, 2nd Floor, Malvern, PA 19355</li>
            <li className="py-2">1629 S. Prairie , Avenue, Suite, 1207, Chicago, IL 60616</li>
            <li className="py-2">13800 Coppermine Rd, 1st 2nd and 3rd floors, Herndon, VA 20171</li>
            <li className="py-2">6701 Karl Road, Suite A, Columbus, Ohio 43229</li>
            <li className="py-2">19 8th Street South, Fargo, ND 58103</li>
            <li className="py-2">101 South 12th Street Suite 102 Tampa, FL, US, 33602</li>
            <li className="py-2">157 Columbus Ave, FL 4, New York, NY 10023</li>
            <li className="py-2">445 Minnesota Street, Suite 1500 St. Paul Minnesota MN 55101</li>
            <li className="py-2">260 Peachtree St NW, Atlanta, GA 30303</li>
          </ol>
        </div>

        <div>
          <ol>
            <h5 className="py-1 font-bold uppercase ">United Kingdom</h5>
            <li className="py-2 ">118A, High Street, Northwood, HA6 1BJ, United Kingdom</li>

            <h5 className="py-1 font-bold uppercase ">Canada</h5>
            <li className="py-2 ">895 Don Mills Road,Two Morneau Shepell Centre, Suite 900, Toronto, Ontario, M3C 1W3, Canada.</li>

            <h5 className="py-1 font-bold uppercase ">India</h5>
            <li className="py-2 ">H 199, H Block Sec 63, Noida 201301, India.</li>
            <li className="py-2 ">201 Iscon Atria 1, Gotri, Vadodara, Gujarat 390021, India.</li>      
          </ol>
        </div>


        {/* <div className="col-span-2 pt-2 md:pt-2">
          <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-half p-2 mr-4 rounded-md  mb-2"
              type="email"
              placeholder="Enter email"
            />
            <button className="p-2 mb-2 bg-[#00B86E] ">Subscribe</button>
          </form>
        </div> */}
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2022 CWTS, LLC. All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
