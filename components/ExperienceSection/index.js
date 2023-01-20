// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { useEffect, useState } from 'react';
// import experienceData from "../../experience-data";
// import Image from "next/image";
// import Link from "next/link";
// import client from '../../sanityInit';

// export default function ExperienceSection() {
//     const [experience, setExperience] = useState(null)

//     useEffect(() => {
//         client.fetch(`*[_type == "experience"]`)
//             .then(data => {
//                 setExperience(data)
//                 console.log(data)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])

//     return (
//         <div className="skew relative z-10 h-fit md:px-32">
//             <div className='max-w-screen-xl mx-auto'>
//                 <AliceCarousel
//                     autoWidth
//                     mouseTracking
//                     ssrSilentMode
//                     touchTracking
//                     disableButtonsControls
//                     swipeExtraPadding={2000}
//                 >
//                     {experienceData.map((experience, index) => (
//                         <Experience {...experience} key={`experience-${index}`} />
//                     ))}
//                 </AliceCarousel>
//             </div>
//         </div>
//     );
// }

// function Experience({ icon, date, organization, position, desc, website }) {
//     return (
//         <div className="flex flex-col gap-4 px-10 md:pl-0 md:pr-12 select-none cursor-grab active:cursor-grabbing w-full md:w-[45rem]">
//             <div className="flex flex-col md:flex-row gap-4">
//                 <img src={icon} className="h-24 w-24 rounded-lg select-none drag" alt={organization + " logo"} />
//                 <div className="flex flex-col">
//                     <span className="text-5xl text-lightTextColor dark:text-white">{organization}</span>
//                     <span className="text-5xl text-border md:whitespace-nowrap">{position}</span>
//                 </div>
//             </div>
//             <div className={"flex flex-col gap-2"}>
//                 <div className="text-xl text-lightTextColor dark:text-white">{date}</div>
//                 <div className="text-xl text-lightTextColor dark:text-white whitespace-pre-line">{desc}</div>
//             </div>
//             <Link href={website}>
//                 <a
//                     target="_blank"
//                     className={`inline-block w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none`}
//                 >
//                     Website
//                 </a>
//             </Link>
//         </div>
//     )
// }

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import client from '../../sanityInit';
// import experienceData from "../../experience-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function ExperienceSection() {
    const [experiences, setExperiences] = useState();

    useEffect(() => {
        client
            .fetch('*[_type == "experience"]')
            .then((experiences) => {
                setExperiences(experiences);
                console.log(experiences)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    
    return (
        <div className="skew relative z-10 h-fit md:px-32">
            <div className='max-w-screen-xl mx-auto'>

            {
                experiences && experiences.length > 0 ? (
                    <AliceCarousel
                        autoWidth
                        mouseTracking
                        ssrSilentMode
                        touchTracking
                        disableButtonsControls
                        swipeExtraPadding={2000}
                    >
                        {experiences.map((experience, index) => (
                            <experience {...experience} key={`experience-${index}`} />
                        ))}
                    </AliceCarousel>
                ) : null
            }
                {/* <AliceCarousel
                    autoWidth
                    mouseTracking
                    ssrSilentMode
                    touchTracking
                    disableButtonsControls
                    swipeExtraPadding={2000}
                >
                    {experiences.map((experience, index) => (
                        <experience {...experience} key={`experience-${index}`} />
                    ))}
                </AliceCarousel> */}
            </div>
        </div>
    );
}

// function Experience({ icon, company, position, desc, website, startdate, enddate, }) {
//     return (
//         <div className="flex flex-col gap-4 px-10 md:pl-0 md:pr-12 select-none cursor-grab active:cursor-grabbing w-full md:w-[45rem]">
//             <div className="flex flex-col md:flex-row gap-4">
//                 <img src={icon} className="h-24 w-24 rounded-lg select-none drag" alt={company + " logo"} />
//                 <div className="flex flex-col">
//                     <span className="text-5xl text-lightTextColor dark:text-white">{company}</span>
//                     <span className="text-5xl text-border md:whitespace-nowrap">{position}</span>
//                 </div>
//             </div>
//             <div className={"flex flex-col gap-2"}>
//                 <div className="text-xl text-lightTextColor dark:text-white">{startdate} - {enddate}</div>
//                 <div className="text-xl text-lightTextColor dark:text-white whitespace-pre-line">{desc}</div>
//             </div>
//             <Link href={website}>
//                 <a
//                     target="_blank"
//                     className={`inline-block w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none`}
//                 >
//                     Website
//                 </a>
//             </Link>
//         </div>
//     )
// }