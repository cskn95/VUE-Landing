<template>
  <div class="min-h-screen bg-[#f5f5f7] p-8">
    <!-- Üst Kısım: Tanıtıcı Başlık -->
    <div class="flex w-full">
      <!-- Başlık Listesi -->
      <div class="flex flex-col items-start max-w-[512px]">
        <p class="text-base text-slate-500 font-bold font-Montserrat">
          İşletmenizin tüm yönetimi tek platformda!
        </p>
        <p class="text-2xl font-Inter mb-8 text-black">
          Sektörünüzde öne çıkmak ve rekabette fark yaratmak için güçlü bir satış yönetimi kilit rol oynar.
          Mağaza Pro ile perakende satış sürecinizi ve mağaza operasyonlarınızı belirli bir standarda
          oturtarak optimize edebilirsiniz.
        </p>
        <div class="flex flex-col items-start space-y-8">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.title"
            @click="activeIndex = index"
            class="cursor-pointer inline-block text-slate-700 text-4xl font-Montserrat font-normal link-with-underline"
            :class="{ active: index === activeIndex }"
          >
            {{ service.title }}
          </NuxtLink>
        </div>
      </div>

      <!-- Seçili Başlık İçeriği -->
      <div class="w-full p-4 text-slate-700">
        <!-- Genel fade geçişi: mode="out-in" kullanarak önce çıkış sonra giriş animasyonu sağlıyoruz -->
        <transition name="fade" mode="out-in">
          <div :key="activeIndex">
            <div class="relative inline-block">
              <!-- Resim için slide animasyonu -->
              <transition name="slide" mode="out-in">
                <NuxtImg 
                  :src="services[activeIndex].image" 
                  width="800px" 
                  class="rounded-full -mt-8 opacity-70"
                  :key="services[activeIndex].image"
                />
              </transition>
              <!-- Metin bloğu için slide animasyonu -->
              <transition name="slide" mode="out-in">
                <div 
                  class="absolute bg-slate-300 rounded-sm bottom-32 -left-24 py-4 px-10 text-black"
                  :key="services[activeIndex].title"
                >
                  <p class="text-2xl font-Montserrat font-bold mb-2">
                    {{ services[activeIndex].title }}
                  </p>
                  <p class="font-Inter text-xl mb-4 max-w-80">
                    {{ services[activeIndex].description }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Servis verileri
const services = [
  {
    title: 'Stok Yönetimi',
    description: 'Yeni ürünler ekleyin, var olanları güncelleyin ve her zaman doğru envanterle işinizi yönetin.',
    image: '/400.svg'
  },
  {
    title: 'Satış Takibi',
    description: 'Satışlarınızı izlemek, raporlamak ve analiz etmek için ihtiyacınız olan her şey tek bir yerde.',
    image: '/400.svg'
  },
  {
    title: 'Sevkiyat Listesi',
    description: 'Sevkiyatlarınızı gerçek zamanlı olarak takip edin, tüm süreçleri şeffaf ve düzenli bir şekilde yönetin.',
    image: '/400.svg'
  },
  {
    title: 'Fatura Yönetimi',
    description: 'Faturalarınızı birkaç adımda oluşturun ve tüm ödeme bilgilerini tek bir platformda yönetin.',
    image: '/400.svg'
  },
  {
    title: 'Detaylı İstatistikler',
    description: 'Tüm kritik metrikleri tek ekranda görüntüleyerek stratejik kararlarınızı güvenle alın.',
    image: '/400.svg'
  }
]

// Aktif (seçili) başlık index'i
const activeIndex = ref(0)
</script>

<style scoped>
/* Genel Fade Geçişi */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Geçişi */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Link alt çizgisi için temel stil */
.link-with-underline {
  position: relative;
  display: inline-block;
}

.link-with-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #64748b;
  transition: width 0.3s ease, left 0.3s ease;
}

.link-with-underline:hover::after {
  width: 100%;
  left: 0;
}

.link-with-underline.active::after {
  width: 100%;
  left: 0;
}
</style>
