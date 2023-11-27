// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { services } from "../data";
import { TiPointOfInterest } from "react-icons/ti";
import Head from 'next/head'
import ServiceCard from "../components/ServiceCard";
import { IService } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
import { routeAnimation } from "../animations";
import { GetServerSidePropsContext } from "next";
const About = ({endpoint}) => {
  // console.log("CLIENT",services)
  console.log(endpoint);

  return (
    <div className="flex flex-col px-6 pt-1 flex-grow ">
      <Head>
        <title>Portfolio - About</title>
      </Head>
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 font-normal">
          ✅ I am pursuing  my <b>Bachelor of Engineering in Computer Science and Engineering</b> from Chandigarh University,  located in Mohali, Punjab. <b>(Chandigarh_University_2020-2024)</b>.
          <br />✅ Currently I am open to work and looking for {" "}
          <b>Full Time or Intern Based Software Engineering based roles PAN India</b> associated with technologies like <b>Web Development, Machine Learning, and more.</b>
          <br />✅ I am highly interested in developing MERN Stack based Web Applications and learning ML Concepts, alongwith system administration and Cloud technologies as well.
          <br />✅ Also I am practicing DSA problems consistently on Leetcode and GFG, alonwith strengthening my CS fundamentals in OOPS, DBMS, OS and more.
        </h5>
      </motion.div>
      <div
        className="p-4 mt-5 bg-gradient-to-r from-green-200 to-blue-300 flex-grow   dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h6
          className="my-3 w-48  font-bold tracking-wide  
       text-green-800 text-xl border-b-2 border-green-700 dark:text-pinkCustom dark:border-greenCustom
      transition duration-300 ease-in-out transform  delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-blue-50 dark:hover:bg-blueCustom-backgroundLight px-2 rounded-md 
      "
        >
          What I am doing
        </h6>

        <motion.div className="grid lg:grid-cols-2 gap-4" variants={stagger}>
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className=" bg-white dark:bg-gray-900 rounded-lg lg:col-span-1 "
            >
              <ServiceCard service={service}> </ServiceCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const GetServerSideProps= async(context:GetServerSidePropsContext)=>{

    const res=await fetch(`${process.env.VERCEL_URL}/api/services`);

    const data=await res.json();

    // console.log("SERVER",services);
    console.log(process.env.VERCEL_URL);

  return{

    props:{
      endpoints:process.env.VERCEL_URL,
    }
  }

}

export default About;
