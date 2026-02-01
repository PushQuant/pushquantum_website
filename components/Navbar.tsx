import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8 shadow-md z-50 relative">
      {/* Logo Area */}
      <div className="text-xl font-bold tracking-wide">
        <Link href="/">PushQuantum</Link>
      </div>

      {/* Navigation Links Area */}
      <div className="flex h-full items-center gap-8">
        
        {/* Simple Link 1 */}
        <Link href="/organization" className="h-full flex items-center hover:text-blue-400 transition font-medium">
          Organization
        </Link>

        {/* OFFERINGS DROPDOWN */}
        <div className="relative group h-full flex items-center">
          
          {/* The Trigger Button - Now styled identically to links */}
          <button className="h-full flex items-center gap-1 hover:text-blue-400 transition font-medium cursor-pointer focus:outline-none">
            Offerings
            <svg 
              className="w-4 h-4 transition-transform group-hover:rotate-180" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* The Dropdown Menu */}
          {/* w-72 makes it wider. -left-4 centers it better relative to the text */}
          <div className="absolute top-full -left-4 mt-0 w-72 bg-[#0B1120] border border-gray-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
            
            {/* Decorative triangle */}
            <div className="absolute -top-1.5 left-8 w-3 h-3 bg-[#0B1120] border-t border-l border-gray-700 rotate-45"></div>

            <div className="flex flex-col py-2">
              <Link href="/offerings/entrepreneurship" className="px-5 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Entrepreneurship Lab
              </Link>
              
              <Link href="/offerings/hackathon" className="px-5 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Hackathon
              </Link>
              
              <Link href="/offerings/bootcamp" className="px-5 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Qiskit Bootcamp
              </Link>
              
              <Link href="/offerings/quantentraume" className="px-5 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Quantenträume
              </Link>
              
              {/* Removed 'truncate' and added whitespace-nowrap to prevent wrapping */}
              <Link href="/offerings/thinktank" className="px-5 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                ThinkTank@PushQuantum
              </Link>
            </div>
          </div>
        </div>

        {/* Simple Link 2 */}
        <Link href="/people" className="h-full flex items-center hover:text-blue-400 transition font-medium">
          People
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;