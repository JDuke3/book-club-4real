export interface BookEntry {
  id: string;
  title: string;
  author: string;
  name: string;
  rating: number;
  review: string;
  createdAt: string;
}

// In-memory array for rapid prototyping (replace with DB query later)
export const bookLogs: BookEntry[] = [
  {
    id: '1',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    name: 'John Doe',
    rating: 5,
    review: 'Incredible sci-fi story with great pacing.',
    createdAt: new Date().toLocaleDateString(),
  },
];