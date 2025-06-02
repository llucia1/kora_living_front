<template>
    <div>
      <input v-model="searchTerm" @input="onSearch" placeholder="Buscar película..." />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'

  
  const searchTerm = ref('')
  const emit = defineEmits(['search'])
  
  const onSearch = () => emit('search', searchTerm.value)
  </script>