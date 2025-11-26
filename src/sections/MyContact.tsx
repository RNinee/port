import Email from '@/assets/icons/email.svg'
import Facebook from '@/assets/icons/Facebook.svg'
import Instagram from '@/assets/icons/IG.svg'
import LinkedIn from '@/assets/icons/LinkedIn.svg'

const MyContact = () => {
  return (
    <section className="max-w-[1050px] mx-auto">
      <div className="text-center flex flex-col items-center px-1 sm:px-4">
        <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl font-bold">
          My Contact
        </h2>
        <p className="text-gray-600 text-base sm:text-lg w-full max-w-3xl mx-auto mt-5">
          Open to internship opportunities, project collaborations, and
          networking with tech professionals. Drop me a message if you'd like to
          connect or discuss potential opportunities!
        </p>
        <div className="flex flex-col gap-6 mt-8 text-primary font-bold text-base sm:text-lg">
          <a
            href="mailto:phasin2006@gmail.com"
            className="inline-flex items-center gap-2 justify-center"
          >
            <img src={Email} alt="" className="w-8 h-8" />
            phasin2006@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-10 mt-5 justify-center items-center">
          <a href="https://www.linkedin.com/in/phasin-noomkan-8b672b350/">
            <img src={LinkedIn} alt="" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/09.psi/">
            <img src={Instagram} alt="" className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/phasin.noomkan">
            <img src={Facebook} alt="" className="h-6 w-6" />
          </a>
        </div>

        <div className="text-gray-600 text-base sm:text-lg mt-10 mb-15">
          © 2025 Phasin Noomkan. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default MyContact
