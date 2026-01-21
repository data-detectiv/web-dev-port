import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";
import HeroSection from "../components/Sections/HeroSection";
import { containerVariants, itemVariants } from "../utils/helper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Show only first 3 projects
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      {/* Featured Projects Preview */}
      <section
        ref={sectionRef}
        className={`py-24 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}
      >
        {/* background element */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
          />
          <div
            className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* section header */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div
              variants={itemVariants}
              className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-4`}
            >
              Featured Projects
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light mb-6"
            >
              Web Development
              <span className="text-blue-500 font-medium"> Portfolio</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto font-light mb-8`}
            >
              A collection of web development projects showcasing modern design, responsive layouts, and seamless user experiences.
            </motion.p>
          </motion.div>

          {/* projects grid */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-center"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

