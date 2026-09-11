import Navbar from "@/app/components/Navbar";

export default function Home() {

  return (

    <main className="min-h-screen bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center pt-24 px-10">
      <Navbar />
        <div className="flex flex-col rounded-2xl items-center bg-slate-950 min-w-50">
          
          <h1 className=" p-10 rounded-2x1 text-4xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
            Current Books (September):
          </h1>





          <div className="flex flex-row items-center justify-center w-full max-w-7xl bg-slate-950">
            <div className="flex-col p-10 bg-slate-950">
              <h1>Longer Book:</h1>
              <h1 className="text-4xl font-bold tracking-tight  text-amber-500">
                Gravity's Rainbow
              </h1>
              <h2 className="text-2xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
                <span className="text-amber-800">Thomas Pynchon</span>
              </h2>
              <img className="w-80 h-auto"src="/Gravity.jpg" alt="Gravity's Rainbow"></img>
            </div>


            

            <div className="flex-col p-10 bg-slate-950">
              <h1>Shorter Book:</h1>
              <h1 className="text-4xl font-bold tracking-tight text-amber-500">
                The Stranger
              </h1>
              <h2 className="text-2xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
                <span className="text-amber-800">Albert Camus</span>
              </h2>
              <img className="w-80 h-auto" src="/let.jpg" alt="The Stranger"></img>
            </div>




          </div>
          <p className="text-lg text-zinc-600 text-center dark:text-zinc-400 p-10">
            Pick one, both, or choose your own. Meeting TBD.
          </p>
          
        </div>
    </main>

  );

}
