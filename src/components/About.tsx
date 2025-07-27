import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A dedicated and curious data science enthusiast with a strong foundation in computer science and a passion for machine learning.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
        >
          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white dark:bg-gray-800/50 border-transparent rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <GraduationCap className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      B.Tech in Computer Science (Internet of Things)
                    </h4>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Shiv Nadar University, Chennai
                    </p>
                  </div>

                  <div className="flex flex-col space-y-2 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>August 2020 - May 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-medium">CGPA: 8.28 / 10.0</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Relevant Coursework:</h5>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                      <li>Data Structures & Algorithms</li>
                      <li>Object-Oriented Programming</li>
                      <li>Database Management Systems</li>
                      <li>Software Design Principles</li>
                      <li>Operating Systems</li>
                      <li>Computer Networks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white dark:bg-gray-800/50 border-transparent rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <Award className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Python for Data Science</h4>
                      <p className="font-medium text-blue-500 dark:text-blue-400">IBM on Coursera</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Mastered Python for data analysis, including libraries like NumPy, pandas, and Matplotlib for data wrangling and visualization.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Machine Learning</h4>
                      <p className="font-medium text-blue-500 dark:text-blue-400">Stanford University on Coursera</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Completed the renowned course by Andrew Ng, implementing foundational ML algorithms like linear regression, SVMs, and neural networks.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;