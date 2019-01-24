<template lang="html">
  <main-layout title="Список социальных выплат">
    <div class="ui-bordered px-4 pt-4 mb-4">
      <div class="form-row align-items-center">
        <div class="col-md mb-4">
          <label class="form-label">Категория социальной выплаты</label>
          <b-select />
        </div>
        <div class="col-md mb-4">
          <label class="form-label">Заемщик</label>
          <b-select />
        </div>
        <div class="col-md col-xl-2 mb-4">
          <label class="form-label d-none d-md-block">&nbsp;</label>
          <b-btn variant="secondary" :block="true">Показать</b-btn>
        </div>
        <div class="col-md col-xl-2 mb-4">
          <label class="form-label d-none d-md-block">&nbsp;</label>
          <b-btn variant="primary" :block="true" to="/social-payments/create">Добавить</b-btn>
        </div>
      </div>
    </div>
    <b-card no-body>
      <b-card-body>
        <div class="row">
          <div class="col">
            На странице: &nbsp;
            <b-select size="sm" v-model="perPage" :options="[10, 20, 30, 40, 50]" class="d-inline-block w-auto" />
          </div>
          <div class="col">
            <b-input size="sm" placeholder="Поиск..." class="d-inline-block w-auto float-sm-right" @input="filter($event)" />
          </div>
        </div>
      </b-card-body>
      <hr class="border-light m-0">
      <div class="table-responsive">
        <b-table
          :items="usersData"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped="true"
          :bordered="true"
          :current-page="currentPage"
          :per-page="perPage"
          class="card-table">
          <template slot="account" slot-scope="data">
            <a href="javascript:void(0)">{{data.item.account}}</a>
          </template>
          <template slot="verified" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.verified, 'ion-md-close text-light': !data.item.verified}"></span>
          </template>
          <template slot="role" slot-scope="data">
            <span v-if="data.item.role === 1">User</span>
            <span v-if="data.item.role === 2">Author</span>
            <span v-if="data.item.role === 3">Staff</span>
            <span v-if="data.item.role === 4">Admin</span>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge variant="outline-success" v-if="data.item.status === 1">Active</b-badge>
            <b-badge variant="outline-danger" v-if="data.item.status === 2">Banned</b-badge>
            <b-badge variant="outline-default" v-if="data.item.status === 3">Deleted</b-badge>
          </template>
          <template slot="actions" slot-scope="data">
            <b-btn variant="default btn-xs icon-btn md-btn-flat" v-b-tooltip.hover title="Edit"><i class="ion ion-md-create"></i></b-btn>
            <b-dropdown variant="default btn-xs icon-btn md-btn-flat hide-arrow" :right="!isRTL">
              <template slot="button-content"><i class="ion ion-ios-settings"></i></template>
              <b-dropdown-item href="javascript:void(0)">View profile</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Ban user</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
      </div>
      <b-card-body class="pt-0 pb-3">
        <div class="row">
          <div class="col-sm text-sm-left text-center pt-3">
            <span class="text-muted" v-if="totalItems">Page {{ currentPage }} of {{ totalPages }}</span>
          </div>
          <div class="col-sm pt-3">
            <b-pagination class="justify-content-center justify-content-sm-end m-0"
              v-if="totalItems"
              v-model="currentPage"
              :total-rows="totalItems"
              :per-page="perPage"
              size="sm" />
          </div>
        </div>
      </b-card-body>
    </b-card>
  </main-layout>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'PageSocialPaymentsList',
  components: {
    MainLayout,
    flatPickr
  },
  data: () => ({
    searchKeys: ['id', 'account', 'email', 'name'],
    sortBy: 'id',
    sortDesc: false,
    perPage: 10,
    fields: [
      { key: 'category', label: 'Категория соц. выплаты', sortable: true, tdClass: 'align-middle' },
      { key: 'borrower', label: 'Заемщик', sortable: true, tdClass: 'align-middle' },
      { key: 'actions', label: ' ', tdClass: 'text-nowrap align-middle text-center' }
    ],

    usersData: [],
    originalUsersData: [],

    currentPage: 1
  }),

  computed: {
    totalItems () {
      return this.usersData.length
    },
    totalPages () {
      return Math.ceil(this.totalItems / this.perPage)
    }
  },

  methods: {
    filter (value) {
      const val = value.toLowerCase()
      const filtered = this.originalUsersData.filter(d => {
        return Object.keys(d)
          .filter(k => this.searchKeys.includes(k))
          .map(k => String(d[k]))
          .join('|')
          .toLowerCase()
          .indexOf(val) !== -1 || !val
      })
      this.usersData = filtered
    }
  }
}
</script>

<style lang="scss">
</style>
