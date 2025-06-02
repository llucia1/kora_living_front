<template>
    <div v-if="movies.length">
      <div v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster" :alt="movie.Title" width="100" />
        <div>
          {{ movie.Title }} ({{ movie.Year }})
          <button @click="$emit('add-favorite', movie)">Guardar Como Favorita</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Movie } from '@/interfaces/Movie'
  
  defineProps<{ movies: Movie[] }>()
  defineEmits(['add-favorite'])
  </script>
  
  