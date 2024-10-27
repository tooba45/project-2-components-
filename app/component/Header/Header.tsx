const header = () => {
  return (
<header className="bg-gray-800 text-white py-4">
    <div className="container rx-auto flex justify-between items-center">
        <h1 className="text-balance font-bold">My Next.js Website</h1>
         <nav>
            <ul className="flex gap-6">
                <li><a href="/" className="hover:text-red-500">Home</a></li>
                 <li><a href="/about" className="hover:text-red-500">About</a></li>
                 <li><a href="/contact" className="hover:text-red-500"> Contact</a></li>
            </ul>

            </nav>
        
    </div>
    </header>
  )
}

export default header;
