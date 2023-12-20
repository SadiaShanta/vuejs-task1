<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { computed } from "vue";
  import Form from "@/components/Form.vue"; 
  import blogDetails1 from "/images/BlogDetails1.png";
  import writer from "/images/Writer.png";
  import comment1 from "/images/comment1.png";
  import comment2 from "/images/comment2.png";
  import Comment from "@/components/Comment.vue"; 

  const blogs= ref([
        {
          id:1,
          name: 'Technology, Interface Design',
          title: 'Using UX Design to Build a Sustainable Future',
          date: '6 May, 2020',
          details: 'Transformation has to be driven by everybody, not just by climate groups, and we have a responsibility to use ours influence to drive this. Overwhelming evidence points to the fact that we have about a decade to combat climate change caused by human activity before irreversible damage is caused. It is the biggest crisis of generation.',
          image: blogDetails1,
          qeustion: 'What Can UX Designers Do?',
          answer:'Firstly, on a broader scale, influence is held by people who work in tech, economically, socially and politically. People follow and listen to what happen in the world technology. We need to take advantage of this to highlight important issues and create awareness around the environmental impact of tech. ',
          writer: writer,
        },
      ]);

  const route = useRoute();
 

  const selectedBlog = computed(() => {
    return blogs.value.find((blog) => blog.id === Number(route.params.id))
  });

  const comments = [
    {
      reply:"False",
      image: comment1,
      name: 'UScarlet withch',
      date: '6 May, 2020',
      cmnt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ',
    },
    {
      reply:"True",
      image: comment2,
      name: 'Kate Moss',
      date: '6 May, 2020',
      cmnt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ',
    },
    {
      reply:"False",
      image: comment1,
      name: 'UScarlet withch',
      date: '6 May, 2020',
      cmnt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ',
    },
  ];
</script>

<template>
  <div class= "ml-5" v-if="selectedBlog">
    <p class="w-3/4">{{ selectedBlog.name}}</p><br>
    <h1 class="text-3xl mt-5 w-3/4 md:w-2/6 font-thin font-lato">{{ selectedBlog.title}}</h1>
    <p class="w-3/4 mt-5">{{ selectedBlog.date}}</p>
    <img v-if="selectedBlog.image" :src="selectedBlog.image" alt="Blog Image"><br>
    <div class="flex">
      <div class="w-1/6 p-4 mt-28">
        <div class="flex items-center mb-6">
          <a href="#"><img src="/images/facebook.png" alt="Facebook" class="w-3 h-3 mr-2"></a>
        </div>
        <div class="flex items-center mb-6">
          <a href="#"><img src="/images/twitter.png" alt="Twitter" class="w-3 h-3 mr-2"></a>
        </div>
        <div class="flex items-center mb-6">
          <a href="#"><img src="/images/linkdin.png" alt="LinkedIn" class="w-3 h-3 mr-2"></a>
        </div>
        <div class="flex items-center">
          <a href="#"><img src="/images/Dribble.png" alt="LinkedIn" class="w-3 h-3 mr-2"></a>
        </div>
      </div>
      <div class="w-5/6 p-4 mr-40">
        <img v-if="selectedBlog.writer" :src="selectedBlog.writer" alt="Writer Image"><br>
        <h1>{{ selectedBlog.title }}</h1>
      <p>{{ selectedBlog.details }}</p><br>
      <p>{{ selectedBlog.qeustion }}</p><br>
      <p>{{ selectedBlog.answer }}</p>
      <div class="flex items-center mt-8">
        <div class="border-r border-black h-full mr-8"></div>
        <div>
          <p class="text-lg italic">
            "UX designers are in a unique position to create tools with sustainability at their heart by streamlining user workflows, minimizing information overload, and removing potential distractions that keep users from accomplishing tasks they set out to do."
          </p>
          <p class="text-sm mt-2">‘Designing For Sustainability, Tim Frick, 2014'</p>
        </div>
      </div>
      <div class="mt-8 p-4 bg-white rounded-md">
        <ul class="list-disc pl-3">
          <li class="mb-2">Ask if the product is solving a real-world problem?</li>
          <li class="mb-2">Use content strategy to offer choices to customers choices.</li>
          <li class="mb-2">When considering fonts, stick to two font types and reduce the typeface.</li>
        </ul>
      </div>
      <h3 class="text-3xl mt-16 font-thin font-lato">Leave a Reply</h3>
      <p class="w-3/4 mt-1 mb-8">Required fields are marked *</p>
      <Form/>
      <h3 class="text-3xl mt-16 font-thin font-lato">Comments</h3>
    <div v-for="comment in comments" :key="comment.title" class="mt-8">
      <div v-if="comment.reply === 'False'">
        <Comment :content="comment" />
      </div>
      <div v-else-if="comment.reply === 'True'" class="ml-16 mt-1">
        <Comment :content="comment" />
      </div>
    </div>
  </div>
    
  </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
  
  