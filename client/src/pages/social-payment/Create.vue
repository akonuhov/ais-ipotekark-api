<template lang="html">
  <main-layout title="Добавить социальную выплату">
    <b-card>
      <b-form>
        <b-form-row>
          <b-form-group label="Наименование социальной выплаты" class="col-6">
            <b-select plain />
          </b-form-group>
          <b-form-group label="Заемщик" class="col-6">
            <b-select plain />
          </b-form-group>
        </b-form-row>
        <b-btn variant="secondary" to="/social-payments">Назад</b-btn>
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
