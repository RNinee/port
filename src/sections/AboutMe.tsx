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
        <h2 className="text-[#1A1A1A] text-3xl sm:text-5xl font-bold py-5">
          About Me
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          I'm Nine, a Computer Engineering & AI student who loves building
          practical solutions. At Canarie, I work with large language models and
          built a PDF extraction CLI tool using Surya OCR and LangGraph agents.
          I develop full-stack applications across MERN stack, Next.js, and
          Tanstack Start, always exploring new technologies and tackling fresh
          challenges.
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
