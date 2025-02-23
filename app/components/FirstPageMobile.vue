<template>
  <div class="flex flex-col items-center justify-center px-5 pt-5 lg:hidden">
    <p class="font-Montserrat font-bold text-3xl lg:text-4xl">İşletmenizin tüm yönetimi tek platformda!</p>
    <p class="max-w-[700px] text-slate-500 text-lg pt-7">Sektörünüzde öne çıkmak ve rekabette fark yaratmak için güçlü bir satış yönetimi kilit rol oynar. Mağaza Pro ile perakende satış sürecinizi ve mağaza operasyonlarınızı belirli bir standarda oturtarak optimize edebilir</p>

    <div class="flex items-center justify-center pt-7 gap-5">
      <el-card style="max-width: 200px; height: 300px;">
        <template #header>
          <div class="card-header font-Montserrat flex flex-col">
            <Icon name="lucide:package-search" size="24"></Icon>
            <span class="pt-2 font-semibold">Stok Yönetimi</span>
          </div>
        </template>
        <p class="font-Inter">Yeni ürünler ekleyin, var olanları güncelleyin ve her zaman doğru envanterle işinizi yönetin.</p>
      </el-card>
      
      <el-card style="max-width: 200px; height: 300px;">
        <template #header>
          <div class="card-header font-Montserrat flex flex-col">
            <Icon name="lucide:shopping-cart" size="24"></Icon>
            <span class="pt-2 font-semibold">Satış Takibi</span>
          </div>
        </template>
        <p class="font-Inter">Satışlarınızı izlemek, raporlamak ve analiz etmek için ihtiyacınız olan her şey tek bir yerde.</p>
      </el-card>
    </div>

    <el-divider style="max-width: 600px;"/>
    
    <div class="flex items-center justify-center gap-5">
      <el-card style="max-width: 200px; height: 300px;">
        <template #header>
          <div class="card-header font-Montserrat flex flex-col">
            <Icon name="lucide:receipt-text" size="24"></Icon>
            <span class="pt-2 font-semibold">Fatura Yönetimi</span>
          </div>
        </template>
        <p class="font-Inter">Faturalarınızı birkaç adımda oluşturun ve tüm ödeme bilgilerini tek bir platformda yönetin.</p>
      </el-card>
      
      <el-card style="max-width: 200px; height: 300px;">
        <template #header>
          <div class="card-header font-Montserrat flex flex-col">
            <Icon name="lucide:chart-line" size="24"></Icon>
            <span class="pt-2 font-semibold">Detaylı İstatistikler</span>
          </div>
        </template>
        <p class="font-Inter">Tüm kritik metrikleri tek ekranda izleyin, stratejik kararlarınızı güvenle alın.</p>
      </el-card>
    </div>

    <el-divider style="max-width: 600px;"/>

    <div class="flex items-center justify-center gap-5">
      <el-card style="max-width: 200px; height: 300px;">
        <template #header>
          <div class="card-header font-Montserrat flex flex-col">
            <Icon name="lucide:clipboard-list" size="24"></Icon>
            <span class="pt-2 font-semibold">Sevkiyat Listesi</span>
          </div>
        </template>
        <p class="font-Inter">Sevkiyatlarınızı gerçek zamanlı olarak takip edin, tüm süreçleri şeffaf ve düzenli bir şekilde yönetin.</p>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>