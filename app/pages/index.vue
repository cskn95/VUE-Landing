<template>
  <ParticlesBg
    class="absolute inset-0 z-[1] h-full"
    :ease="100"
    :quantity="200"
    :staticity="10"
    :color="'#000'"
    refresh
  />
  <section :key="1" class="flex flex-col max-lg:bg-white bg-[url('/bg3.jpg')] bg-cover bg-center h-screen">
    <!-- <AppHeader /> -->
    <div class="flex flex-col justify-center items-center h-full max-lg:px-5 max-lg:pb-10 max-lg:items-start z-10">
      <div class="font-Montserrat font-bold text-3xl lg:text-7xl bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent py-2">
        <p class="font-Montserrat font-bold text-xl lg:text-4xl bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent py-2"><span class="italic">MağazaPro</span> güvencesiyle,</p>
        İşletmenizi dijital dünyaya taşıyın
      </div>
      <p class="font-Inter font-normal text-base lg:text-xl pt-7 max-w-[900px] lg:text-center bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent py-2">Kolay, hızlı ve güvenilir! MağazaPro ile verimliliğinizi arttırın; satıştan stoğa, raporlamadan müşteri yönetimine kadar tüm süreçleri tek bir platformdan dünyanın neresinde olursanız olun rahatlıkla yönetin.</p>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'HomePage'
})

import { ref, onMounted, onBeforeUnmount } from 'vue'

  // Hangi section'ın görüntülendiğini takip eden reaktif değişken
  const currentSectionIndex = ref(0)
  
  // Scroll işlemi sırasında yeni event tetiklemeyi engellemek için bayrak
  const isScrolling = ref(false)
  
  // DOM'dan alınacak section referanslarını saklamak için
  let sections = []
  
  // Mobilde dokunmatik işlemler için başlangıç ve bitiş koordinatları
  const touchStartY = ref(null)
  const touchEndY = ref(null)
  
  /* --- Masaüstü (Mouse Wheel) İşlemleri --- */
  // Mouse wheel event handler
  const handleWheel = (e) => {
    e.preventDefault() // Tarayıcının varsayılan scroll davranışını engeller
  
    if (isScrolling.value) return
  
    isScrolling.value = true
  
    // e.deltaY pozitifse kullanıcı aşağı kaydırıyor, negatifse yukarı kaydırıyor
    if (e.deltaY > 0) {
      goToSection(currentSectionIndex.value + 1)
    } else {
      goToSection(currentSectionIndex.value - 1)
    }
  
    // Geçiş sırasında 1 saniye boyunca yeni event'ları engelle
    setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }
  
  /* --- Mobil (Dokunmatik/Swipe) İşlemleri --- */
  // Dokunma başladığında Y koordinatını al
  const handleTouchStart = (e) => {
    touchStartY.value = e.changedTouches[0].screenY
  }
  
  // Dokunma bittiğinde Y koordinatını alıp swipe işlemini gerçekleştir
  const handleTouchEnd = (e) => {
    touchEndY.value = e.changedTouches[0].screenY
    handleSwipe()
  }
  
  // Swipe hareketini algılayan fonksiyon
  const handleSwipe = () => {
    if (touchStartY.value === null || touchEndY.value === null) return
  
    const diff = touchStartY.value - touchEndY.value
  
    // Minimum swipe mesafesi (örneğin 50 piksel) kontrolü
    if (Math.abs(diff) > 10) {
      if (isScrolling.value) return
      isScrolling.value = true
  
      if (diff > 0) {
        // Yukarı kaydırma: sonraki section'a geç (parmak yukarı kaydırıldı)
        goToSection(currentSectionIndex.value + 1)
      } else {
        // Aşağı kaydırma: önceki section'a geç
        goToSection(currentSectionIndex.value - 1)
      }
  
      setTimeout(() => {
        isScrolling.value = false
      }, 1000)
    }
  
    // Değerleri sıfırla
    touchStartY.value = null
    touchEndY.value = null
  }
  
  /* --- Ortak Fonksiyon --- */
  // Belirtilen index'teki section'a yumuşak geçiş sağlayan fonksiyon
  const goToSection = (index) => {
    if (index < 0 || index >= sections.length) return
    currentSectionIndex.value = index
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }
  
  // Component DOM'a eklendiğinde event listener'ları ekle
  onMounted(() => {
    sections = document.querySelectorAll('section')
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })
  })
  
  // Component yok edilmeden önce event listener'ları kaldır
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  })
</script>

<style scoped>

</style>