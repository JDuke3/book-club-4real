import Navbar from "@/app/components/Navbar";

export default function Info() {

  return (

    <main className="min-h-screen bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center p-24">
      <Navbar />
        <div className="flex flex-col rounded-2xl items-center bg-slate-950">
          
        <h1 className=" p-10 text-4xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
        Info:
        </h1>

        <ul className="flex p-20 flex-col items-left w-full max-w-7xl list-disc space-y-5">
            <li>Book Club is a reading group with rotating book selections and monthly in-person discussions.</li>
            <li>I will try to update the website with a pair
                of books to choose from each month (probably one shorter and one longer).</li>
            <li>It doesn't matter that you choose from one of these,
                but the discussions should be loosely focused on the selected books. If you choose your own, 
                please avoid spoiling it at meetings, but feel free to participate.</li>
            
            <li>If you have suggestions, let me (Jackson) know, including book selection requests.</li>
            
        </ul>
          
        </div>
    </main>

  );

}