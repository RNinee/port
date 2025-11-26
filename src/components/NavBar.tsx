import Nlogo from '../assets/icons/N-logo.svg'

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background-light">
      <nav className="px-4 sm:px-8 py-4 sm:py-6 font-manrope text-base sm:text-lg flex items-center justify-between gap-4 flex-nowrap max-w-8xl mx-auto">
        <div className="flex items-center gap-3 shrink-0">
          <a href="/" className="shrink-0">
            <img src={Nlogo} alt="Logo" className="h-8 w-8 aspect-square shrink-0" />
          </a>
          <span className="font-bold whitespace-nowrap">Phasin Noomkan</span>
        </div>
        <ul className="flex gap-3 sm:gap-6 items-center flex-1 sm:flex-none justify-end sm:justify-end flex-nowrap">
          <div className="gap-8 items-center hidden sm:flex whitespace-nowrap">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
          </div>

          <li>
            <a
              href="/contact"
              className="border border-primary bg-primary px-4 py-2 rounded-[12px] text-white w-full sm:w-auto text-center whitespace-nowrap shrink-0"
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
