<script setup>
  import { ref } from "vue";
  import post1 from "/images/Post1.png";
  import post2 from "/images/Post2.png";
  import Post from "@/components/Post.vue"; 
  import latest1 from "/images/Post3.png";
  import latest2 from "/images/Post4.png";
  import latest3 from "/images/Post5.png";
  import Latest from "@/components/Latest.vue"; 

const posts = ref([
  {
    title: 'Mixkit Inspo',
    image: post1,
  },
  {
    title: 'Abalone',
    image: post2,
  },
]);
const latests = [
    {
      title: 'UX traffic light colours',
      image: latest1,
      desc1: 'Interface Design',
      desc2: '8 June, 2020',
      desc3:'UI has to make a huge visual difference',
      desc4: 'between warning, an alert and a success.',
    },
    {
      title: 'Using UX Design to Build',
      image: latest2,
      desc1: 'Technology',
      desc2: '6 May, 2020',
      desc3: 'Transformation has to be driven by',
      desc4: 'everybody, not just by climate groups',
    },
    {
      title: 'Creativity vs. UX',
      image: latest3,
      desc1: 'Visual Design',
      desc2: '8 June, 2020',
      desc3: 'Is it possible to create a user experience',
      desc4: ' without following best UX practices?',
    },
  ];
</script>

<template>
  <main>
    <div class="flex flex-col items-left py-8">
      <h2 class="mt-8 mb-16 text-5xl font-regular text-Black text-center md:text-left p-5 font-lato">Manifest is a newborn theme.<br>Clean, simple and fast.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div v-for="post in posts" :key="post.title">
        <Post :content="post" />
        </div> 
      </div>
    </div>
    <div class="flex flex-col items-left py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-1">
        <div class="w-11/12">
          <p class="text-center md:text-left font-lato text-2xl font-medium mb-10">Full-time UI/UX designer
          <br>Head of Design at VeronaLabs.com</p>
          <i class="mdi mdi-arrow-right  mt-16"></i>
        </div>
        <div class="gap-16 w-11/12">
          <p class="text-center md:text-left font-lato text-19">We work with clients around the world from our headquarters in Charleston, South Carolina.</p><br>
          <p class="text-center md:text-left font-lato text-19">
            We focus on naming, branding, brand narratives, website design and development, and brand experiences.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-left mt-2">
      <div class="grid grid-cols-2 md:grid-cols-2 gap-10 mt-5">
        <h2 class="mt-24 mb-8 ml-2 text-xl font-regular text-Black text-center md:text-left p-3 font-lato">Latest Posts</h2>
        <i class="mdi mdi-arrow-right  mt-28 mb-8 mr-10 text-center md:text-right"></i>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 place-items-center">
        <div v-for="latest in latests" :key="latest.title">
        <Latest :content="latest" />
        </div> 
      </div>
    </div>      
  </main>
</template>
