import heroImage from '@/assets/constant'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[#1A1A1A] text-6xl font-bold ">Phasin Noomkan</h1>
        <p className="text-gray-600 text-lg">
          Product Designer & UI Specialist. Crafting intuitive digital
          experiences that connect with people.
        </p>
        <a
          href="/work"
          className="mt-10 flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold "
        >
          View My Work
        </a>
        <img
          src={heroImage}
          alt=""
          className="aspect-video object-cover h-[600px] w-[1050px] mt-20 rounded-[12px]"
        />
      </div>
    </section>
  )
}

export default Hero
