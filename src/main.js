import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/lib/font-awesome.min.css";
// import "./assets/css/lib/themify-icons.css";
//import "./assets/css/lib/bootstrap.min.css";
// import "./assets/css/lib/menubar/sidebar.css";
// import "./assets/css/lib/helper.css";
// import "./assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
