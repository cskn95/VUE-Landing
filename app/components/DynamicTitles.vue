<template>
  <div class="min-h-screen bg-[#f5f5f7] p-8">
    <!-- Üst Kısım: Tanıtıcı Başlık -->
    <div class="flex w-full">
      <!-- Başlık Listesi -->
      <div class="flex flex-col items-start space-y-4 max-w-[512px]">
        <p class="text-base text-black font-bold font-Montserrat mb-2">
        İşletmenizin tüm yönetimi tek platformda!
        </p>
        <p class="text-2xl font-Inter text-slate-500 ">
          Sektörünüzde öne çıkmak ve rekabette fark yaratmak için güçlü bir satış yönetimi kilit rol oynar.
          Mağaza Pro ile perakende satış sürecinizi ve mağaza operasyonlarınızı belirli bir standarda
          oturtarak optimize edebilirsiniz.
        </p>
        <NuxtLink
        v-for="(service, index) in services"
        :key="service.title"
        @click="activeIndex = index"
        class="cursor-pointer inline-block text-slate-500 text-4xl font-Montserrat font-normal link-with-underline"
        :class="{ active: index === activeIndex }"
        >
          {{ service.title }}
        </NuxtLink>
      </div>

      <!-- Seçili Başlık İçeriği (Opsiyonel) -->
      <transition name="fade">
        <div
        v-if="services[activeIndex]"
        class="w-full bg-white p-4 rounded shadow text-gray-800"
        >
          <h2 class="text-2xl font-bold mb-2">
            {{ services[activeIndex].title }}
          </h2>
          <p class="mb-4">
            {{ services[activeIndex].description }}
          </p>
          <img
          :src="services[activeIndex].image"
          alt="Service Image"
          class="max-w-sm"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Servis verileri
const services = [
  {
    title: 'Malware Analysis',
    description: 'Detect and remove malicious software from your systems.',
    image: '/images/malware.png'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your data and infrastructure from digital threats.',
    image: '/images/cybersecurity.png'
  },
  {
    title: 'Networking',
    description: 'Optimize and secure your network infrastructure.',
    image: '/images/network.png'
  },
  {
    title: 'Pentesting',
    description: 'Proactively identify vulnerabilities with penetration testing.',
    image: '/images/pentesting.png'
  },
  {
    title: 'Firewall',
    description: 'Implement robust firewall solutions to protect your perimeter.',
    image: '/images/firewall.png'
  },
  {
    title: 'SOC',
    description: '24/7 security operations center to monitor and respond to threats.',
    image: '/images/soc.png'
  }
]

// Aktif (seçili) başlık index'i
const activeIndex = ref(0)
</script>

<style scoped>
/* Fade geçişi */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
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

/* Hover durumu */
.link-with-underline:hover::after {
  width: 100%;
  left: 0;
}

/* Aktif linkte alt çizgiyi kalıcı göster */
.link-with-underline.active::after {
  width: 100%;
  left: 0;
}
</style>
