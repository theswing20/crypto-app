import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: '',
    selectedCrypto: '',
    intervalDate: '',
    charts: ''
  },
  getters: {
    charts: (state => {
      let chartsData = state.charts,
          months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          arr = [['weeks', state.selectedCrypto]]

      if(chartsData) {
        chartsData.data.forEach(item => {
          let date = new Date(item.date)

          arr.push([`${months[date.getMonth()]} ${date.getDate()}`, parseInt(item.priceUsd)])
        })
      }

      return arr
    })
  },
  mutations: {
    selAllCoins(state, payload) {
      state.coins = payload
    },

    setCharts(state, payload){
      state.charts = payload
    },

    setIntervalDate(state, payload) {
      state.intervalDate = payload
    },

    setSelectedCrypto(state, payload) {
      state.selectedCrypto = payload
    }
  },
  actions: {
    getAllCoins({commit}) {
        axios.get( 'https://api.coincap.io/v2/assets')
          .then((res) => {
            commit('selAllCoins', res.data)
          })
          .catch((err) => {
            console.log(err)
          })
    },

    getSelectedCoin({commit, state}, crytoName) {
      axios.get(`https://api.coincap.io/v2/assets/${crytoName}/history?interval=d1&start=${state.intervalDate.weekAgo}&end=${state.intervalDate.currentDate}`)
          .then((res) => {
            commit('setCharts', res.data)
            commit('setSelectedCrypto', crytoName)
          })
          .catch((err) => {
            console.log(err)
          })
    },

    calculateIntervalDate({commit}) {
      let currentDate = new Date(),
          weekAgo = new Date(),
          obj

      weekAgo.setDate(weekAgo.getDate() - 7)

      obj = {
        currentDate: parseInt(currentDate.getTime()),
        weekAgo: parseInt(weekAgo.getTime())
      }

      commit('setIntervalDate', obj)
    }
  },
  modules: {
  }
})
