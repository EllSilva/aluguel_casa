import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import c_rodape from './components/rodape.js'
Vue.component('c-rodape', c_rodape)


import page_cadastro from './view/cadastro/home.js'
Vue.component('p-cadastro', page_cadastro)

import page_login from './view/login/home.js'
Vue.component('p-login', page_login)

import page_anuciar from './view/anuciar/home.js'
Vue.component('p-anuciar', page_anuciar)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_detalhe from './view/detalhe/home.js'
Vue.component('p-detalhe', page_detalhe)

import page_perfil from './view/perfil/home.js'
Vue.component('p-perfil', page_perfil)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

Vue.use(Router)

const routes = [
    { path: '/anuciar', component: { template: '<p-anuciar></p-anuciar>' } }, 
    { path: '/', component: { template: '<p-home></p-home>' } }, 
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/detalhe', component: { template: '<p-detalhe></p-detalhe>' } },
    { path: '/perfil', component: { template: '<p-perfil></p-perfil>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } }
    
]



const router = new Router({ routes })

new Vue({
    router,
    data: {
        jms: "joaquim"
    },

  
}).$mount('#app')

;(async () => { })()