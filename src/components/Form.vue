<template>
    <div class="mx-auto mt-8 p-1 bg-white rounded-md">
      <form @submit.prevent="postComment">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="col-span-1 relative">
            <label for="name" class="absolute -top-2 text-sm text-gray-600">Name<span class="text-black">*</span></label>
            <input v-model="formData.name" type="text" id="name" name="name" required placeholder="Walter Moss" class="mt-4 p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent w-full">
          </div>
          <div class="col-span-1 relative">
            <label for="email" class="absolute -top-2 text-sm text-gray-600">Email<span class="text-black">*</span></label>
            <input v-model="formData.email" type="email" id="email" name="email" required placeholder="Info@manifest.com" class="mt-4 p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent w-full">
          </div>
          <div class="col-span-1 relative">
            <label for="website" class="absolute -top-2 text-sm text-gray-600">Website</label>
            <input v-model="formData.website" type="url" id="website" name="website" placeholder="www.manifest.com" class="mt-4 p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent w-full">
          </div>
        </div>
        <div class="mb-4 mt-10">
          <input v-model="formData.saveData" type="checkbox" id="saveData" name="saveData" class="mr-2 focus:ring focus:border-black">
          <label for="saveData" class="text-sm font-medium text-gray-700">Save my name, email, and website in theis browser for the next time I comment</label>
        </div>
        <div class="mb-4 mt-10 relative col-span-3">
          <label for="comment" class="absolute -top-2 text-sm text-gray-600">Comment<span class="text-black">*</span></label>
          <textarea v-model="formData.comment" id="comment" name="comment" rows="1" placeholder="Hi there..." class="mt-4 p-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent w-full"></textarea>
        </div>
        <button type="submit" class="bg-gray-600 text-white px-8 py-2">Post</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          website: '',
          saveData: false,
          comment: '',
        },
      };
    },
    methods: {
      postComment() {
        console.log('Posting comment:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>