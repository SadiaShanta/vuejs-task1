<script setup>
import logo from "../assets/images/Logo.png"
import {ref } from "vue";

const navbar = ref('')
const showMenu = ref(false)
</script>

<template>
    <nav ref="navbar" class="bg-white h-16 flex justify-between items-stretch md:p-16 p-4 md:ml-28 ml-8 md:mr-28 mr:8">
      <div class="flex items-left px-2">
        <img :src="logo" class="inline-flex items-center" alt="logo" style="width: 134.44px; height: 11.82px;">
      </div>
      <div class="flex lg:hidden md:items-right items-right gap-2">
        <button @click="showMenu = !showMenu" class="relative z-30 text-black -mt-2 p-2">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div class="absolute lg:static top-20 inset-x-0
          flex flex-col lg:flex-row items-center gap-5 lg:gap-10
          lg:bg-transparent pt-5 pb-10 px-5 lg:p-0
          transition duration-500 lg:duration-200 lg:-translate-y-0"
          :class="!showMenu ? 'translate-y-[-150%]' : '-translate-y-0'">
        <router-link
            :to="{ name: 'home' }"
            @click="showMenu = false"
            class="inline-flex items-center h-full px-2 text-sm" exact-active-class="underline"
      >
            HOME
        </router-link>
        <router-link
          :to="{ name: 'about' }" exact
          @click="showMenu = false"
          class="inline-flex items-center px-2 h-full text-sm" active-class="underline"
        >
          ABOUT
        </router-link>
        <router-link
          :to="{ name: 'works' }" exact
          @click="showMenu = false"
          class="inline-flex items-center px-2 h-full text-sm" active-class="underline"
        >
            WORKS
        </router-link>
        <router-link
          :to="{ name: 'blog' }" exact
          @click="showMenu = false"
          class="inline-flex items-center px-2 h-full text-sm" active-class="underline"
        >
          BLOG
        </router-link>
        <router-link
          :to="{ name: 'contact' }" exact
          @click="showMenu = false"
          class="inline-flex items-center px-2 h-full text-sm" active-class="underline"
        >
          CONTACT
        </router-link>
        <router-link
          :to="{ name: 'search' }" exact
          @click="showMenu = false"
          class="inline-flex items-center px-2 h-full text-sm" active-class="underline"
        >
        <i class="mdi mdi-magnify"></i>
        </router-link>
      </div>
    </nav>
  </template>