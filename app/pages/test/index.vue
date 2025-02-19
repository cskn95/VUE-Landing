<template>
  <div v-auto-animate :class="{'translate-y-[-100%]': isScrolled}" class="fixed top-0 left-0 w-full h-screen bg-blue-500 flex justify-center items-center transition-transform duration-500 ease-out">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold">Landing Page İçeriği</h1>
      <p class="mt-4">Sayfa kaydırıldığında bu bölüm kaybolacak ve yer açılacak.</p>
    </div>
  </div>

  <div class="mt-[100vh] h-screen p-8">
    <!-- Landing Page içeriği burada olacak -->
    <h2 class="text-3xl font-semibold">Landing Page</h2>
    <p>Burada sayfa içeriği olacak.</p>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'TestIndex',
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      // Sayfa kaydırıldığında, 50px'den fazla kaydırılmışsa div kaybolur
      isScrolled.value = window.scrollY > 50;
    };

    const handleTouchMove = (event) => {
      // Sayfa kaydırıldığında, dokunmatik olay ile kaydırma yapılırsa
      const touch = event.touches[0];
      isScrolled.value = touch.clientY > 50;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    });

    return {
      isScrolled
    };
  }
}
</script>

<style scoped>
/* Scoped stiller burada gerekmez çünkü TailwindCSS kullanıyoruz */
</style>
