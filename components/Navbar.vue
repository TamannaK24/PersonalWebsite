
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
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">About</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Organizations</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Projects</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Hobbies</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition" >Contact</a>
            </nav>
        </div>

        <!---Desktop-->
        <div class="hidden sm:flex px-6 py-4 bg-[#947F63] text-white items-center gap-x-10">
            <a href="#">
                <img class="w-40 h-20" src="/tammylogo2.PNG" alt="Tammy Logo" />
            </a>
            
            <div class="flex items-center gap-x-10 text-white">
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">About</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Organizations</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Projects</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition">Hobbies</a>
                <a href="#" class="text-base block rounded-full bg-[#756652] px-6 py-4 border border-transparent hover:border-white transition" >Contact</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>