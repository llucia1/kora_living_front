<template>
    <DefaultLayout>
      <MovieSearch @search="searchMovies" />
      <MovieList :movies="movies" @add-favorite="addToFavorites" />
      <FavoriteList :favorites="favorites" @delete-favorite="deleteFromFavorites" />
    </DefaultLayout>
  </template>
  
  <script setup lang="ts">
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import { ref, onMounted } from 'vue'
  import { fetchMoviesByTitle } from '@/services/omdbService.ts'
  import { getFavorites, addFavorite , deleteFavorite } from '@/services/favoritesService.ts'
  import type { Movie } from '@/interfaces/Movie'
  
  import MovieSearch from '@/components/MovieSearch.vue'
  import MovieList from '@/components/MovieList.vue'
  import FavoriteList from '@/components/FavoriteList.vue'
  
  const movies = ref<Movie[]>([])
  const favorites = ref<Movie[]>([])
  
  const searchMovies = async (title: string) => {
    movies.value = await fetchMoviesByTitle(title)
  }
  
  const loadFavorites = async () => {
    favorites.value = await getFavorites()
  }
  
  const addToFavorites = async (movie: Movie) => {
    await addFavorite(movie)
    await loadFavorites()
  }
  
  const deleteFromFavorites = async (imdbId: string) => {
    await deleteFavorite(imdbId)
    await loadFavorites()
  }
  
  onMounted(loadFavorites)
  </script>
  