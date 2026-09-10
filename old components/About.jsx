export default function About(){
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

        <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 p-5 sm:px-4 bg-slate-950 rounded-full mb-4 sm:mb-6">
                <span className="text-5xl">About</span>
            </div>
            <div className="bg-slate-950 px-8 py-6 rounded-lg max-2-3xl text-center">
                <span className="text-2xl">I'm a student studying electrical engineering. I hope to use<br/>
                 this space to post more boring information about myself. I built<br/>
                 this website in javasctipt with Tailwind CSS and React. </span>
            </div>
        </div>
    </section>
    );
}