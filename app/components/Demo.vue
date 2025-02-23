<template>
  <div class="flex flex-col items-center justify-center min-w-[1024] lg:pt-20 px-20">
    <el-card class="rainbow-card">
      <template #header>
        <div class="card-header">
          <span class="font-Montserrat font-semibold text-slate-700">Ücretsiz Deneme Sürümü Edinin</span>
        </div>
      </template>
      <div class="flex items-center justify-start">
        <div class="flex flex-col max-w-[512px]">
          <p class="font-Montserrat font-semibold text-3xl">Mağaza Yönetim Sistemi Nedir?</p>
          <p class="font-Inter py-5">İşletmenizi büyütmek ve verimliliği artırmak için Mağaza Yönetim Sistemi ile tanışın. Stok takibi, satış raporları, müşteri yönetimi ve daha fazlası için tek bir platform yeterli! Tüm mağaza süreçlerinizi düzenleyin, zamandan tasarruf edin ve büyümeye odaklanın.</p>
          <el-button type="primary" color="#64748b" size="large">Ücretsiz Demomuzu Deneyin</el-button>
        </div>
        <NuxtImg 
        src="/mys.png"
        width="400" />
      </div>
    </el-card>

    <el-card class="rainbow-card" style="margin-top: 2.5rem;">
      <template #header>
        <div class="card-header">
          <span class="font-Montserrat font-semibold text-slate-700">HEMEN TEKLİF ALIN</span>
        </div>
      </template>
      <div class="flex items-center">
        <NuxtImg 
        src="/mys2.png"
        width="400" />
        <div class="flex flex-col max-w-[512px]">
          <p class="font-Montserrat font-semibold text-3xl">Detaylı Bilgi İçin İletişime Geçin!</p>
          <p class="font-Inter py-5">İşletmenizin verimini arttırmak ve dünyanın neresinde olursanız olun 7/24 rahatlıkla yönetimi elinizde tutmak için hemen satış temsilcimizle iletişime geçin, güncel fiyat ve detaylı ürün bilgisi alın.</p>
          <el-button type="primary" color="#64748b" size="large">Satış Temsilcimizle İletişime Geçin</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoSection'
})
</script>

<style>
.rainbow-card {
  border: 2px solid; /* Çerçeve kalınlığı */
  border-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1;
  border-radius: 8px; /* İsteğe bağlı: yuvarlatılmış kenarlar */
}
</style>