<template>
  <layout-flex>
    <h4 class="font-weight-bold py-3 mb-4">Список задач</h4>

    <div class="row">
      <div class="col-md-4 col-lg-4 col-xl-3">

        <div class="ui-bordered mb-4">
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == 'inbox'}">
            <i class="ion ion-ios-filing ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Сегодня</a>
          </div>
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == 'today'}">
            <i class="ion ion-md-calendar ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Завтра</a>
          </div>
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == '7days'}">
            <i class="ion ion-ios-calendar ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Неделя</a>
          </div>

          <ul class="nav nav-sm nav-tabs tabs-alt nav-justified mt-3">
            <b-nav-item :active="curTab === 'projects'" @click="curTab = 'projects'">Сущности</b-nav-item>
            <b-nav-item :active="curTab === 'tags'" @click="curTab = 'tags'">Теги</b-nav-item>
          </ul>

          <div v-if="curTab === 'projects'" class="py-3">
            <div class="py-2 px-3" v-for="project in projects">
              <a href="javascript:void(0)" class="text-dark">{{project.name}}</a>
            </div>
            <a href="javascript:void(0)" class="d-block text-light small py-2 px-3"><i class="ion ion-md-add"></i>&nbsp; Добавить проект</a>
          </div>
          <div v-if="curTab === 'tags'" class="py-3">
            <div class="py-2 px-3" v-for="tag in tags">
              <a href="javascript:void(0)" class="text-dark"><span class="badge badge-dot" :class="`badge-${tag.color}`"></span> &nbsp; {{tag.title}}</a>
            </div>
            <a href="javascript:void(0)" class="d-block text-light small py-2 px-3"><i class="ion ion-md-add"></i>&nbsp; Добавить тег</a>
          </div>
        </div>

      </div>
      <div class="col">
        <b-card no-body>

          <b-card-header class="py-3">
            <b-btn variant="primary" @click="onClickCreateTask"><i class="ion ion-md-add"></i>&nbsp; Добавить задачу</b-btn>&nbsp;
            <b-btn variant="default md-btn-flat"><i class="ion ion-md-close"></i>&nbsp; Очистить</b-btn>
          </b-card-header>

          <div v-for="(section, index) in sectionsData">
            <b-card-body>
              <p class="text-muted small">{{section.title}}</p>
              <draggable v-model="section.tasks" :options="draggableOptions" class="task-list custom-controls-stacked">

                <div v-for="task in section.tasks" class="task-list-item">

                  <label class="ui-todo-item custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :checked="task.completed" @click="task.completed = !task.completed">
                    <span class="custom-control-label">{{task.text}}</span>
                    <span v-if="task.tags && task.tags.length">
                      <span v-for="tag in task.tags" :class="`badge-${tags[tag].color}`" class="badge font-weight-normal ml-2">{{tags[tag].title}}</span>
                    </span>
                    <b-badge v-if="task.left" variant="outline-default" class="ui-todo-badge font-weight-normal ml-2">{{task.left}} left</b-badge>
                  </label>

                  <div class="d-flex align-items-center float-right">
                    <div class="task-list-handle ion ion-ios-move text-lightest small mr-3"></div>

                    <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="task-list-actions" :right="!isRTL">
                      <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                      <b-dropdown-item href="javascript:void(0)">Редактировать</b-dropdown-item>
                      <b-dropdown-item href="javascript:void(0)">Удалить</b-dropdown-item>
                    </b-dropdown>
                  </div>

                </div>

              </draggable>
            </b-card-body>
            <hr class="m-0" v-if="index !== (sectionsData.length - 1)">
          </div>

        </b-card>
      </div>
    </div>
  </layout-flex>
</template>

<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>

<script>
import LayoutFlex from '@/layout/Layout2'
import flatPickr from 'vue-flatpickr-component'
import draggable from 'vuedraggable'
export default {
  name: 'task-list',
  metaInfo: {
    title: 'Ticket list - Pages'
  },
  components: {
    LayoutFlex,
    flatPickr,
    draggable
  },
  data: () => ({
    curView: 'inbox',

    // "Projects" and "tags" tabs
    curTab: 'projects',

    // Projects
    projects: [],

    // Tags
    tags: {
      clients: { title: 'Срочное', color: 'danger' },
      important: { title: 'Среднее', color: 'success' },
      social: { title: 'Несрочное', color: 'info' },
      other: { title: 'Долгое', color: 'warning' }
    },

    sectionsData: [{
      title: 'Сегодня',
      tasks: []
    }, {
      title: 'Завтра',
      tasks: []
    }, {
      title: 'Неделя',
      tasks: []
    }],

    draggableOptions: {
      animation: 150,
      handle: '.task-list-handle',
      group: {
        name: 'task-list',
        put: true,
        pull: true
      }
    }
  }),
  methods: {
    onClickCreateTask () {
      window.print()
    }
  }
}
</script>
