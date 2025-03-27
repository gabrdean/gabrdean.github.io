import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import profilePic from './ProfilePic.png';


function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold text-gray-900">GD</span>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Gabriel Deane
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 mb-8">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Problem Solving Enthusiast
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="order-first lg:order-last"
          >
            <img
              src = {profilePic}
              alt="Profile"
            
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          The real beauty is in the creation of these products we misuse for escape.
          I used to be the gamer who would stay up playing from sun up until sundown even neglecting my bodily needs. 
          That type of addiction was dangerous and unhealthy but I grew an affinity for technology. 
          I went from jailbreaking ipods and emaulating multiplayer enabled psp games on my old dell laptop, to eventually teaching students how to use microcontrollers (Arduino).
          My calling to technology was no accident, and in order to provide freedom to the people around me I'll continue my journey with tech. 
          I'm now a graduate of App Academy and Fullstack Developer. 
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
            <p className="text-gray-600">App Academy</p>
            <p className="text-gray-500">2024 - 2025</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Teacher</h3>
            <p className="text-gray-600">Stepping Stone Scholars</p>
            <p className="text-gray-500">2019 - 2020</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">After School Instructor</h3>
            <p className="text-gray-600">ZhangSah Martial Arts</p>
            <p className="text-gray-500">2022 - 2024</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Electro-Mechaical Engineer </h3>
            <p className="text-gray-600"> Temple University</p>
            <p className="text-gray-500">2019 - 2020</p>
            <p className="text-gray-400"> Covid Dropout</p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
            { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
          ].map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'HOUSE R US',
              description: 'Find a place to getaway',
              tech: ['JavaScript', 'HTML'],
              live: 'https://gabriels-houserus.onrender.com',
              github: 'https://github.com/gabrdean/HOUSERUS'
            },
            {
              title: 'NomNow',
              description: 'Grab a bite. Nom away.',
              tech: ['React', 'Flask', 'JavaScript', 'Python'],
              live: 'https://nomnow-75lb.onrender.com/',
              github: 'https://github.com/gabrdean/NomNow'
            }
          ].map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} className="flex items-center text-blue-600 hover:text-blue-700">
                  <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                </a>
                <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-700">
                  <Github className="w-4 h-4 mr-1" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer with Contact */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:gabealexd@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Mail className="w-5 h-5 mr-2" /> gabealexd@gmail.com
                </a>
                <a href="https://github.com/gabrdean" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Github className="w-5 h-5 mr-2" /> https://github.com/gabrdean
                </a>
                <a href="www.linkedin.com/in/gabriel-deane" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5 mr-2" /> gabriel-deane
                </a>
              </div>
            </div>
           
          </div>
          <div className="text-center text-gray-600 pt-8 border-t border-gray-200">
            © 2024 Gabriel Deane. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;