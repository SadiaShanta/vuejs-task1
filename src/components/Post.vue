<script setup>
const { content } = defineProps(['content']);

</script>
<template>
    <section class="text-black grid place-items-center">
        <div>
            <img :src="content.image" class="w-544 h-544" :alt="content.title">
            <h3 class="text-xs font-bold text-left font-lato">{{content.title }}</h3>
        </div>
    </section>
</template>