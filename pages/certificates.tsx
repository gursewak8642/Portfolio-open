import { certificates as certval } from "../data";
import CertificateCard from "../components/CertificateCard";
import Head from 'next/head'

const certificates = () => {
  return (
    <div className=" overflow-y-scroll h-96 flex flex-col px-6   flex-grow ">
      <Head>
        <title>Portfolio - Certificates</title>
      </Head>
      <div className=" ">
        <div className="grid lg:grid-cols-1 py-4 gap-4 px-2">
          {certval.map((service) => (
            <div className="  bg-gradient-to-r from-green-200 to-blue-300 dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight  rounded-lg lg:col-span-1 px-1 ">
              <CertificateCard certificate={service}> </CertificateCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default certificates;
