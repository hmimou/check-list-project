<template>
  <div>
    <div class="body">
      <div class="container">
        <form @submit.prevent="createUser">
          <div class="row">
            <div class="inbox-head">
              <h2>
                Sign
                <p>up</p>
              </h2>
            </div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                v-model="userData.fullName"
                placeholder="Full Name"
              />
              <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input
                type="email"
                v-model="userData.email"
                placeholder="Email Adress"
              />
              <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon">
              <input
                type="password"
                v-model="userData.pswd"
                placeholder="Password"
              />
              <div class="input-icon"><i class="fa fa-key"></i></div>
            </div>
            <div class="row">
              <div class="input-group input-group-icon">
                <input type="checkbox" placeholder="Admin" />
                <select v-model="userData.role">
                  <option>Admin</option>
                  <option>Finance</option>
                  <option>IT engineer</option>
                </select>
                <div class="input-icon">
                  <i class="fa fa-briefcase"></i>
                </div>
              </div>
              <div class="col-half">
                <h4 style="padding: 0% 1">
                  <p>Date of Birth</p>
                </h4>
                <div class="input-group">
                  <div class="col-third">
                    <input
                      type="text"
                      v-model="userData.birthday"
                      placeholder="DD"
                    />
                  </div>
                  <div class="col-third">
                    <input
                      type="text"
                      v-model="userData.birthmonth"
                      placeholder="MM"
                    />
                  </div>
                  <div class="col-third">
                    <input
                      type="text"
                      v-model="userData.birthyear"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="button-15" role="button">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import { ref, reactive, torefs } from "vue";
// new Vue({
//   el: "#app",
//   data: {
//     form: {
//       fullName: "",
//       email: "",
//       pswd: "",
//       role: "",
//       birthday: "",
//       birthmonth: "",
//       birthyear: "",
//     },
//   },
// });
export default {
  name: "RegisterUserView",
  // setup() {
  //   const fullName = ref("");
  //   const state = reactive({
  //     fullName: "",
  //     email: "",
  //     pswd: "",
  //     role: "",
  //     birthday: "",
  //     birthmonth: "",
  //     birthyear: "",
  //   });
  //   return { fullName, ...torefs(state) };
  // },
  data() {
    return {
      userData: {
        fullName: "",
        email: "",
        pswd: "",
        role: "",
        birthday: "",
        birthmonth: "",
        birthyear: "",
      },
    };
  },
  methods: {
    createUser() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.userData)
        .then((Response) => console.log(Response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.body {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background-image: url("../assets/images/loginbg.jpg");
  background-size: cover;
  z-index: 0;
}
/* 64ac15 */
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  position: absolute;
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
  background-color: #e3e3e3;
  z-index: 0;
}
h2 {
  color: #245d81;
}
h2 p {
  display: inline-block;
  color: #4096cb;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  color: #000;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  position: relative;
  max-width: 38em;
  padding: 0em 3em 5em 3em;
  margin: 3% auto;
  background-color: #fff;
  border-radius: 4.2px;
  z-index: 2 !important;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}

/* CSS */
.button-15 {
  background-image: linear-gradient(#245d81, #245d81);
  border: 1px solid #245d81;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: auto;
}

.button-15:disabled {
  cursor: default;
  opacity: 0.3;
}

.button-15:hover {
  background-image: linear-gradient(#51a9ee, #147bcd);
  border-color: #1482d0;
  text-decoration: none;
}

.button-15:active {
  background-image: linear-gradient(#3d94d9, #0067b9);
  border-color: #006dbc;
  outline: none;
}

.button-15:focus {
  box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
  outline: none;
}
</style>
