import Image_1 from '../images/image 1.png';

import React from 'react'

const Section02 = () => {
  return (
    <div className="mt-20 w-full max-w-[1064px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold tracking-wide leading-8 text-violet-700 max-md:max-w-full">
                  Digital Strategy Consulting
                </div>
                <div className="mt-5 text-base text-black max-md:max-w-full">
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component
                  will never work in isolation and every business needs a
                  different mix. We provide a clear concept and strategic overview
                  to find the most efficient model for your business.
                </div>
                <div className="justify-center self-start px-5 py-3 mt-5 text-sm font-bold tracking-tight leading-4 text-white uppercase bg-orange-400 hover:bg-custom-purple rounded">
                  <button>
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img alt=''

                src={Image_1}
                className="md:mt-10 md:w-auto w-[70vw]"
              />
            </div>
          </div>
        </div>
  )
}

export default Section02