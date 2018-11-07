<template>
  <div class="layout-wrapper layout-2">
    <div class="layout-inner">
      <layout-sidenav />
      <div class="layout-container">
        <layout-navbar />
        <div class="layout-content">
          <div class="router-transitions container-fluid flex-grow-1 container-p-y">
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
