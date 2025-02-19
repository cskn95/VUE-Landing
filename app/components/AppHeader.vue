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
  <header class="bg-gradient-to-r from-[rgba(168,85,247,0.30)] to-[rgba(59,130,246,0.30)]  top-0 w-full flex items-center lg:px-72 lg:py-5 py-5 px-5 lg:min-w-[1366px]">
    <div>
      <NuxtLink to="/">
        <NuxtImg
          src="/logo/MagazaPro_Dark.png"
          sizes="150px lg:200px"
        />
      </NuxtLink>
    </div>
    <nav class="flex items-center ml-auto">
      <div class="hidden lg:flex items-center space-x-12 ml-auto">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="text-white hover:text-xl font-Montserrat font-normal"
        >
          {{ item.label }}
        </NuxtLink>
        <UButton size="lg" class="text-white font-Montserrat font-normal bg-blue-900 bg-opacity-80 hover:bg-opacity-100 hover:bg-blue-500">
          Giriş Yap
        </UButton>
      </div>
      <UDropdown :items="itemsDrop" mode="click" :popper="{ placement: 'bottom-start' }" class="lg:hidden z-50">
        <UButton color="violet" size="xl" class="text-white font-Montserrat font-normal bg-opacity-80">
          <Icon name="lucide:align-justify" size="32px"/>
        </UButton>
      </UDropdown>
    </nav>
  </header>
</template>
