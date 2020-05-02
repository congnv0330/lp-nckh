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
            <input id="fx" type="text" v-model="input.fx" title="Phương trình F(x)" class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
          <div class="relative">
            <select v-model="input.type" title="Bài toán" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <textarea v-model="input.matrix" title="Ma trận" class="block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow mb-4" rows="4"></textarea>
        <div class="flex mb-4">
          <label class="text-gray-700 font-bold my-auto mr-2" for="fxRB">
            Rằng buộc
          </label>
          <div class="flex-1">
            <input id="fxRB" type="text" v-model="input.fxRB" title="Rằng buộc ..." class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow">
          </div>
        </div>
        <div class="text-center md:text-left">
          <button @click="submit" class="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2">
            Thực hiện
          </button>
          <button @click="reset" class="bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2">
            Xóa
          </button>
        </div>
      </div>
      <div v-if="hasSubmit" class="bg-white shadow-md p-5 lg:col-span-2">
        <template v-if="output.answer.success">
          <h1 class="text-lg font-semibold">Bài toán có lời giải</h1>
          <hr class="my-4">
          <p class="mb-3">Bảng đơn hình</p>
          <div class="overflow-auto">
            <table class="table-auto text-center w-full mb-5">
                <thead>
                  <tr>
                    <th class="border px-4 py-2">Hệ số C<sub>i</sub></th>
                    <th class="border px-4 py-2">Ẩn cơ sở</th>
                    <th class="border px-4 py-2">Phương án</th>
                    <template v-for="x in output.nX">
                      <th class="border px-4 py-2" :key="'th' + x">x<sub>{{ x }}</sub></th>
                    </template>
                  </tr>
                </thead>
                <template v-for="(step, index) in output.steps">
                    <tbody :key="index" class="border">
                      <template v-for="(row, i) in step">
                        <tr :key="'row' + i">
                          <template v-if="i < output.nLine">
                            <template v-for="(val, j) in row">
                              <td class="border-l border-r px-4 py-2" :key="'td' + j + '-' + i">
                                <div v-if = "j === 1">
                                  x<sub>{{ val }}</sub>
                                </div>
                                <div v-else>
                                  {{ val }}
                                </div></td>
                            </template>
                          </template>
                          <template v-else>
                              <td class="border px-4 py-2"></td>
                              <td class="border px-4 py-2"></td>
                              <td class="border px-4 py-2"></td>
                              <template v-for="(val, j) in row">
                                <td class="border px-4 py-2" :key="'td_' + j + '-' + i">
                                  <div v-if = "j === 1">
                                  x<sub>{{ val }}</sub>
                                </div>
                                <div v-else>
                                  {{ val }}
                                </div></td>
                              </template>
                          </template>
                        </tr>
                      </template>
                    </tbody>
                </template>
            </table>
            <div>
              <p class="mb-3">Bài toán có patu là:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p><span class="font-semibold">F(X*)</span> = {{ output.answer.result.fx }}</p>
                <p><span class="font-semibold">X*</span> = ({{ output.answer.result.x.join(', ') }})</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h1 class="text-lg">Không có patu</h1>
        </template>
      </div>
    </div>
    <div class="text-center md:text-left">
      <router-link class="align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5" :to="{ name: 'home' }">
        &larr; Về trang chủ
      </router-link>
      <router-link class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" :to="{ name: 'c2' }">
        Chương kế &rarr;
      </router-link>
    </div>
  </div>
</template>

<script>
import c1 from '@/core/c1'

export default {
  name: 'C1Index',
  data () {
    return {
      input: {
        fx: '1 -1 -3',
        matrix: '2 -1 1 <= 1\n4 -2 1 >= -2\n3 0 1 <= 5',
        fxRB: '1 2 3 >= 0',
        type: 'min'
      },
      hasSubmit: false,
      output: {}
    }
  },
  methods: {
    submit () {
      if (this.input.fx.trim() !== '' && this.input.matrix.trim() !== '' && this.input.fxRB.trim() !== '') {
        this.hasSubmit = true
        this.output = c1(this.input.fx, this.input.matrix, this.input.fxRB, this.input.type)
        // console.log(this.output)
      } else {
        this.$toasted.show('Không đủ dữ kiện đầu vào!')
        // console.log('Không đủ dữ kiện đầu vào!')
      }
    },
    reset () {
      this.input.fx = this.input.matrix = this.input.fxRB = ''
      this.input.type = 'min'
    }
  }
}
</script>

<style>

</style>
