<template>
  <sidenav :orientation="orientation" :class="curClasses">
    <div class="app-brand" v-if="orientation !== 'horizontal'">
      <span class="app-brand-logo">
        <img src="/static/img/logo.png" alt="logo" class="img-fluid">
      </span>
      <router-link to="/" class="app-brand-text demo sidenav-text font-weight-normal ml-4"><i>АИСистема</i></router-link>
      <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto" @click="toggleSidenav()">
        <i class="ion ion-md-menu align-middle"></i>
      </a>
    </div>
    <div class="sidenav-divider mt-0" v-if="orientation !== 'horizontal'"></div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">
      <sidenav-header class="small text-uppercase font-weight-semibold">Главная</sidenav-header>
      <sidenav-router-link icon="ion ion-ios-desktop" to="/" :exact="true">Доска задач</sidenav-router-link>
      <sidenav-router-link icon="ion ion-ios-list-box" to="/tasks-list" :exact="true">Список задач</sidenav-router-link>
      <sidenav-router-link icon="fas fa-id-card-alt" to="/users" :exact="true">Сотрудники</sidenav-router-link>
      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small text-uppercase font-weight-semibold">Объекты</sidenav-header>
      <sidenav-router-link icon="fas fa-donate" to="/credits-object" :exact="true">Кредитные дела</sidenav-router-link>
      <sidenav-router-link icon="fas fa-address-card" to="/borrowers" :exact="true">Заемщики</sidenav-router-link>
      <sidenav-router-link icon="fas fa-piggy-bank" to="/social-payments" :exact="true">Социальные выплаты</sidenav-router-link>
      <sidenav-router-link icon="fas fa-user-cog" to="/providers" :exact="true">Застройщики</sidenav-router-link>
      <sidenav-router-link icon="fas fa-user-tag" to="/evaluators" :exact="true">Оценщики</sidenav-router-link>
      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small text-uppercase font-weight-semibold">Документы</sidenav-header>
      <sidenav-router-link icon="fas fa-file" to="/documents" :exact="true">Документы</sidenav-router-link>
      <sidenav-router-link icon="fas fa-file-alt" to="/templates" :exact="true">Шаблоны</sidenav-router-link>
      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small text-uppercase font-weight-semibold">Коммуникации</sidenav-header>
      <sidenav-router-link icon="fas fa-comments" to="/chat" :exact="true">Чат</sidenav-router-link>
      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small text-uppercase font-weight-semibold">Журналы действий</sidenav-header>
      <sidenav-router-link icon="ion ion-ios-albums" to="/operations" :exact="true">Операции</sidenav-router-link>
      <sidenav-router-link icon="fas fa-user-secret" to="/access" :exact="true">Доступ</sidenav-router-link>
    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'
export default {
  name: 'LayoutSidenav',
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
  },
  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },
  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg
      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }
      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },
  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },
    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },
    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    }
  }
}
</script>
