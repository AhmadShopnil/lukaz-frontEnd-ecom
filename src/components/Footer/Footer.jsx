import { Mail, MessageCircle, Phone, Settings, Globe } from 'lucide-react';
import { FaWhatsapp, FaCookieBite } from 'react-icons/fa';
import Container from '../shared/Container';

export default function Footer() {
  return (
    <footer className="overflow-hidden">
    <Container className='bg-[#1F1F1F] text-white py-10'>
          {/* Newsletter */}
      <div className=" border-b border-white/20 pb-10 mb-10 grid md:grid-cols-2 justify-around gap-6">
        <div className='w-1/2'>
          <h2 className="text-4xl font-bold">Sign up for our newsletter</h2>
          <p className="mt-2 text-gray-300">Get exclusive news and offers</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded border-none bg-white text-white placeholder-gray-400 flex-1"
            />
            <button className="bg-white text-black px-6 py-3 rounded font-semibold">
              Sign Up
            </button>
          </div>
          <p className="text-sm text-white mt-3">
            By signing up you consent to receive updates by email about our latest new releases and our best special offers. We will never share your personal information with third parties for their marketing purposes and you can unsubscribe at any time. For more information please see our <span className="underline font-semibold">privacy statement</span>.
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Icons */}
        <div className="flex flex-col gap-4 text-md text-white mt-2 space-y-2">
          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>Chat</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={18} />
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>Contact Us</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCookieBite size={18} />
            <span>Manage Cookie Settings</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span><u>Change</u></span>
          </div>
        </div>

        {/* Order Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Order Info</h3>
          <ul className="space-y-2 text-md text-gray-300">
            <li>Order Tracking</li>
            <li>Delivery & Returns</li>
            <li>Gift Vouchers</li>
            <li>SportShoes Running Club</li>
            <li>Student Discount</li>
            <li>KLARNA</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-md text-gray-300">
            <li>Help Centre</li>
            <li>Contact Us</li>
            <li>My Account</li>
            <li>ULTRA Membership Info</li>
            <li>Price Beat Promise</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Company Info</h3>
          <ul className="space-y-2 text-md text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Cookie Policy</li>
            <li>Modern Slavery Statement</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
      
    </Container>
    <Container className='py-4 bg-white'>
        <p>Copyright © 2025 B-Lukaz | All Rights Reserved.</p>
    </Container>
    </footer>
  );
}
