import type { Movie } from '@/interfaces/Movie'

const BASE_URL = import.meta.env.VITE_BACKEND_URL + '/api/favorites'

export async function getFavorites(): Promise<Movie[]> {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export async function addFavorite(movie: Movie): Promise<void> {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      imdbId: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    })
  })
}

export async function deleteFavorite(imdbId: string): Promise<void> {
  await fetch(`${BASE_URL}/${imdbId}`, {
    method: 'DELETE'
  })
}