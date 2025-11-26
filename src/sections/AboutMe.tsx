import NinePhoto from '@/assets/images/Nine_photo.jpg'
import Backend from '@/assets/icons/backend.svg'
import Website from '@/assets/icons/website.svg'
import Ai from '@/assets/icons/code.svg'

const AboutMe = () => (
  <section className="max-w-[1050px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-start">
      <div className="aspect-square w-full max-w-sm md:max-w-none mx-auto md:mx-0">
        <img
          src={NinePhoto}
          alt="Photo of Nine"
          className="w-full h-full object-cover object-top rounded-[12px]"
        />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl font-bold py-5">
          About Me
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          With over a decade of experience in the design industry, I've had the
          privilege of working on a diverse range of projects for startups and
          established companies. My passion lies in solving complex problems
          through clean, user-centric design. I believe that great design is not
          just about aesthetics, but about creating meaningful and effective
          solutions that make a difference.
        </p>
        <ul className="flex flex-col gap-6 mt-10 text-black dark:text-white text-base sm:text-lg">
          <li className="flex-row flex gap-3 items-center justify-center md:justify-start">
            <img src={Website} alt="" className="h-8 w-8" />
            Frontend Development
          </li>
          <li className="flex-row flex gap-3 items-center justify-center md:justify-start">
            <img src={Backend} alt="" className="h-8 w-8" />
            Backend Development
          </li>
          <li className="flex-row flex gap-3 items-center justify-center md:justify-start">
            <img src={Ai} alt="" className="h-8 w-8" />
            Ai and Machine Learning
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default AboutMe
