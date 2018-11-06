<template lang="html">
  <b-modal :id="modalId" cancel-title="Отмена" ok-title="Добавить">
    <div slot="modal-title">
      <h3>Добавить задачу</h3>
    </div>
    <b-form class="text-left">
      <b-form-group label="Заголовок">
        <b-input type="text" placeholder="Заголовок" />
      </b-form-group>
      <b-form-group label="Исполнитель">
        <multiselect
          v-model="task.executor"
          :options="taskExecutorOptions"
          :searchable="false"
          :show-labels="false"
          placeholder="Исполнитель" />
      </b-form-group>
      <b-form-group label="Описание">
        <b-textarea :rows="3" />
      </b-form-group>
      <b-form-group label="Срочность">
        <multiselect
          v-model="task.urgency"
          :options="taskUrgencyOptions"
          :searchable="false"
          :show-labels="false"
          placeholder="Срочность" />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'TaskCreatePopup',
  data: () => ({
    task: {
      urgency: null,
      executor: null
    },
    taskUrgencyOptions: [
      'Срочное',
      'Среднее',
      'Несрочное',
      'Долгое'
    ],
    taskExecutorOptions: []
  }),
  props: {
    modalId: {
      type: String,
      default: ''
    }
  },
  components: {
    Multiselect
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
