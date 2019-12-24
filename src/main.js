import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VModal from "vue-js-modal";
import VueRouter from 'vue-router';
import {routes} from './components/routers';
import vSelect from 'vue-select';

Vue.use(VueAxios, axios);
Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  dynamicDefaults: {
    foo: "foo"
  }
});
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

Vue.component('v-select', vSelect)

export const eventBus = new Vue({
  methods: {
    sendMyId(myID) {
      this.$emit("getMyId", myID);
    },
    elemScroll(elemId) {
      var elem = document.getElementById(elemId);
      var offset = document.getElementById("navbar-element").offsetHeight;
      if (elemId === "description-container") offset += 100;
      window.scrollTo({
        top: elem.offsetTop - offset - 30,
        behavior: "smooth"
      });
    }
  }
});


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
