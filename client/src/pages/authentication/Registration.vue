<template>
  <div class="authentication-wrapper authentication-3">
    <div class="authentication-inner">

      <!-- Side container -->
      <!-- Do not display the container on extra small, small and medium screens -->
      <div class="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style="background-image: url('/static/img/bg/21.jpg');">
        <div class="ui-bg-overlay bg-dark opacity-50"></div>

        <!-- Text -->
        <div class="w-100 text-white px-5">
          <h1 class="display-2 font-weight-bolder mb-4">НЕКОММЕРЧЕСКАЯ<br>ОРГАНИЗАЦИЯ</h1>
          <div class="text-large font-weight-light">
            КРЫМСКИЙ РЕСПУБЛИКАНСКИЙ ФОНД РАЗВИТИЯ ЖИЛИЩНОГО СТРОИТЕЛЬСТВА И ИПОТЕЧНОГО КРЕДИТОВАНИЯ
          </div>
        </div>
        <!-- /.Text -->
      </div>
      <!-- / Side container -->

      <!-- Form container -->
      <div class="d-flex col-lg-4 align-items-center bg-white p-5">
        <!-- Inner container -->
        <!-- Have to add `.d-flex` to control width via `.col-*` classes -->
        <div class="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
          <div class="w-100">

            <!-- Logo -->
            <div class="d-flex justify-content-center align-items-center">
              <div class="ui-w-120">
                <div class="w-100 position-relative">
                  <img src="/static/img/logo.png" alt="logo" class="img-fluid">
                </div>
              </div>
            </div>
            <!-- / Logo -->

            <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Регистрация АИС ипотечного фонда</h4>

            <!-- Form -->
            <form class="my-5">
              <b-form-group label="Имя">
                <b-input v-model="credentials.username" />
              </b-form-group>
              <b-form-group label="Email">
                <b-input v-model="credentials.email" />
              </b-form-group>
              <b-form-group label="Пароль">
                <b-input type="password" v-model="credentials.password" />
              </b-form-group>

              <div class="d-flex justify-content-between align-items-center m-0">
                <b-btn variant="primary" @click="onSubmitLogin">Регистрировать</b-btn>
              </div>
            </form>
            <!-- / Form -->

          </div>
        </div>
      </div>
      <!-- / Form container -->

    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-authentication-login',
  metaInfo: {
    title: 'Login'
  },
  data: () => ({
    credentials: {
      username: '',
      email: '',
      emailVerified: false,
      password: ''
    }
  }),
  methods: {
    onSubmitLogin () {
      this.$http.post('/api/users', this.credentials)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
