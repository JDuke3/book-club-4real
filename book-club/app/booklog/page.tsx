import Navbar from "@/app/components/Navbar";

import { supabase } from '@/lib/supabase';
import { addEntry } from '@/app/actions';

// Ensure the page always serves fresh data
export const dynamic = 'force-dynamic';

export default async function booklog() {

  // Query Supabase directly on the server
  const { data: books, error } = await supabase
    .from('book_logs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch books:', error.message);
  }

  const bookList = books || [];

  return (

    <main className="min-h-screen bg-slate-900 text-white p-24 flex flex-col items-center justify-center">
      <Navbar />
      <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Community Book Log
      </h1>

      {/* Entry Submission Form */}
      <form 
        action={addEntry}
        className="mt-8 p-6 rounded-2xl bg-zinc-900 space-y-4 border border-zinc-800 "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
              Book Title
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full rounded-lg px-3.5 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              className="w-full rounded-lg px-3.5 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg px-3.5 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Rating
          </label>
          <select
            name="rating"
            defaultValue="5"
            className="w-full rounded-lg px-3.5 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="5">★★★★★ (5/5)</option>
            <option value="4">★★★★☆ (4/5)</option>
            <option value="3">★★★☆☆ (3/5)</option>
            <option value="2">★★☆☆☆ (2/5)</option>
            <option value="1">★☆☆☆☆ (1/5)</option>
          </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Notes (no spoilers)
          </label>
          <textarea
            name="review"
            rows={3}
            className="w-full rounded-lg px-3.5 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-lg transition"
        >
          Add to Log
        </button>
      </form>

      {/* Logged Books Feed */}
      <div className="mt-12 space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Recent Reads ({bookList.length})
        </h2>

        {bookList.map((book) => (
          <article
            key={book.id}
            className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  {book.title}
                </h3>
                <p className="text-sm text-zinc-500">Author: {book.author}</p>
                
              </div>
              <span className="text-amber-500 font-mono text-sm">
                {'★'.repeat(book.rating)}
                {'☆'.repeat(5 - book.rating)}
              </span>
            </div>

            {book.review && (
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                {book.review}
              </p>
            )}

            <div className="mt-3 flex items-center justify-between">

            <p className="text-sm text-amber-500">- {book.name}</p>

            <time className="block mt-4 text-xs text-right text-zinc-400">
              {new Date(book.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            </div>
            
          </article>
        ))}
      </div>
      </div>
    </main>

  );

}