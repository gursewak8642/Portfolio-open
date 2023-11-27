import Bar from "../components/Bar";
import { languages } from "../data";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";
import Head from "next/head";

const experience = () => {
  return (
    <div className="px-6 py-2">
      {/* //educationa and experience */}
      <Head>
        <title>Portfolio - Experience</title>
      </Head>
      <div className="grid md:grid-cols-1 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">
            Software Developer Intern
          </h5>
          {/* <div className="flex"> */}
            <h5 className="my-2 text-xl font-bold dark:text-blue-400 ">
              Byteoski-Developers
            </h5>
            <button
              className="w-2/12 font-medium px-5 py-2 my-2 text-white transition duration-300 ease-in-out delay-50 transform rounded-full hover:-translate-y-1 hover:scale-110 focus:outline-none bg-gradient-to-r from-greenCustom to-blue-800
        dark:from-darkButton-blue dark:to-darkButton-green text-justify
        "
            >
              {" "}
              <a
                href="https://drive.google.com/file/d/1sh_n8rFxsiReIL06OwGYyMniVrTqvA8d/view?usp=drive_link"
                target="_blank"
              >
                Certificate 
              </a>
            </button>
          
            {/* </div> */}
            <p className="font-semibold text-justify">
              J.B. Defence Electrical is an e-commerce website that is built
              using Medusa-js, Typescript, Node.js, and Tailwind. Customers and
              farmers can purchase water supply pumps according to their
              demands, such as bore-well pipes, submersible pipes, submersible
              motors, domestic motors, etc.
              <br />
              • Proficient in utilizing advance1d tools and technologies such as
              Medusa JS, Tailwind, Next.js, and React to create innovative and
              user-friendly solutions. Extractopus.com a web application is
              developed using Next.Js and Typescript which is a extraction
              website i.e. used to extract the data from multiple websites.
              <br />• Demonstrated track record of successfully delivering
              projects in a full-stack web development capacity. Troubleshooted
              and debugged issues to ensure a seamless user experience
            </p>
            {/* <p className="my-3 text-justify">(Chandigarh University) | Batch 2020 - 2024 | Graduation in June 2024 | Current CGPA: 7.78/10.0 </p> */}
          {/* <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

            Senior Secondary Education - PSEB, Punjab.
            </h5>
            <p className="font-semibold">Government Senior Secondary school, Ludhiana, Punjab.</p>
            <p className="my-3 text-justify"> Batch 2019 - 2020 | Class 12th : 75.33% | Class 10th : 82.00%</p>
          </div> */}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">
            Cyber Security Summer Intern
          </h5>
          
              <h5 className="my-2 text-xl font-bold dark:text-blue-400 ">
                Gurugram Cyber Police HeadQuarters.
              </h5>
              <button
                className="w-2/12 font-medium px-5 py-2 my-2 text-white transition duration-300 ease-in-out delay-50 transform rounded-full hover:-translate-y-1 hover:scale-110 focus:outline-none bg-gradient-to-r from-greenCustom to-blue-800
              dark:from-darkButton-blue dark:to-darkButton-green text-justify
              "
              >
                <a
                  href="https://drive.google.com/file/d/1mK_XGPhU3n_LlljRibbRu2oz8pS1nnA-/view?usp=drive_link"
                  target="_blank"
                >
                  Certificate
                </a>
              </button>
        
            <p className="font-semibold text-justify">
              • Summer Intern in collaboration with Safe House Technologies and
              Mr. Rakshit Tandon Sir.
              <br />• extracted emerging information, collaborated with other
              interns to share it, helped with security measures, researched
              upcoming cyber-threats, worked on actual cyber-crime situations,
              and came up with novel approaches to solve problems
            </p>
            {/* <p className="my-3 text-justify">(Chandigarh University) | Batch 2020 - 2024 | Graduation in June 2024 | Current CGPA: 7.78/10.0 </p> */}
          {/* <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

            Senior Secondary Education - PSEB, Punjab.
            </h5>
            <p className="font-semibold">Government Senior Secondary school, Ludhiana, Punjab.</p>
            <p className="my-3 text-justify"> Batch 2019 - 2020 | Class 12th : 75.33% | Class 10th : 82.00%</p>
          </div> */}
        </motion.div>
      </div>

      {/* langauges and tools  */}

      {/* <div className="grid gap-6 md:grid-cols-1">
          <div>
              <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">
                  Languages and Frameworks
                      </h5>






                      
                  <div className="my-2  
                   md:text-base text-xs lg:space-x-2 space-x-0
                  ">

                      {
                          languages.map((language=><Bar data={language} key={language.name}/>)
                          )}
                  </div>
          </div>
      </div> */}
    </div>
  );
};

export default experience;
