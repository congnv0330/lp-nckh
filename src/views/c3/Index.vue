<template>
  <div>
    <h2 class="text-2xl font-semibold text-center md:text-left">Chương 3</h2>
    <p class="text-gray-700 text-center md:text-left">Bài toán vận tải</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      <div class="bg-white shadow-md p-5">
        <div class="flex mb-4">
          <label class="text-gray-700 font-bold my-auto mr-2" for="phat">
            Phát:
          </label>
          <div class="flex-1">
            <input id="phat" type="text" v-model="input.phat" placeholder="Thu ..." title="Tập thu" class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
        </div>
        <div class="flex mb-4">
          <label class="text-gray-700 font-bold my-auto mr-3" for="thu">
            Thu:
          </label>
          <div class="flex-1">
            <input id="thu" type="text" v-model="input.thu" placeholder="Phát ..." title="Tập phát" class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="matrix">
            Ma trận chi phí:
          </label>
          <textarea id="matrix" v-model="input.matrix" placeholder="Ma trận ..." title="Ma trận" class="block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow" rows="4"></textarea>
        </div>
        <div class="text-center md:text-left">
          <button @click="tayBac" class="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2">
            Tây bắc
          </button>
          <button @click="cucTieu" class="bg-green-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2">
            Cực tiểu
          </button>
          <button @click="reset" class="bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2">
            Xóa
          </button>
        </div>
      </div>
      <div v-if="hasSubmit" class="bg-white shadow-md p-5">
        <template v-if="output">
          <h1 class="text-lg font-semibold mb-4">Bài toán có lời giải</h1>
          <div class="overflow-auto">
            <table class="table-fixed text-center w-full">
              <tbody>
                <tr>
                  <td class="border p-1">
                    <table class="w-full" style="background:linear-gradient(to top right,white 49%,#e2e8f0,white 51%)">
                      <tbody>
                        <tr>
                          <td></td>
                          <td>Thu</td>
                        </tr>
                        <tr>
                          <td>Phát</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <template v-for="t in output.thu">
                    <td :key="t * 2.1" class="border px-4 py-2">{{ t }}</td>
                  </template>
                </tr>
                <template v-for="(p, index) in output.phat">
                    <tr :key="p * 2.2">
                      <td class="border px-4 py-2">{{ p }}</td>
                      <template v-for="(i, idx) in output.cp[index]">
                        <td :key="idx * p * 2.3" class="border">
                          <table class="table-fixed w-full">
                            <tbody>
                              <tr>
                                <td class="w-50">{{ i }}</td>
                                <td class="w-50"></td>
                              </tr>
                              <tr>
                                <td class="w-50"></td>
                                <td class="border-t border-l w-50">{{ output.pp[index][idx] }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </template>
                    </tr>
                </template>
              </tbody>
            </table>
          </div>
        </template>
        <template v-else>
          <h1 class="text-lg font-semibold mb-4">Bài toán không có lời giải</h1>
        </template>
      </div>
    </div>
    <div class="text-center md:text-left">
      <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'c2' }">
        &larr; Chương trước
      </router-link>
      <router-link class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" :to="{ name: 'home' }">
        Trang chủ &rarr;
      </router-link>
    </div>
  </div>
</template>

<script>
import c3 from '@/core/c3'

export default {
  name: 'C3Index',
  data () {
    return {
      input: {
        phat: '',
        thu: '',
        matrix: ''
      },
      hasSubmit: false,
      isHidden: true,
      output: null
    }
  },
  methods: {
    tayBac () {
      if (this.validate()) {
        this.hasSubmit = true
        this.output = c3.tayBac(this.input.phat, this.input.thu, this.input.matrix)
      } else {
        this.$toasted.show('Không đủ dữ kiện đầu vào!')
        // console.log('Không đủ dữ kiện đầu vào!')
      }
    },
    cucTieu () {
      if (this.validate()) {
        this.hasSubmit = true
        this.output = c3.cucTieu(this.input.phat, this.input.thu, this.input.matrix)
      } else {
        this.$toasted.show('Không đủ dữ kiện đầu vào!')
        // console.log('Không đủ dữ kiện đầu vào!')
      }
    },
    validate () {
      return this.input.phat.trim() !== '' && this.input.thu.trim() !== '' && this.input.matrix.trim() !== ''
    },
    reset () {
      this.input.phat = this.input.thu = this.input.matrix = ''
    }
  }
}
</script>

<style>

</style>
