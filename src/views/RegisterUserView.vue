<template>
  <div>
    <div class="body"></div>
    <div class="login-form">
      <h4>Register to Administration</h4>
      <form>
        <div class="form-group">
          <label>User Name</label>
          <input type="email" class="form-control" placeholder="User Name" />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <div class="checkbox">
          <label> <input type="checkbox" /> Agree the terms and policy </label>
        </div>
        <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30">
          Register
        </button>
        <div class="social-login-content">
          <div class="social-button">
            <button
              type="button"
              class="btn btn-primary bg-facebook btn-flat btn-addon m-b-10"
            >
              <i class="ti-facebook"></i>Register with facebook
            </button>
            <button
              type="button"
              class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"
            >
              <i class="ti-twitter"></i>Register with twitter
            </button>
          </div>
        </div>
        <div class="register-link m-t-15 text-center">
          <p>Already have account ? <a href="#"> Sign in</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUserView",
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
</style>
