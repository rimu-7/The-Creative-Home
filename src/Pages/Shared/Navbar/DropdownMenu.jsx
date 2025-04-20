import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { path } from "motion/react-client";

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

const DropdownMenu = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  return (
    <nav className="relative">
      <motion.ul
        className="flex space-x-6 text-lg"
        initial="hidden"
        animate="visible"
        variants={dropdownVariants}
        transition={transition}
      >
        {menuItems.map((item) => (
          <motion.li
            key={item.path}
            className="relative cursor-pointer hover:scale-105 hover:duration-500"
            variants={itemVariants}
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTab(item.path)}
          >
            <Link
              to={item.path}
              className="hover:scale-125 text-2xl  font-bold hover:duration-500  transition-transform"
            >
              {item.name}
            </Link>

            {/* Shared Layout Animation for Underline */}
            {selectedTab === item.path && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 h-[3px] dark:bg-white bg-black bottom-[-4px]"
                initial={false}
                animate={{ backgroundColor: "" }} // Ensure smooth transition of background color
                transition={{ type: "spring", stiffness: 150, damping: 70 }} // Adjusted for a smoother effect
              />
            )}

          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default DropdownMenu;