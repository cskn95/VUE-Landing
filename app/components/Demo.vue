<template>
  <div class="flex flex-col items-center w-full lg:pt-10">
    <!-- 1. Kart Bloğu -->
    <div class="w-full max-w-6xl mx-auto px-4 flex items-center justify-end">
      <div class="dots w-40 h-96 mr-12"></div>
      <div class="rainbow-border-wrapper mr-2 shadow-md">
        <div class="card-inner">
          <el-card>
            <template #header>
              <div class="card-header">
                <span class="font-Montserrat font-semibold text-slate-700">
                  Ücretsiz Deneme Sürümü Edinin
                </span>
              </div>
            </template>
            <div class="flex items-center justify-start">
              <div class="flex flex-col max-w-[512px]">
                <p class="font-Montserrat font-semibold text-3xl">
                  Mağaza Yönetim Sistemi Nedir?
                </p>
                <p class="font-Inter py-5">
                  İşletmenizi büyütmek ve verimliliği artırmak için Mağaza Yönetim
                  Sistemi ile tanışın. Stok takibi, satış raporları, müşteri yönetimi
                  ve daha fazlası için tek bir platform yeterli! Tüm mağaza
                  süreçlerinizi düzenleyin, zamandan tasarruf edin ve büyümeye odaklanın.
                </p>
                <el-button
                  class="static-rainbow"
                  type="primary"
                  color="#64748b"
                  size="large"
                >
                  Ücretsiz Demomuzu Deneyin
                </el-button>
              </div>
              <NuxtImg src="/mys.png" width="400" />
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 2. Kart Bloğu -->
    <div class="w-full max-w-6xl mx-auto px-4 flex items-center justify-start mt-10">
      <div class="rainbow-border-wrapper" style="margin-top: 2.5rem;">
        <div class="card-inner">
          <el-card>
            <template #header>
              <div class="card-header">
                <span class="font-Montserrat font-semibold text-slate-700">
                  HEMEN TEKLİF ALIN
                </span>
              </div>
            </template>
            <div class="flex items-center">
              <NuxtImg src="/mys2.png" width="400" />
              <div class="flex flex-col max-w-[512px]">
                <p class="font-Montserrat font-semibold text-3xl">
                  Detaylı Bilgi İçin İletişime Geçin!
                </p>
                <p class="font-Inter py-5">
                  İşletmenizin verimini arttırmak ve dünyanın neresinde olursanız olun
                  7/24 rahatlıkla yönetimi elinizde tutmak için hemen satış temsilcimizle
                  iletişime geçin, güncel fiyat ve detaylı ürün bilgisi alın.
                </p>
                <el-button
                  class="static-rainbow"
                  type="primary"
                  color="#64748b"
                  size="large"
                >
                  Satış Temsilcimizle İletişime Geçin
                </el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="dots w-40 h-96 ml-12" style="margin-top: 2.5rem;"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoSection'
})
</script>

<style>
.rainbow-border-wrapper {
  display: inline-block;
  padding: 2px;
  border-radius: 8px;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 400%;
  animation: rainbowRotate 10s linear infinite;
}

.card-inner {
  border-radius: 6px;
  background: white;
  overflow: hidden;
}

@keyframes rainbowRotate {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 40% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 60% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (min-width: 1024px) {
  .static-rainbow:hover {
    border: 2px solid;
    border-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1;
    border-radius: 8px;
    background-color: #64748b;
  }
}

.dots {
  background: white;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  background-repeat: repeat;
  transition: background-size 0.3s ease, background-position 0.3s ease;
}

.dots:hover {
  background-size: 44px 44px;
  background-position: -21px -21px;
}
</style>
