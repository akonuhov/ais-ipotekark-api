<template lang="html">
  <main-layout title="Добавить кредитное дело">
    <b-card>
      <b-form>
        <b-form-row>
          <b-form-group label="Номер кредитного дела" class="col-3">
            <b-input placeholder="Номер кредитного дела" v-model="creditObject.id"></b-input>
          </b-form-group>
          <b-form-group label="Заемщик" class="col-3">
            <b-select v-model="creditObject.borrowerId" plain />
          </b-form-group>
          <b-form-group label="Продавцы/Застройщики" class="col-3">
            <b-select v-model="creditObject.providerId" placeholder="Продавцы/Застройщики" />
          </b-form-group>
          <b-form-group label="Оценщики" class="col-3">
            <b-select v-model="creditObject.evaluatorId" placeholder="Оценщики" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
            <b-form-group label="Размер кредита" class="col-4">
              <b-input v-model="creditObject.amountCredit" placeholder="Размер кредита" />
            </b-form-group>
            <b-form-group label="Срок кредитования, мес"  class="col-4">
              <b-input v-model="creditObject.timeCredit" placeholder="Срок кредитования, мес" />
            </b-form-group>
            <b-form-group label="Стоимость кв. м"  class="col-4">
              <b-input v-model="creditObject.costSquareMeter" placeholder="Стоимость кв. м" />
            </b-form-group>
            <b-form-group label="Общая площадь квартиры"  class="col-4">
              <b-input v-model="creditObject.totaAareAapartment" placeholder="Общая площадь квартиры" />
            </b-form-group>
            <b-form-group label="Стоимость квартиры"  class="col-4">
              <b-input v-model="creditObject.costApartment" placeholder="Стоимость квартиры" />
            </b-form-group>
            <b-form-group label="Первоначальный взнос"  class="col-4">
              <b-input v-model="creditObject.initialFee" placeholder="Первоначальный взнос" />
            </b-form-group>
            <b-form-group label="Процентная ставка"  class="col-4">
              <b-select v-model="creditObject.percentRate" placeholder="Процентная ставка" />
            </b-form-group>
            <b-form-group label="Полная стоимость займа" class="col-4">
              <b-input v-model="creditObject.totalLoanValue" placeholder="Полная стоимость займа" />
            </b-form-group>
            <b-form-group label="Оценочная стоимость квартиры" class="col-4">
              <b-input v-model="creditObject.estimatedCostApartment" placeholder="Оценочная стоимость квартиры" />
            </b-form-group>
            <b-form-group label="Количество иждивенцев" class="col-4">
              <b-input v-model="creditObject.numberDependents" placeholder="Количество иждивенцев" />
            </b-form-group>
            <b-form-group label="Возраст на момент погашения кредита" class="col-4">
              <b-input v-model="creditObject.ageOnMomentEndCredit" placeholder="Возраст на момент погашения кредита"  readonly />
            </b-form-group>
            <b-form-group label="Ежемесячный платеж" class="col-4">
              <b-input v-model="creditObject.monthlyPayment" placeholder="Ежемесячный платеж" />
            </b-form-group>
            <b-form-group label="Дата договора займа" class="col-4">
              <datepicker :bootstrapStyling="true" v-model="creditObject.dateLoanAgreement" placeholder="Дата договора займа" />
            </b-form-group>
            <b-form-group label="Номер договора приобретения" class="col-4">
              <b-input v-model="creditObject.purchaseAgreementNumber" placeholder="Номер договора приобретения"></b-input>
            </b-form-group>
            <b-form-group label="Номер отчета об оценке" class="col-4">
              <b-input v-model="creditObject.numberEvaluationReport" placeholder="Номер отчета об оценке"></b-input>
            </b-form-group>
            <b-form-group label="Дата отчета об оценке" class="col-4">
              <datepicker :bootstrapStyling="true" v-model="creditObject.dateEvaluationReport" placeholder="Дата отчета об оценке" />
            </b-form-group>
        </b-form-row>
        <b-btn variant="secondary" to="/credit-objects">Назад</b-btn>
        <b-btn variant="primary" class="ml-2">Создать</b-btn>
      </b-form>
    </b-card>
  </main-layout>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'PageCreditObjectCreate',
  components: {
    MainLayout,
    Datepicker
  },
  data: () => ({
    creditObject: {
      id: null,
      status: null,
      borrowerId: null,
      providerId: null,
      evaluatorId: null,
      amountCredit: null,
      timeCredit: null,
      costSquareMeter: null,
      totaAareAapartment: null,
      costApartment: null,
      initialFee: null,
      percentRate: null,
      totalLoanValue: null,
      estimatedCostApartment: null,
      numberDependents: null,
      ageOnMomentEndCredit: null,
      monthlyPayment: null,
      dateLoanAgreement: null,
      purchaseAgreementNumber: null,
      numberEvaluationReport: null,
      dateEvaluationReport: null
    },
    optionsPercentRate: [{
      value: '13',
      label: '13%'
    }, {
      value: '12',
      label: '12%'
    }, {
      value: '11',
      label: '11%'
    }],
    optionsBorrower: [],
    optionsProvider: [],
    optionsEvaluator: []
  })
}
</script>

<style lang="scss">
</style>
