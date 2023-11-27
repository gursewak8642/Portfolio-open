import Bar from "../components/Bar";
import { languages } from "../data";
import {motion} from 'framer-motion'
import { fadeInUp } from "../animations";
import Head from 'next/head'

const resume = () => {

  

  return (
    <div className="px-6 py-2">
      {/* //educationa and experience */}
      <Head>
        <title>Portfolio - Resume</title>
      </Head>
      <div className="grid md:grid-cols-1 gap-6">
        <motion.div variants={fadeInUp } initial="initial" animate="animate" >
          <h5 className="my-3 text-2xl font-bold text-blue-900 dark:text-pinkCustom ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

             B.Tech in Computer Science Engineering.
            </h5>
            <p className="font-semibold">Chandigarh University, CU, Mohali Punjab.</p>
            <p className="my-3 text-justify">(Chandigarh University) | Batch 2020 - 2024 | Graduation in June 2024 | Current CGPA: 7.78/10.0 </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold dark:text-blue-400">

            Senior Secondary Education - PSEB, Punjab.
            </h5>
            <p className="font-semibold">Government Senior Secondary school, Ludhiana, Punjab.</p>
            <p className="my-3 text-justify"> Batch 2019 - 2020 | Class 12th : 75.33% | Class 10th : 82.00%</p>
          </div>
        </motion.div>
      </div>
      {/* langauges and tools  */}

      <div className="grid gap-6 md:grid-cols-1">
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
      </div>
    </div>
  );
};

export default resume;
