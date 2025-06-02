import type { Movie } from '@/interfaces/Movie'

// OMDb API Key (debes conseguir una gratuita)
const OMDB_API_KEY = '79cd813d'
const OMDB_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

// Symfony backend
const BACKEND_URL = 'http://localhost:8000/api/favorites'

export async function fetchMoviesByTitle(title: string): Promise<Movie[]> {
  const res = await fetch(`${OMDB_URL}&s=${encodeURIComponent(title)}`)
  const data = await res.json()
  return data.Search || []
}

export async function getFavorites(): Promise<Movie[]> {
  const res = await fetch(BACKEND_URL)
  return await res.json()
}

export async function addFavorite(movie: Movie): Promise<void> {
  await fetch(BACKEND_URL, {
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
  await fetch(`${BACKEND_URL}/${imdbId}`, {
    method: 'DELETE'
  })
}
