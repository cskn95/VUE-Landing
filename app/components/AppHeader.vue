<script setup lang="ts">
const items = [{
  label: 'Ana Sayfa',
  to: '#',
}, {
  label: 'Hakkımızda',
  to: '#',
}, {
  label: 'İletişim',
  to: '#',
}]

const itemsDrop = [
  [{
  label: 'Ana Sayfa',
  click: () => {console.log('clicked')}
}], [{
  label: 'Hakkımızda',
  click: () => {console.log('clicked')}
}], [{
  label: 'İletişim',
  click: () => {console.log('clicked')}
}], [{
  label: 'Giriş Yap',
  click: () => {console.log('clicked')}
}]
]
</script>

<template>
  <header class="bg-white top-0 flex items-center lg:px-48 lg:py-5 py-5 px-5 lg:min-w-[1024px]">
    <div>
      <NuxtLink to="/">
        <NuxtImg
          src="/logo/MagazaPro_light.png"
          sizes="150px lg:200px"
        />
      </NuxtLink>
    </div>
    <!-- PC menü -->
    <nav class="flex items-center ml-auto">
      <div class="hidden lg:flex items-center space-x-12 ml-auto">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="text-slate-500 font-Montserrat font-normal link-with-underline"
        >
          {{ item.label }}
        </NuxtLink>
        <UButton size="lg" class="text-white font-Montserrat font-normal bg-slate-500 bg-opacity-80 hover:bg-opacity-100 hover:bg-slate-700">
          Giriş Yap
        </UButton>
      </div>
      <!-- Mobil menü -->
      <UDropdown :items="itemsDrop" mode="click" :popper="{ placement: 'bottom-start' }" class="lg:hidden z-50">
        <UButton size="xl" class="text-white bg-slate-500 font-Montserrat font-normal bg-opacity-80">
          <Icon name="lucide:align-justify" size="32px"/>
        </UButton>
      </UDropdown>
    </nav>
  </header>
</template>

<style>
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

</style>