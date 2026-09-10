'use client';

import { useState, FormEvent } from 'react';

interface LogEntry {
  date: string;
  bookTitle: string;
  notes: string;
}

const INITIAL_ENTRIES: LogEntry[] = [
  { date: '2023-09-01', bookTitle: 'The Great Gatsby', notes: 'Loved the symbolism and character development.' },
  { date: '2023-09-05', bookTitle: 'To Kill a Mockingbird', notes: 'A powerful story about justice and morality.' },
  { date: '2023-09-10', bookTitle: '1984', notes: 'A chilling depiction of a dystopian future.' },
];

export default function log() {
  const [entries, setEntries] = useState<LogEntry[]>(INITIAL_ENTRIES);
  const [date, setDate] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newEntry: LogEntry = { date, bookTitle, notes };