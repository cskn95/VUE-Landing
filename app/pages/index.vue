<template>
  <div>
    <!-- Hero section (ilk bölüm) -->
    <section ref="heroSection" class="bg-cover bg-center bg-[url(/bg3.jpg)] h-screen flex flex-col justify-center items-center">
      <Hero />
    </section>

    <!-- Faydalar section (ikinci bölüm) -->
    <section ref="faydalarSection" key="faydalar" class="flex flex-col bg-[#f5f5f7ff]">
      <DynamicTitles />
      <FirstPageMobile />
    </section>

    <!-- İletişim section (üçüncü bölüm) -->
    <section key="iletisim" class="flex flex-col bg-white">
      <Demo />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'HomePage'
})

// Hangi bölümde olduğumuzu takip ediyoruz
const currentSection = ref('hero')
const heroSection = ref(null)
const faydalarSection = ref(null)

// Scroll olayını dinleyip, koşullara göre geçiş yapıyoruz
const handleScroll = (event) => {
  // Aşağı kaydırma: Hero'dan faydalar bölümüne
  if (event.deltaY > 0 && currentSection.value === 'hero') {
    faydalarSection.value.scrollIntoView({ behavior: 'smooth' })
    currentSection.value = 'faydalar'
    event.preventDefault()
  }
  // Yukarı kaydırma: Faydalar bölümünden hero'ya geçiş
  else if (event.deltaY < 0 && currentSection.value === 'faydalar') {
    const rect = faydalarSection.value.getBoundingClientRect()
    // Eşik: faydalar bölümünün üst kısmı sayfanın üstüne (örneğin 50px veya daha az boşluk) yakınsa
    if (rect.top >= 0 && rect.top <= 50) {
      heroSection.value.scrollIntoView({ behavior: 'smooth' })
      currentSection.value = 'hero'
      event.preventDefault()
    }
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleScroll, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
})
</script>
