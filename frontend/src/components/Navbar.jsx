import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -250 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', stiffness: 120 }} 
      className="flex items-center justify-between py-6 mb-20 text-white"
    >
     

      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin className="text-blue-400 hover:text-blue-600" />
        <FaGithub className="text-gray-400 hover:text-gray-600" />
        <FaInstagram className="text-pink-400 hover:text-pink-600" />
        <FaTwitterSquare className="text-blue-400 hover:text-blue-600" />
      </div>
    </motion.nav>
  );
};

export default Navbar; 