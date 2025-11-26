import Nike from '@/assets/images/nike.png'
import Mern from '@/assets/images/mern.png'
import Next from '@/assets/images/next.png'

const Portfolio = () => {
  return (
    <section className="max-w-[1050px] mx-auto">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-[#1A1A1A] text-4xl font-bold ">Portfolio</h2>
        <p className="text-gray-600 text-lg text-center w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px]">
          Here are some of the projects I'm proud to have worked on. Each one
          represents a unique challenge and a story of creative problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 justify-center items-center mt-15 sm:grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6 justify-center items-center">
            <a href="/" className="cursor-pointer w-full max-w-[500px]">
              <div className="aspect-video w-full overflow-hidden rounded-[12px]">
                <img
                  src={Nike}
                  alt="Nike website"
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
            <h3 className="font-bold text-[#1A1A1A] text-xl">Nike Website</h3>
            <p className="text-gray-600 text-lg text-center">
              Frontend Development using tailwindcss, tanstack start and react
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-10">
            <a href="/" className="cursor-pointer">
              <img src={Next} alt="" />
            </a>
            <h3 className="font-bold text-[#1A1A1A] text-xl text-center">
              Next.js Website
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Full Stack Development using Next.js and TypeScript
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6 justify-center items-center">
            <a href="/" className="cursor-pointer w-full max-w-[500px]">
              <div className="aspect-video w-full overflow-hidden rounded-[12px]">
                <img src={Mern} alt="" className="h-full w-full object-cover" />
              </div>
            </a>
            <h3 className="font-bold text-[#1A1A1A] text-xl">DevConnector</h3>
            <p className="text-gray-600 text-lg text-center">
              Full Stack Development using MERN Stack. A social media platform
              for developers to connect and share their knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
