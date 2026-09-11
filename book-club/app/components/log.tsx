'use client';

import { useState, FormEvent } from 'react';

interface LogEntry {
  date: string;
  bookTitle: string;
  notes: string;
  rating?: number; // Optional rating field
}

const INITIAL_ENTRIES: LogEntry[] = [
  { date: '2023-09-01', bookTitle: 'The Great Gatsby', notes: 'Loved the symbolism and character development.', rating: 5 },
  { date: '2023-09-05', bookTitle: 'To Kill a Mockingbird', notes: 'A powerful story about justice and morality.', rating: 4 },
  { date: '2023-09-10', bookTitle: '1984', notes: 'A chilling depiction of a dystopian future.' },
];

export default function log() {
  const [entries, setEntries] = useState<LogEntry[]>(INITIAL_ENTRIES);
  const [date, setDate] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState<number | undefined>(undefined);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookTitle.trim() || !notes.trim()) return;

    const newEntry: LogEntry = { date, bookTitle, notes, rating };
    setEntries([...entries, newEntry]);
    setDate('');
    setBookTitle('');
    setNotes('');
    setRating(undefined);
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Log</h1>
    </div>
  );
}