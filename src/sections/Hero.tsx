import heroImage from '@/assets/constant'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-[#1A1A1A] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Phasin Noomkan
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
          Computer Engineering & AI student at CMKL University. Building
          intelligent systems and full-stack applications that solve real
          problems.
        </p>
        <a
          href="https://github.com/RNinee"
          className="max-w-[200px] mt-8 sm:mt-10 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold w-full sm:w-auto"
        >
          My GitHub
        </a>
        <img
          src={heroImage}
          alt=""
          className="aspect-video object-cover w-full max-w-[1050px] mt-10 sm:mt-20 rounded-[12px]"
        />
      </div>
    </section>
  )
}

export default Hero
