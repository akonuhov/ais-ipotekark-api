<template lang="html">
  <main-layout title="Добавить оценщика">
    <b-card>
      <b-form>
        <b-form-row>
          <b-form-group label="Наименование с указанием ОГРН и местонахождения" class="col-12">
            <b-input placeholder="Наименование с указанием ОГРН и местонахождения" />
          </b-form-group>
          <b-form-group label="Наименование в творительном падеже, с указанием ОГРН и местонахождения" class="col-12">
            <b-input placeholder="Наименование в творительном падеже, с указанием ОГРН и местонахождения" />
          </b-form-group>
          <b-form-group label="Расчетный счет" class="col-12">
            <b-input placeholder="Расчетный счет" />
          </b-form-group>
          <b-form-group label="Банк" class="col-12">
            <b-input placeholder="Банк" />
          </b-form-group>
          <b-form-group label="ИНН" class="col-12">
            <b-input placeholder="ИНН" />
          </b-form-group>
          <b-form-group label="КПП" class="col-12">
            <b-input placeholder="КПП" />
          </b-form-group>
          <b-form-group label="Иная информация" class="col-12">
            <b-textarea :rows="6" />
          </b-form-group>
        </b-form-row>
        <b-btn variant="secondary" to="/evaluators">Назад</b-btn>
        <b-btn variant="primary" class="ml-2">Создать</b-btn>
      </b-form>
    </b-card>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'PageUsersCreate',
  components: {
    MainLayout
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
</style>
