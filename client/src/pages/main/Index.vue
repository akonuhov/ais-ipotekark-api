<template lang="html">
  <main-layout title="Доска задач">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="row">
          <div class="col-3 mb-3">
            <b-card no-body>
              <b-card-header header-tag="h6" class="text-center">Новые</b-card-header>
              <draggable v-model="newTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
                <div v-for="task in newTasks" class="ui-bordered p-2 mb-2">
                  <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                    <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                    <b-dropdown-item href="javascript:void(0)">Редактировать</b-dropdown-item>
                    <b-dropdown-item href="javascript:void(0)">Удалить</b-dropdown-item>
                  </b-dropdown>
                  {{task.text}}
                  <span v-if="task.tags && task.tags.length">
                    <span v-for="tag in task.tags" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
                  </span>
                </div>
              </draggable>
              <b-card-footer class="text-center py-2">
                <a href="javascript:void(0)" v-b-modal.task-create-modal><i class="ion ion-md-add"></i>&nbsp; Добавить задачу</a>
                <task-create-modal modal-id="task-create-modal" />
              </b-card-footer>
            </b-card>
          </div>
          <div class="col-3 mb-3">
            <b-card no-body border-variant="info">
              <b-card-header header-tag="h6" header-text-variant="info" class="text-center">В работе</b-card-header>
              <draggable v-model="inProgressTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
                <div v-for="task in inProgressTasks" class="ui-bordered p-2 mb-2">
                  <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                    <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                    <b-dropdown-item href="javascript:void(0)">Редактировать</b-dropdown-item>
                    <b-dropdown-item href="javascript:void(0)">Удалить</b-dropdown-item>
                  </b-dropdown>
                  {{task.text}}
                  <span v-if="task.tags && task.tags.length">
                    <span v-for="tag in task.tags" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
                  </span>
                </div>
              </draggable>
            </b-card>
          </div>
          <div class="col-3 mb-3">
            <b-card no-body border-variant="warning">
              <b-card-header header-tag="h6" header-text-variant="warning" class="text-center">Проверяется</b-card-header>
              <draggable v-model="testTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
                <div v-for="task in testTasks" class="ui-bordered p-2 mb-2">
                  <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                    <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                    <b-dropdown-item href="javascript:void(0)">Редактировать</b-dropdown-item>
                    <b-dropdown-item href="javascript:void(0)">Удалить</b-dropdown-item>
                  </b-dropdown>
                  {{task.text}}
                  <span v-if="task.tags && task.tags.length">
                    <span v-for="tag in task.tags" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
                  </span>
                </div>
              </draggable>
            </b-card>
          </div>
          <div class="col-3 mb-3">
            <b-card no-body border-variant="success">
              <b-card-header header-tag="h6" header-text-variant="success" class="text-center">Выполненные</b-card-header>
              <draggable v-model="doneTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
                <div v-for="task in doneTasks" class="ui-bordered p-2 mb-2">
                  <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                    <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                    <b-dropdown-item href="javascript:void(0)">Редактировать</b-dropdown-item>
                    <b-dropdown-item href="javascript:void(0)">Удалить</b-dropdown-item>
                  </b-dropdown>
                  {{task.text}}
                  <span v-if="task.tags && task.tags.length">
                    <span v-for="tag in task.tags" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
                  </span>
                </div>
              </draggable>
              <b-card-footer class="text-center py-2" v-if="doneTasks.length > 0">
                <a href="javascript:void(0)"><i class="ion ion-md-close"></i>&nbsp; Очистить выполненные задачи</a>
              </b-card-footer>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import TaskCreateModal from '@/components/task/CreateModal.vue'
import draggable from 'vuedraggable'
export default {
  name: 'PageMain',
  data: () => ({
    tags: {
      clients: { title: 'Срочное', color: 'danger' },
      important: { title: 'Среднее', color: 'success' },
      social: { title: 'Несрочное', color: 'info' },
      other: { title: 'Долгое', color: 'warning' }
    },
    newTasks: [],
    inProgressTasks: [],
    testTasks: [],
    doneTasks: [],
    draggableOptions: {
      animation: 150,
      group: {
        name: 'kanban-board',
        put: true,
        pull: true
      }
    }
  }),
  components: {
    MainLayout,
    TaskCreateModal,
    draggable
  }
}
</script>

<style lang="scss">
</style>
