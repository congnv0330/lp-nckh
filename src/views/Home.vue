<template>
  <div>
    <h1 class="text-2xl text-center md:text-3xl md:text-left font-semibold">Quy hoạch tuyến tính</h1>
    <p class="text-center md:text-left text-gray-700 mb-5">
      Quy hoạch tuyến tính là bài toán tối ưu hóa, trong đó hàm mục tiêu và các điều kiện ràng buộc đều là tuyến tính.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <template v-for="(item, index) in items">
        <div :key="index" class="bg-white rounded shadow-md">
          <div class="p-5">
            <div class="font-semibold text-xl">{{ item.title }}</div>
            <p class="text-gray-700 text-base mb-4">{{ item.description }}</p>
            <router-link :to="{ name: 'c1' }" class="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white py-2 px-4 rounded">
              Xem &raquo;
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          title: 'Chương 1',
          description: 'Bài toán quy hoạch tuyến tính',
          route: 'c1'
        },
        {
          title: 'Chương 2',
          description: 'Bài toán đối ngẫu',
          route: ''
        },
        {
          title: 'Chương 3',
          description: 'Bài toán vận tải',
          route: ''
        },
        {
          title: 'Chương 4',
          description: 'Phương án sơ đồ mạng',
          route: ''
        }
      ]
    }
  }
}
</script>
