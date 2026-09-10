import Navbar from "@/app/components/Navbar";

export default function booklog() {

  return (

    <main className="min-h-screen bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center p-24">
      <Navbar />
        <div className="flex flex-col rounded-2xl items-center bg-slate-950">
          
        <h1 className=" p-10 text-4xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
        Book Log:
        </h1>

        <ul className="flex p-20 flex-col items-left w-full max-w-7xl list-disc space-y-5">
            <li>Book Club is a reading group with rotating book selections and monthly in-person discussions.</li>
            
            
        </ul>
          
        </div>
    </main>

  );

}