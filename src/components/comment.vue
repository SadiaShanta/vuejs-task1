<script setup>
const { content } = defineProps(['content'])
</script>
<template>
    <div class="flex items-center">
        <img :src="content.image" alt="User" class="w-10 h-10 mr-4 mb-10">
        <div>
            <div class="flex items-center mt-4">
                <p class="font-bold">{{ content.name }}</p>
                <p class="text-xs text-gray-500 ml-2">{{ content.date }}</p>
            </div>
          <p class="mt-2">{{content.cmnt}}</p>
          <p class="mt-2 text-sm"><span class="ml-4"><i class="mdi mdi-arrow-left  mt-16"></i></span> Reply</p>
        </div>
      </div>
</template>