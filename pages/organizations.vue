<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <!-- Page content -->
    <div class="flex-1 w-full bg-white">
      <h2 class="text-2xl px-6 pt-4">organizations</h2>

      <div class="flex justify-around mt-8">
        <div class="bg-slate-400 h-32 w-32">
          <h2 class="text-blue-600">Contact Page</h2>
        </div>
        <div class="bg-slate-400 h-32 w-32">
          <h2 class="text-blue-600">Contact Page</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
</style>
