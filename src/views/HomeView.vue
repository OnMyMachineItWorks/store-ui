<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ref, onMounted } from 'vue';

onMounted(async () => {
  await testApiCall();
})

async function testApiCall() {
  const response = await fetch('http://localhost:5113/Store');
  const data = await response.json();

}

</script>
