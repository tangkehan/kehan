'use client'
import Image from './Image'
import React, { useState } from 'react'

// const HobbyCard = ({ title, info, imgSrcs }) => (

//     <div className="w-full">
//       <div className="flex overflow-hidden border-2 shadow-md shadow-indigo-500/40 dark:hover:border-gray-400 dark:border-gray-600 border-gray-400 hover:border-gray-500 rounded-md border-opacity-60">
//         <Image
//           alt={title}
//           src={imgSrc}
//           className="object-cover object-center w-1/3 h-full"
//           width={1088}
//           height={612}
//         />

//         <div className="p-6 flex-1">
//           <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{info}</p>
//         </div>
//       </div>
//     </div>
// );

// export default HobbyCard;

// interface HobbyCardProps {
//     title: string;
//     info: string;
//     imgSrcs: string[]; // Array of strings
// }

const HobbyCard = ({ title, info, imgSrcs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imgSrcs.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imgSrcs.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md border-2 border-gray-400 border-opacity-60 shadow-md shadow-indigo-500/40 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400">
        <div className="relative">
          {/* Image display */}
          <div className="relative h-80 w-full md:h-96 lg:h-[500px]">
            {imgSrcs.length > 0 && (
              <Image
                alt={`${title} image`}
                src={imgSrcs[currentImageIndex]}
                className="object-cover object-center"
                fill
                // width={1088}
                // height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white"
          >
            &gt;
          </button>
        </div>

        <div className="p-6">
          <p className="prose mb-3 max-w-none text-xl text-gray-500 dark:text-gray-400">{info}</p>
        </div>
      </div>
    </div>
  )
}

export default HobbyCard
