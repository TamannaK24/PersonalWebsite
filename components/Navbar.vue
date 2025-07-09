
<script setup>
 import { ref } from 'vue'
 import { Menu, X } from 'lucide-vue-next'

 const navOpen = ref(false) 

 const toggleNav = () => {
    navOpen.value = !navOpen.value
 }
</script>

<template>
    <div>
        <div>
            <!-- Mobile -->
            <div class="sm:hidden px-6 py-6 bg-[#947F63]">
                <button @click="toggleNav">
                    <Menu v-if="!navOpen" class="w-6 h-6 text-white" />
                    <X v-else class="w-6 h-6 text-white"/>
                </button>
            </div>   
            
            <nav v-if="navOpen" class="sm:hidden px-6 py-6 bg-[#947F63] text-white gap-y-4 flex flex-col items-left">
                <NuxtLink to="/about" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">About</NuxtLink>
                <NuxtLink to="/organizations"  class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Organizations</NuxtLink>
                <NuxtLink to="/projects" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Projects</NuxtLink>
                <NuxtLink to="/hobbies" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Hobbies</NuxtLink>
                <NuxtLink to="/contact" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition" >Contact</NuxtLink>
            </nav>
        </div>

        <!---Desktop-->
        <div class="hidden sm:flex px-6 py-4 bg-[#947F63] text-white items-center gap-x-10">
            <a href="#">
                <img class="w-40 h-20" src="/tammylogo2.PNG" alt="Tammy Logo" />
            </a>
            
            <div class="flex items-center gap-x-10 text-white">
                <NuxtLink to="/about" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">About</NuxtLink>
                <NuxtLink to="/organizations" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Organizations</NuxtLink>
                <NuxtLink to="/projects" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Projects</NuxtLink>
                <NuxtLink to="/hobbies" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Hobbies</NuxtLink>
                <NuxtLink to="/contact" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition" >Contact</NuxtLink>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>