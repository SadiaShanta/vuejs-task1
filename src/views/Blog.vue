<script setup>
  import { ref } from "vue";
  import { router } from "@/router"; 
  import blog1 from "/images/Blog1.png";
  import blog2 from "/images/Blog2.png";
  import blog3 from "/images/Blog3.png";
  import blog4 from "/images/Blog4.png";
  import blog5 from "/images/Blog5.png";
  import Latest from "@/components/Latest.vue"; 
  // import { useRouter } from 'vue-router';
import BlogDetailsVue from "./BlogDetails.vue";
  

  const categories = [
    {
      title: 'UX traffic light colours',
      image: blog2,
      desc1: 'Interface Design',
      desc2: '8 June, 2020',
      desc3:'UI has to make a huge visual difference',
      desc4: 'between warning, an alert and a success.',
    },
    {
      title: 'Understanding users by going beyond personas and affinity',
      image: blog3,
      desc1: 'Visual Design, Technology',
      desc2: '8 June, 2020',
      desc3: 'Personas are great for ‘humanizing’ users. However, you shouldn’t',
      desc4: 'rely on them to define what larger demographic or affinity',
    },
    {
      title: 'Mentorship Match',
      image: blog4,
      desc1: 'Visual Design, Technology',
      desc2: '8 June, 2020',
      desc3: 'LinkedIn is on a clear mission to make professionals more successful by connecting the global workforce',
      desc4: 'as we learned — diversity and success go hand in hand',
    },
    {
      title: 'Creativity vs. UX',
      image: blog5,
      desc1: 'Visual Design',
      desc2: '8 June, 2020',
      desc3: 'Is it possible to create a user experience',
      desc4: ' without following best UX practices?',
    },
  ];

  const blogs= ref([
        {
          id:1,
          name: 'Technology, Interface Design',
          title: 'Using UX Design to Build a Sustainable Future',
          date: '6 May, 2020',
          images: [blog1, blog2, blog3],
          details: 'Transformation has to be driven by everybody, not just by climate groups, and we have a responsibility to use our influence to drive this.',
          selectedImageIndex: ref(0),
        },
        
      ]);
      // const router = useRouter()
      const goToBlogPage =(id) =>{
        router.push({name: 'blogDetails', params:{id}})
      };
      const changePicture = (blog, index) => {
        blog.selectedImageIndex = index;
      };
</script>

<template>
  <main>
    <div class="flex flex-col items-left py-16">
      <h2 class="my-5 text-5xl md:text-3xl font-medium text-black text-center md:text-left ml-10">Blog</h2>
      <div v-for="blog in blogs" :key="blog.id">
        <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div class="p-10" @click="goToBlogPage(blog.id)">
            <img :src="blog.images[blog.selectedImageIndex]" class="w-full grid place-items-center gap-5 text-center" alt="category1">
          </div>
          <div class="p-10">
            <p class="w-3/4">{{ blog.name}}</p><br>
            <h3 class="text-3xl font-bold mt-5">{{ blog.title}}</h3>
            <p class="w-3/4 mt-5">{{ blog.date}}</p>
            <p class="w-3/4 mt-10">{{ blog.details}}</p>
            <i class="mdi mdi-arrow-right mt-16"></i>
            <div class="grid grid-cols-3 gap-1 w-1/4 mt-12">
              <div v-for="(image, index) in blog.images" :key="index" @click="changePicture(blog, index)">
                <div :class=" { 'text-ash': index === blog.selectedImageIndex, 'text-black': index !== blog.selectedImageIndex }">
                  <p>{{ index + 1 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-left py-8">
      <h2 class="mt-4 mb-8 ml-8 text-xs font-regular text-Black text-center md:text-left">Categories : <span class="underline ml-8"> Interaction Design &#9660;</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div v-for="category in categories" :key="category.title">
        <Latest :content="category" />
        </div> 
      </div>
    </div>
    <div class="flex items-center justify-center mt-8">
      <button @click="loadMore" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8">
        Load More
      </button>
    </div>     
  </main>
</template>
