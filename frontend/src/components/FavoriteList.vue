<template>
    <h2>Favoritas</h2>
    <div v-if="favorites.length">
      <div v-for="movie in favorites" :key="movie.imdbID">
        <img :src="movie.poster" :alt="movie.title" width="100" />
        {{ movie.title }} ({{ movie.year }})
        <button @click="$emit('delete-favorite', movie.imdbId)">Eliminar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Movie } from '@/interfaces/Movie'
  
  defineProps<{ favorites: Movie[] }>()
  defineEmits(['delete-favorite'])
  </script>
  