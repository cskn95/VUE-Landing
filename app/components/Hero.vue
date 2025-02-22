<template>
  <div class="flex flex-col items-center lg:justify-end h-screen">
    <div class="flex flex-col justify-center items-center max-lg:px-5 max-lg:items-start z-10 lg:pb-10">
      <div class="font-Montserrat font-bold text-3xl lg:text-7xl bg-gradient-to-b from-pink-500 via-pink-300 to-white bg-clip-text text-transparent py-2">
        <p class="pb-2 font-Montserrat font-bold text-xl lg:text-4xl  bg-clip-text text-transparent "><span class="italic">MağazaPro</span> güvencesiyle,</p>
        İşletmenizi dijital dünyaya taşıyın
      </div>
      <p class="font-Inter font-normal text-base lg:text-xl pt-3 max-w-[900px] lg:text-center  bg-clip-text text-transparent py-2">Kolay, hızlı ve güvenilir! MağazaPro ile verimliliğinizi arttırın; satıştan stoğa, raporlamadan müşteri yönetimine kadar tüm süreçleri tek bir platformdan dünyanın neresinde olursanız olun rahatlıkla yönetin.</p>
    </div>
    <UCarousel v-slot="{ item }" :items="carousel" :ui="{ item: 'basis-full' }" class="rounded-t-lg overflow-hidden w-4/5 lg:w-3/5" arrows>
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
  '/magazapro.png',
]

</script>

<style>

</style>