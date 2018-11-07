<template lang="html">
  <main-layout>
    <h4 class="font-weight-bold py-3 mb-4">Настройки профиля</h4>
    <b-card no-body class="overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-3 pt-0">
          <b-list-group class="account-settings-links" flush>
            <b-list-group-item button :active="curTab === 'general'" @click="curTab = 'general'">Главные данные</b-list-group-item>
            <b-list-group-item button :active="curTab === 'password'" @click="curTab = 'password'">Изменить пароль</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-md-9" v-if="curTab === 'general'">
          <b-card-body class="media align-items-center">
            <img :src="`/static/img/avatars/${account.avatar}`" alt="" class="d-block ui-w-80">
            <div class="media-body ml-4">
              <b-btn variant="outline-primary">Загрузить новое фото</b-btn> &nbsp;
              <b-btn variant="default md-btn-flat">Сбросить</b-btn>
              <div class="text-light small mt-1">Формат фото JPG, GIF или PNG.</div>
            </div>
          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>
            <b-form-group label="ФИО">
              <b-input v-model="account.username"
                       type="text"
                       placeholder="ФИО" />
            </b-form-group>
            <b-form-group label="Email">
              <masked-input v-model="account.email"
                            type="text"
                            class="form-control"
                            placeholder="Email"
                            :mask="mask.email" />
              <b-alert variant="warning" show class="mt-3 mb-0" v-if="!account.verified">
                Your email is not confirmed. Please check your inbox.<br>
                <a href="javascript:void(0)">Resend confirmation</a>
              </b-alert>
            </b-form-group>
            <b-form-group label="Телефон">
              <masked-input v-model="account.phone"
                            type="text"
                            class="form-control"
                            placeholder="Телефон"
                            :mask="mask.phone" />
            </b-form-group>
            <b-form-group label="Дата рождения">
              <masked-input v-model="account.dateBirth"
                            type="text"
                            class="form-control"
                            placeholder="Дата рождения"
                            :mask="mask.date"
                            :pipe="mask.datePipe" />
            </b-form-group>
            <b-form-group label="Должность">
              <b-input v-model="account.position"
                       type="text"
                       placeholder="Должность"
                       disabled />
            </b-form-group>
            <b-form-group label="Дата принятия на работу">
              <masked-input v-model="account.employmentDate"
                            type="text"
                            class="form-control"
                            placeholder="Дата принятия на работу"
                            :mask="mask.date"
                            :pipe="mask.datePipe"
                            disabled />
            </b-form-group>
          </b-card-body>
        </div>
        <div class="col-md-4" v-if="curTab === 'password'">
          <b-card-body class="pb-2">
            <b-form-group label="Актуальный пароль">
              <password v-model="password.current"
                        defaultClass="form-control"
                        placeholder="Актуальный пароль" />
            </b-form-group>
            <b-form-group label="Новый пароль">
              <password v-model="password.newcurrent"
                        defaultClass="form-control"
                        placeholder="Новый пароль" />
            </b-form-group>
            <b-form-group label="Повторите новый пароль">
              <password v-model="password.repeatnewcurrent"
                        defaultClass="form-control"
                        placeholder="Повторите новый пароль" />
            </b-form-group>
          </b-card-body>
        </div>
      </div>
    </b-card>
    <div class="text-right mt-3">
      <b-btn class="mr-2" variant="primary">Сохранить изменения</b-btn>
      <b-btn variant="default" to="/">Отмена</b-btn>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import MaskedInput from 'vue-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'
import Password from 'vue-password-strength-meter'
export default {
  name: 'PageAccountSettings',
  components: {
    MainLayout,
    MaskedInput,
    Password
  },
  metaInfo: {
    title: 'Профиль'
  },
  data: () => ({
    curTab: 'general',
    account: {
      _id: '',
      avatar: 'default.jpg',
      username: '',
      email: '',
      phone: '',
      position: '',
      dateBirth: '',
      employmentDate: '',
      role: '',
      verified: true
    },
    password: {
      current: null,
      newcurrent: null,
      repeatnewcurrent: null
    },
    mask: {
      phone: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      email: textMaskAddons.emailMask,
      date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
      datePipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')
    }
  }),
  methods: {
  }
}
</script>

<style lang="scss">
.card {
  .Password {
    max-width: 100%;
    &__badge {
      height: auto;
    }
  }
}
</style>
