import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const menuItems = [
  { name: "Home", path: "/" },
  {name:"Charts", path:"/artist"},
  {name:"Spotlight", path:"/services"},
  { name: "Megazine", path: "/about" },
  { name: "Events", path: "/events" },
];
const MobileNav = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  return (
    <motion.ul
      className="flex flex-col justify-center items-center gap-6 "
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={dropdownVariants}
      transition={transition}
    >
      {menuItems.map((item) => (
        <motion.li
          key={item.path}
          className="relative cursor-pointer hover:scale-105 hover:duration-500"
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "bule" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelectedTab(item.path);
            toggleMenu(); // Close menu on click
          }}
        >
          <Link
            to={item.path}
            className="hover:scale-105 hover:duration-500 transition-transform"
          >
            {item.name}
          </Link>
          {selectedTab === item.path && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right"
              initial={false}
              animate={{ backgroundColor: "" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MobileNav;