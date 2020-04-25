<template>
  <div>
    <h2 class="text-2xl font-semibold text-center md:text-left">Chương 4:</h2>
    <p class="text-gray-700 text-center md:text-left">Phương án sơ đồ mạng</p>
    <div class="text-center md:text-left">
      <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'c3' }">
        &larr; Chương trước
      </router-link>
      <router-link class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" :to="{ name: 'home' }">
        Về trang chủ &rarr;
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'C4Index'
}
</script>

<style>

</style>
