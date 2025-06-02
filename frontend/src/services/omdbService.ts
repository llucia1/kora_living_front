import type { Movie } from '@/interfaces/Movie'

const API_KEY_MOVIES = import.meta.env.VITE_OMDB_API_KEY
const API_OMDB_URL = import.meta.env.VITE_OMDB_API + '?apikey=' + API_KEY_MOVIES


export async function fetchMoviesByTitle(title: string): Promise<Movie[]> {
  const response = await fetch(`${API_OMDB_URL}&s=${encodeURIComponent(title)}`)
  const data = await response.json()

  if (data.Response === 'True' && Array.isArray(data.Search)) {
    return data.Search
  }

  return []
}