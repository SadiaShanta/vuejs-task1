<script setup>
const { content } = defineProps(['content'])
</script>
<template>
    <section class="text-black grid place-items-center gap-2 text-center mt-5">
        <div class="p-5">
            <img :src="content.image" class="w-full" :alt="content.title">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-10 mt-5">
                <p class="w-full text-center md:text-left font-lato text-xs">{{content.desc1}}</p>
                <p class="w-full text-center md:text-right font-lato text-xs">{{ content.desc2}}</p>
            </div>
        </div>
        <h3 class="text-xl font-medium text-left w-full ml-8 font-lato mb-16">{{ content.title }}</h3>
        <p class="w-full mb-1 text-left font-lato ml-8">{{ content.desc3}}</p>
        <p class="w-full text-left font-lato ml-8">{{ content.desc4}}</p>  
    </section>
</template>