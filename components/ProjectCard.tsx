import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { cursorTo } from "readline";
import { IProject } from "../type";
import { MdClose } from "react-icons/md";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

import k from "../public/images/Portfolio.jpg";
let imgval = "";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  {
    if (id === 1) {
      imgval = "/images/UDF.jpeg";
    } else if (id === 2) {
      imgval = "/images/LPS.png";
    } else if (id === 3) {
      imgval = "/images/Pairsonality.jpg";
    } else if (id === 4) {
      imgval = "/images/Portfolio.jpeg";
    } else if (id === 5) {
      imgval = "/images/TextUtility.JPG";
    } else if (id === 6) {
      imgval = "/images/NewsApp.jpg";
    } else if (id === 7) {
      imgval = "/images/Simon.jpg";
    } else if (id === 8) {
      imgval = "/images/TinDog.jpg";
    } else if (id === 9) {
      imgval = "/images/DrumKit.jpg";
    }
  }
  // const [showDetail, setshowDetail] = useState(false);

  let buttonClassGithubProjectCard =
    "flex items-center px-2 py-2 space-x-2 text-lg text-white bg-gradient-to-r from-greenCustom to-blue-800 dark:from-darkButton-blue  dark:to-darkButton-green rounded-xl ";

  let buttonClassProjectProjectCard =
    "flex items-center px-2 py-2 space-x-2 text-lg text-white bg-gradient-to-r from-greenCustom to-blue-800 dark:from-darkButton-blue  dark:to-darkButton-green rounded-xl ";

  let buttonDisableClass = "cursor-default invisible";
  let textDisabledClass = "";

  if (!github_url) {
    buttonClassGithubProjectCard += buttonDisableClass;
    // textDisabledClass += buttonDisableClass;
  }
  if (!deployed_url) {
    buttonClassProjectProjectCard += buttonDisableClass;
    // textDisabledClass += buttonDisableClass;
  }
  console.log(image_path);

  return (
    <div>
      <Image
        // src={require(image_path)}
        // src={require(`${image_path}`)}
        // src={require('images/' + image_path + '.jpg')}
        // src="/images/Portfolio_DP.jpg"
        // src={i1}
        // src={`/../public/images/${image_path}.jpg`}
        // src={imgval}
        // src="/images/TextUtility.jpg"
        src={image_path}
        alt={name}
        className="cursor-pointer  rounded-xl"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
        priority
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer  my-auto py-auto h-40 mx-auto rounded-xl px-1 py-1 "
        onClick={() => setshowDetail(true)}
      ></img> */}
      <p className="my-2 text-center text-lg dark:text-blue-400">{name}</p>

      {showDetail === id && (
        <div
          className=" shadow-custom-light absolute top-0 left-0 z-10  w-full gap-x-2 grid md:grid-cols-2 text-black bg-gray-100 p-2 dark:bg-blueCustom-backgroundDark dark:text-white
        bg-gradient-to-r from-green-200 to-blue-300 dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight rounded-3xl
        "
        >
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <motion.div>
              <Image
                src={image_path}
                // src={require(`${image_path}`)}
                // src={require(image_path)}
                // src={require('images/' + image_path + '.jpg')}
                // src={i1}
                // src={`/../public/images/${image_path}.jpg`}
                // src={imgval}
                // src="/images/TinDog.jpg"
                alt={name}
                className="rounded-xl mx-2 my-2  "
                width="400"
                height="250"
                layout="responsive"
                priority
              />
            </motion.div>
            {/* <img
              src={image_path}
              alt={name}
              src={require('/images/' + image_path + '.jpg')};
              className="rounded-2xl  h-3/4 mx-2 my-2 shadow-custom-light w-10/12"
            /> */}
            <motion.div
              className="flex justify-center my-6 space-x-2"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <a
                href={github_url}
                target="_blank"
                className={buttonClassGithubProjectCard}
              >
                <AiFillGithub></AiFillGithub>
                <button disabled={!github_url} className={textDisabledClass}>
                  Github
                </button>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                className={buttonClassProjectProjectCard}
              >
                <AiFillProject></AiFillProject>
                {/* <span>Project</span> */}
                <button className={textDisabledClass} disabled={!deployed_url}>
                  Project
                </button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-5 my-3"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="mb-3 font-medium   text-3xl text-blue-900 dark:text-pinkCustom">
              {name}
            </h2>
            <h3 className="mb-3 font-medium ">{description}</h3>
            <div
              className="flex flex-wrap space-x-2 mt-5
                       text-sm tracking-wider "
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-greenCustom text-white dark:bg-pinkCustom rounded-2xl "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 rounded-xl top-3 right-3 bg-blue-900 text-white dark:bg-darkButton-blue border-2 border-darkButton-green "
          >
            <MdClose size="30"></MdClose>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
