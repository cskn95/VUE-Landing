<template>
  <div class="flex flex-col items-center justify-center max-lg:px-5 max-lg:items-start h-screen">
    <p class="font-Montserrat font-bold text-3xl lg:text-4xl">İşletmenizin tüm yönetimi tek platformda!</p>
    <p class="max-w-[700px] text-slate-500 text-lg pt-7">Sektörünüzde öne çıkmak ve rekabette fark yaratmak için güçlü bir satış yönetimi kilit rol oynar. Mağaza Pro ile perakende satış sürecinizi ve mağaza operasyonlarınızı belirli bir standarda oturtarak optimize edebilir</p>

    <div class="flex items-center justify-center pt-7 gap-5">
      <el-card style="max-width: 200px; height: 250px;">
        <template #header>
          <div class="card-header">
            <span>Stok Yönetimi</span>
          </div>
        </template>
        <p>Yeni ürünler ekleyin, var olanları güncelleyin ve her zaman doğru envanterle işinizi yönetin.</p>
      </el-card>
      <el-divider direction="vertical" style="height: 250px;"/>
      <el-card style="max-width: 200px; height: 250px;">
        <template #header>
          <div class="card-header">
            <span>Satış Takibi</span>
          </div>
        </template>
        <p>Satışlarınızı izlemek, raporlamak ve analiz etmek için ihtiyacınız olan her şey tek bir yerde.</p>
      </el-card>
      <el-divider direction="vertical" style="height: 250px;"/>
      <el-card style="max-width: 200px; height: 250px;">
        <template #header>
          <div class="card-header">
            <span>Sevkiyat Listesi</span>
          </div>
        </template>
        <p>Sevkiyatlarınızı gerçek zamanlı olarak takip edin, tüm süreçleri şeffaf ve düzenli bir şekilde yönetin.</p>
      </el-card>
    </div>
    <el-divider style="max-width: 600px;"/>
    <div class="flex items-center justify-center gap-5">
      <el-card style="max-width: 200px; height: 250px;">
        <template #header>
          <div class="card-header">
            <span>Fatura Yönetimi</span>
          </div>
        </template>
        <p>Faturalarınızı birkaç adımda oluşturun ve tüm ödeme bilgilerini tek bir platformda yönetin.</p>
      </el-card>
      <el-divider direction="vertical" style="height: 250px;"/>
      <el-card style="max-width: 200px; height: 250px;">
        <template #header>
          <div class="card-header">
            <span>Detaylı İstatistikler</span>
          </div>
        </template>
        <p>Tüm kritik metrikleri tek ekranda görüntüleyerek stratejik kararlarınızı güvenle alın.</p>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>