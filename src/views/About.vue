<template>
  <div class="text-left">
    <h1 class="text-2xl font-semibold mb-2">Thông tin trang web</h1>
    <p class="text-gray-700 mb-5">Trang web được phát triển bởi nhóm 3 thành viên khoa CNTT Trường Đại học Sư Phạm TPHCM</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      <template v-for="(member, index) in members">
        <div :key="index" class="bg-white rounded shadow-md p-4">
            <p class="font-semibold text-xl mb-4">{{ member.name }}</p>
            <div class="border-l-2 border-gray-500 bg-gray-100 pl-4 py-2">
              <p class="text-gray-700 text-base mb-2">{{ member.description }}</p>
              <p class="text-gray-700 text-base"><span class="font-semibold">MSSV:</span> {{ member.code }}</p>
            </div>
        </div>
      </template>
    </div>
    <router-link :to="{ name: 'home' }" class="font-semibold text-blue-500 hover:text-blue-700">
      &larr; Về trang chủ
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      members: [
        {
          code: '44.01.104.061',
          name: 'Huỳnh Đức Cường',
          description: 'Trưởng nhóm, phát triển thuật toán'
        },
        {
          code: '44.01.104.055',
          name: 'Trần Thanh Hùng',
          description: 'Thiết kế, phát triển thuật toán'
        },
        {
          code: '44.01.104.055',
          name: 'Nguyễn Văn Công',
          description: 'Thiết kế trang web'
        }
      ]
    }
  }
}
</script>
