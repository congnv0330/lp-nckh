<template>
  <div>
    <h2 class="text-2xl font-semibold text-center md:text-left">Chương 1:</h2>
    <p class="text-gray-700 text-center md:text-left">Bài toán quy hoạch tuyến tính</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      <div class="bg-white shadow-md p-5">
        <div class="flex mb-4">
          <label class="text-gray-700 font-bold my-auto" for="fx">
            F(x)
          </label>
          <div class="flex-1 mx-2">
            <input id="fx" type="text" v-model="fx" title="Phương trình F(x)" class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
          <div class="relative">
            <select v-model="type" title="Bài toán" class="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <textarea v-model="matrix" title="Ma trận" class="block appearance-none border border-gray-500 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow mb-4" rows="4"></textarea>
        <div class="text-center md:text-left">
          <button @click="submit" class="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2">
            Thực hiện
          </button>
          <button @click="reset" class="bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2">
            Xóa
          </button>
        </div>
      </div>
      <div class="bg-white shadow-md p-5 lg:col-span-2">

      </div>
    </div>
    <div class="text-center md:text-left">
      <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'home' }">
        &larr; Về trang chủ
      </router-link>
      <router-link class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" :to="{ name: 'home' }">
        Chương kế &rarr;
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'C1Index',
  data () {
    return {
      fx: '',
      matrix: '',
      type: 'min'
    }
  },
  methods: {
    submit () {
      console.log(this.fx)
    },
    reset () {
      this.fx = this.matrix = ''
      this.type = 'min'
    }
  }
}
</script>

<style>

</style>
