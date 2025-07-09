<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <!-- Page content -->
    <div class="flex-1 w-full bg-white px-8 py-6 flex items-center justify-center">
      <div class="flex gap-20">
        <div class="bg-slate-400 h-[500px] w-[500px] p-6 rounded-lg shadow-md flex items-start">
          <h2 class="text-blue-600 text-xl font-medium">Contact Page</h2>
        </div>
        <div class="bg-slate-400 h-[500px] w-[500px] p-6 rounded-lg shadow-md flex items-start">
          <h2 class="text-blue-600 text-xl font-medium">Contact Page</h2>
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
