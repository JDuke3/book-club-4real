'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';
import { bookLogs } from '@/lib/books';

export async function addEntry(formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const name = formData.get('name') as string;
  const rating = Number(formData.get('rating') || 5);
  const review = formData.get('review') as string;

  if (!title || !author) return;

  const { error } = await supabase.from('book_logs').insert([
    {
      title,
      author,
      name,
      rating,
      review,
    },
  ]);

  if (error) {
    console.error('Error inserting book entry:', error.message);
    return;
  }

  // Purges cached HTML and re-renders the page with the latest data
  revalidatePath('/book-log');
}