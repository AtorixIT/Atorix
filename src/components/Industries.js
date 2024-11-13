import React from "react";
// Import your icons
import automotiveIcon from "../images/industries/automotive.png";
import healthcareIcon from "../images/industries/healthcare.png";
import retailIcon from "../images/industries/retail.png";
import manufacturingIcon from "../images/industries/manufacture.png";
import energyIcon from "../images/industries/Energy.png";
import financialServicesIcon from "../images/industries/finance.png";
import telecommunicationsIcon from "../images/industries/communication.png";
import aerospaceIcon from "../images/industries/aerospace.png";
import logisticsIcon from "../images/industries/logistics.png";
import mediaIcon from "../images/industries/Media.png";
import pharmaceuticalsIcon from "../images/industries/pharmaceutical.png";
import constructionIcon from "../images/industries/construction.png";
import fbIcon from "../images/industries/food.png";
import shippingIcon from "../images/industries/transportation.png";
import tradingIcon from "../images/industries/trading.png";
import chemicalIcon from "../images/industries/chemical.png";
import hospitalityIcon from "../images/industries/hospitality.png";
import agricultureIcon from "../images/industries/agriculture.png";
import insuranceIcon from "../images/industries/finance.png";

const Industries = () => {
    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Industries We Serve
            </h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                {/* Adjust the grid for mobile, tablet, and larger screens */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {[
                        { title: "Automotive", icon: automotiveIcon },
                        { title: "Healthcare", icon: healthcareIcon },
                        { title: "Retail", icon: retailIcon },
                        { title: "Manufacturing", icon: manufacturingIcon },
                        { title: "Energy", icon: energyIcon },
                        { title: "Financial Services", icon: financialServicesIcon },
                        { title: "Telecommunications", icon: telecommunicationsIcon },
                        { title: "Aerospace & Defense", icon: aerospaceIcon },
                        { title: "Transportation & Logistics", icon: logisticsIcon },
                        { title: "Media & Entertainment", icon: mediaIcon },
                        { title: "Pharmaceuticals", icon: pharmaceuticalsIcon },
                        { title: "Construction", icon: constructionIcon },
                        { title: "F & B", icon: fbIcon },
                        { title: "Logistics", icon: shippingIcon },
                        { title: "Trading", icon: tradingIcon },
                        { title: "Chemical", icon: chemicalIcon },
                        { title: "Hospitality", icon: hospitalityIcon },
                        { title: "Agriculture", icon: agricultureIcon },
                        { title: "Insurance", icon: insuranceIcon },
                    ].map(({ title, icon }, index) => (
                        <div
                            key={index}
                            className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 flex flex-col items-center"
                        >
                            <img
                                src={icon}
                                alt={title}
                                className="h-16 md:h-20 mb-2" // Adjust height for responsiveness
                            />
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                {title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;
