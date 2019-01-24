<template lang="html">
  <main-layout title="Добавить сотрудника">
    <b-card>
      <b-form>
        <b-form-row>
          <b-form-group label="ФИО" class="col-md-6">
            <b-input placeholder="ФИО" />
          </b-form-group>
          <b-form-group label="Дата рождения" class="col-md-3">
            <datepicker :bootstrapStyling="true" />
          </b-form-group>
          <b-form-group label="Мобильный телефон" class="col-md-3">
            <masked-input type="text" class="form-control" placeholder="Мобильный телефон"
              v-model="phone"
              :mask="phoneMask" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Место регистрации" class="col-md-6">
            <b-input placeholder="Место регистрации" />
          </b-form-group>
          <b-form-group label="Место проживания" class="col-md-6">
            <b-input placeholder="Место проживания" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Должность" class="col-md-4">
            <b-select plain />
          </b-form-group>
          <b-form-group label="Дата принятия на работу" class="col-md-4">
            <datepicker :bootstrapStyling="true" />
          </b-form-group>
          <b-form-group label="Роль" class="col-md-4">
            <b-select plain />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Email" class="col-md-4">
            <masked-input type="text" class="form-control" placeholder="Email"
              v-model="email"
              :mask="emailMask" />
          </b-form-group>
          <b-form-group label="Пароль" class="col-md-4">
            <b-input type="password" placeholder="Пароль" />
          </b-form-group>
        </b-form-row>
        <b-btn variant="secondary" to="/users">Назад</b-btn>
        <b-btn variant="primary" class="ml-2">Создать</b-btn>
        <label class="switcher switcher-info ml-4">
          <input type="checkbox" class="switcher-input" checked>
          <span class="switcher-indicator">
            <span class="switcher-yes"><span class="ion ion-md-checkmark"></span></span>
            <span class="switcher-no"><span class="ion ion-md-close"></span></span>
          </span>
          <span class="switcher-label"><i>Место проживания = Место регистрации</i></span>
        </label>
      </b-form>
    </b-card>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import Datepicker from 'vuejs-datepicker'
import MaskedInput from 'vue-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'
export default {
  name: 'PageUsersCreate',
  components: {
    MainLayout,
    Datepicker,
    MaskedInput
  },
  data: () => ({
    phone: '',
    phoneMask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    email: '',
    emailMask: textMaskAddons.emailMask
  })
}
</script>

<style src="@/vendor/libs/vuejs-datepicker/vuejs-datepicker.scss" lang="scss"></style>
