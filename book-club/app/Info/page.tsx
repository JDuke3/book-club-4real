import Navbar from "@/app/components/Navbar";

export default function Info() {

  return (

    <main className="min-h-screen bg-slate-900 text-white overflow-hidden flex flex-col items-center justify-center pt-24 px-10">
      <Navbar />
        <div className="flex flex-col rounded-2xl items-center bg-slate-950">
          
        <h1 className=" p-10 text-4xl font-bold tracking-tight  text-zinc-900 dark:text-zinc-100">
        Info:
        </h1>

        <div className="p-10">
        <ul className="flex p-20 flex-col items-left w-full max-w-7xl list-disc space-y-5 bg-slate-800 rounded-2xl text-lg text-left">
            <li>Book Club is a reading group with rotating book selections and semi-monthly discussion meetings.</li>
            <li>I will try to update the website monthly with a pair
                of books to choose from (one shorter and one longer).</li>
            <li>It doesn't matter that you choose from one of these,
                but the discussions should be loosely focused on the selected books. If you choose your own, 
                please avoid spoiling it at meetings, but feel free to participate.</li>
            <li>Discussion meetings will be in-person for now.</li>
            <li>Feel free to log any new books you've finished reading in the book log. </li>
            
            <li>If you have suggestions, let me (Jackson) know, including book selection requests.</li>
            
        </ul>
        </div>
          
        </div>
    </main>

  );

}