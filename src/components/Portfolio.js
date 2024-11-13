import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Products & Solutions
            </h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP Functional & Technical
                            </h4>
                            <p className="text-md font-medium leading-5">
                                SAP technical modules are primarily focused on ensuring a smooth-operating SAP landscape. SAP Basis – SAP Basis is considered the system administration of SAP systems and provides the technical foundation enabling SAP applications to run smoothly. SAP Security – SAP Security establishes robust internal security to allow or prevent access where needed. SAP NetWeaver – SAP NetWeaver connects business users to SAP software in real-time regardless of their access point (social media platforms, mobile devices, or web applications).
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP ABAP Development
                            </h4>
                            <p className="text-md font-medium leading-5">
                                Atorix ABAP developers acquire well-built technical and analytical skills in development. Our development encounter ranges from the core SAP modules to claim-to-fame regions, for example, SAP HR, SD, HCM, FICO, MM, SD, PP & PM. Our SAP ABAP developers create inventive solutions to support your SAP infrastructure. We provide onsite and remote development services at a cost-effective price. Our remote development arrangement enables clients to spend IT budgets on value-added development instead of paying consultant expenses.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP BASIS & SECURITY
                            </h4>
                            <p className="text-md font-medium leading-5">
                                BASIS, which stands for Business Application Software Integrated Solution, provides a well-structured technical foundation for SAP systems. It acts as an essential middleware layer, bridging the gap between operating systems, databases, communication protocols, and SAP applications such as FI (Financial Accounting), CO (Controlling), MM (Materials Management), SD, HR, HCM, PP, and PM. BASIS is crucial for ensuring seamless communication between SAP applications, regardless of the underlying system environment.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP S/4 HANA Solution
                            </h4>
                            <p className="text-md font-medium leading-5">
                                SAP S/4HANA Cloud is a Software as a Service (SaaS) edition of S/4HANA. It’s available to enterprises both in public and private clouds and enables users to leverage S/4HANA functionality without any need for hardware, a database, or internal IT staff. In S/4HANA Cloud, SAP will provide and handle almost everything for the customer, including applications, data, runtime, middleware, operating system, servers, storage, and networking.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP Implementation & Support
                            </h4>
                            <p className="text-md font-medium leading-5">
                                SAP Implementation and Support are critical services that help organizations leverage the full potential of SAP systems. SAP implementation involves the strategic deployment of SAP software to meet a company's specific business requirements, encompassing core modules like FI (Financial Accounting), CO (Controlling), MM (Materials Management), SD (Sales and Distribution), HR, HCM, PP, and PM. This process requires expert planning, configuration, customization, and integration to ensure seamless workflow alignment across all business functions.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                SAP Software Services
                            </h4>
                            <p className="text-md font-medium leading-5">
                                Traditional business models often decentralize data management, with each business function storing its own operational data in a separate database. This makes it difficult for employees from different business functions to access each other’s information. Furthermore, duplication of data across multiple departments increases IT storage costs and the risk of data errors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button added here */}
                <div className="flex justify-center my-4">
    <Link
        to="/get-demo"
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-4 py-2 text-base shadow-md rounded-md"
    >
        Schedule Demo
        <svg
            className="w-3 h-3 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
        </svg>
    </Link>
</div>

            </div>
        </div>
    );
};

export default Portfolio;
