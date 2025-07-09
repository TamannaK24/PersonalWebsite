<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <!-- Page content -->
    <div class="flex-1 w-full bg-white px-8 py-6 flex items-center justify-center">
      <div class="flex gap-20">
        <!-- Outer Box -->
        <div class="bg-slate-400 h-[550px] w-[1100px] p-6 rounded-lg shadow-md flex">
          
          <!-- Left Column: Text -->
          <div class="w-1/2 pr-4 flex flex-col justify-center gap-4">
            <h2 class="text-blue-600 text-xl font-medium">Hey, I'm Tammy Khurana</h2>
            <p class="text-gray-800 text-base font-normal">
              I’m an aspiring data scientist with a background in frontend development. I enjoy crafting clean, user-friendly interfaces and solving problems through thoughtful, creative design.
            </p>
            <h1>Languages:</h1>
            <h1>Skills:</h1>
          </div>

          <!-- Right Column: Green Box -->
          <div class="w-1/2 bg-green-400 rounded-md shadow-inner">
            <!-- You can add content here later -->
          </div>

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
