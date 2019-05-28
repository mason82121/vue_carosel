(function(Vue) {
 
  let data = {
    index: 0,
    menu: [
      { type: '開胃餐點', title: '沁涼水蜜桃醋', link: 'javascript:;' },
      { type: '風味沙拉', title: '田園凱薩沙拉', link: 'javascript:;' },
      { type: '總匯拼盤', title: '豪華海鮮拼盤', link: 'javascript:;' },
      { type: '主廚推薦', title: '天使紅蝦義大利麵', link: 'javascript:;' },
      { type: '精選甜點', title: '起司藍莓蛋糕', link: 'javascript:;' }
    ]
  }

  let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
      today() {
        return this.menu[this.index]
      },
      total() {
        return this.menu.length
      }
    },
    methods: {
      changeIndex(change) {
        this.index = (this.index + change + this.total) % this.total
      }
    }
  })
})(Vue);