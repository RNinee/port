import Nike from '@/assets/images/nike.png'
import Mern from '@/assets/images/mern.png'
import Next from '@/assets/images/next.png'

const Portfolio = () => {
  return (
    <section className="max-w-[1050px] mx-auto">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-[#1A1A1A] text-3xl sm:text-5xl font-bold ">
          Portfolio
        </h2>
        <p className="text-gray-600 text-base sm:text-lg text-center w-full max-w-3xl">
          Here are some of the projects I'm proud to have worked on. Each one
          represents a unique challenge and a story of creative problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 justify-center items-center justify-items-center mt-15 sm:grid-cols-2">
        <div className="flex flex-col justify-center items-center w-full max-w-[540px] mx-auto gap-10">
          <div className="flex flex-col gap-6 justify-center items-center w-full">
            <a
              href="https://nike-cyan-three.vercel.app/"
              className="cursor-pointer w-full max-w-[520px]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-[12px]">
                <img
                  src={Nike}
                  alt="Nike website"
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
            <h3 className="font-bold text-[#1A1A1A] text-xl text-center">
              Nike Website
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Frontend Development using tailwindcss, tanstack start and react
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <a
              href="https://github.com/RNinee/NextBlog"
              className="cursor-pointer w-full max-w-[520px]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-[12px]">
                <img src={Next} alt="" className="h-full w-full object-cover" />
              </div>
            </a>
            <h3 className="font-bold text-[#1A1A1A] text-xl text-center">
              Next.js Website
            </h3>
            <p className="text-gray-600 text-lg text-center">
              Full Stack Development using Next.js and TypeScript
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-[540px] mx-auto gap-10">
          <div className="flex flex-col gap-6 justify-center items-center w-full">
            <a
              href="https://agile-springs-85100-1bc255ae9f1e.herokuapp.com/"
              className="cursor-pointer w-full max-w-[520px]"
            >
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
