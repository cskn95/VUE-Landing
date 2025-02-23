<template>
  <!-- Tüm section'ları saran container -->
  <div>
    <!-- İlk section -->
    <section class="bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <div class="flex flex-col justify-center items-center max-lg:px-5 max-lg:items-start z-10">
        <div class="font-Montserrat font-bold text-3xl lg:text-7xl bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent py-2">
          <p class="pb-2 font-Montserrat font-bold text-xl lg:text-4xl bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            <span class="italic">MağazaPro</span> güvencesiyle,
          </p>
          İşletmenizi dijital dünyaya taşıyın
        </div>
        <p class="font-Inter font-normal text-base lg:text-xl pt-3 max-w-[900px] lg:text-center bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent py-2">
          Kolay, hızlı ve güvenilir! MağazaPro ile verimliliğinizi arttırın; satıştan stoğa, raporlamadan müşteri yönetimine kadar tüm süreçleri tek bir platformdan dünyanın neresinde olursanız olun rahatlıkla yönetin.
        </p>
      </div>
      <p class="text-slate-500 text-center pt-10 lg:pt-10">
        Devam etmek için aşağı kaydırın. <br>
        <Icon name="lucide:arrow-down" class="text-center text-slate-500 w-6 h-6 animate-bounce mt-3 lg:mt-5" />
      </p>
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
