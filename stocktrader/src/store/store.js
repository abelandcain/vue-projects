import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './module/stocks'
import portfolio from './module/portfolio'
Vue.use(Vuex)

export  const store=new  Vuex.Store({
modules:{
    stocks,
    portfolio
}


})