<template lang="html">
  <main-layout title="Добавить шаблон">
    <b-card>
      <b-form>
        <b-form-row>
          <b-form-group label="Наименование шаблона" class="col-12">
            <b-input placeholder="Наименование шаблона" v-model="templateObject.name" />
          </b-form-group>
          <b-form-group label="Содержание шаблона" class="col-12">
            <editor v-model="templateObject.text"></editor>
          </b-form-group>
        </b-form-row>
        <b-btn variant="secondary" to="/templates">Назад</b-btn>
        <b-btn variant="primary" class="ml-2">Создать</b-btn>
      </b-form>
    </b-card>
  </main-layout>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'PageDocumentCreate',
  components: {
    MainLayout,
    Editor
  },
  data: () => ({
    templateObject: {
      name: null,
      text: null
    }
  })
}
</script>

<style lang="scss">
</style>
