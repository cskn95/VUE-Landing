<template>
  <!-- Tüm section'ları saran container -->
  <div>
    <!-- İlk section -->
    <section class="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <Hero />
    </section>

    <!-- İkinci section -->
    <section key="faydalar" class="flex flex-col bg-[#f5f5f7ff]">
      <FirstPage />
      <FirstPageMobile />
    </section>

    <!-- Üçüncü section -->
    <section key="iletisim" class="flex flex-col bg-[#f5f5f7ff]">
      <Demo />
    </section>
  </div>
</template>

<script setup>
defineOptions({
  name: 'HomePage'
})

</script>
