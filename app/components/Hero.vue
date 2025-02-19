<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <UCarousel v-slot="{ item }" :items="carousel" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden w-4/5 lg:w-3/5" arrows>
    <img :src="item" class="w-full" draggable="false">
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HeroPage'
})

const carousel = [
  '/magazapro.png',
]

</script>

<style>

</style>