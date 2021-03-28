import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        language: 'ru',
        count:0,
    },
    mutations:{
        setLanguage(state, lang){
            state.language = lang
        },
        incrementCount(state){
            state.count++
        },
        decrementCount(state){
            state.count--
        }
    }
})

export default store