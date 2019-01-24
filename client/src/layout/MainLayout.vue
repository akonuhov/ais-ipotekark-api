<template>
  <div class="layout-wrapper layout-2">
    <div class="layout-inner">
      <layout-sidenav />
      <div class="layout-container">
        <layout-navbar />
        <div id="layout-content" class="layout-content">
          <div class="container-fluid flex-grow-1 container-p-y">
            <div class="row" v-if="title">
              <div class="col-12">
                <h4 class="font-weight-bold py-3 mb-4">{{ title }}</h4>
              </div>
            </div>
            <slot></slot>
          </div>
          <layout-footer />
        </div>
      </div>
    </div>
    <div class="layout-overlay" @click="closeSidenav"></div>
  </div>
</template>

<script>
import LayoutNavbar from './LayoutNavbar'
import LayoutSidenav from './LayoutSidenav'
import LayoutFooter from './LayoutFooter'
import LayoutBlank from './LayoutBlank'

export default {
  name: 'app-layout-2',
  components: {
    LayoutNavbar,
    LayoutSidenav,
    LayoutFooter,
    LayoutBlank
  },
  props: {
    title: String
  },
  mounted () {
    this.layoutHelpers.init()
    this.layoutHelpers.update()
    this.layoutHelpers.setAutoUpdate(true)
  },
  beforeDestroy () {
    this.layoutHelpers.destroy()
  },
  methods: {
    closeSidenav () {
      this.layoutHelpers.setCollapsed(true)
    }
  }
}
</script>

<style lang="scss">
.app-loading {
  background-color: #000;
}
</style>
