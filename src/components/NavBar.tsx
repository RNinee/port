import Nlogo from '../assets/icons/N-logo.svg'

const NavBar = () => {
  return (
    <header>
      <nav className="px-8 py-10 font-manrope text-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/">
            <img src={Nlogo} alt="Logo" className="h-8 w-8" />
          </a>
          <span className="font-bold">Phasin Noomkan</span>
        </div>
        <ul className="flex gap-7 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a
              href="/contact"
              className="border border-primary bg-primary px-4 py-2 rounded-[12px] text-white "
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
