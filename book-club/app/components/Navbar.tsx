import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-16 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-16">

                <div className="shrink-0">
                    <Link href="/" className="text-white font-bold text-xl">Book Club</Link>
                </div>

                <div className="ml-10 flex items-center space-x-4">

                        

                        <Link href="/booklog">
                        <button 
                            className ={`
                                px-3 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono
                                rounded-lg
                            `}
                            >
                            Book Log
                        </button>
                        </Link>

                        <Link href="/Info">
                        <button 
                            className ={`
                                px-3 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono
                                rounded-lg
                            `}
                            >
                            Info
                        </button>
                        </Link>



                    </div>
                </div>
            </div>
        </nav>
    );
}