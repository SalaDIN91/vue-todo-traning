import Vue from 'vue';

export const store = Vue.observable({
    lang: 'ru'
});

export const mutations = Vue.observable({
    setLang(lang){
        store.lang = lang
    }
});