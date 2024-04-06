import Image_2 from '../images/image 2.png'

const Section01 = () => {
  return (
    <div className="mt-20 w-full max-w-[1064px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="">
              <img alt='Image_2'
                src={Image_2}
                className="md:mt-10 md:w-auto w-[70vw]"
              />
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold tracking-wide leading-8 text-violet-700 max-md:max-w-full">
                  Web & Mobile App Development
                </div>
                <div className="mt-5 text-base text-black max-md:max-w-full">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and engagement
                  methods to respond to different intents shown by your potential
                  customers who interact with your business online.
                </div>
                <div className="justify-center self-start px-5 py-3 mt-5 text-sm font-bold tracking-tight leading-4 text-white uppercase bg-orange-400 hover:bg-custom-purple rounded">
                  <button>
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Section01