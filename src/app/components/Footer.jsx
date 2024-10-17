import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        <div className="col-span-1">
          <div className="mb-4">
            <img src="./logo/fingerflights/brand.png" alt="Finger Flights Logo" className="w-32" />
          </div>
          <p className="text-gray-700 mb-4">
          Finger Flights, House 14, Road 13
          Sector 03, Uttara, Dhaka – 1230
          </p>
          <p className="font-semibold text-gray-800">
            <span role="img" aria-label="Phone">📞</span> Need help? Call us
            <strong className="text-yellow-600">+8801710553454</strong>
          </p>
        </div>


        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Community Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Jobs Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Awards</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Tour Guide</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Tour Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Hotel Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Ticket Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Rental Services</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookies Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Data Processing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Data Policy</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold mb-3">Newsletter</h4>
          <div className="form-control ">
            <label className="input-group space-y-2">
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
              <button className="btn btn-warning">Subscribe</button>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
