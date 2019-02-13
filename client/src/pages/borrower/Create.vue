<template lang="html">
  <main-layout title="Добавить заемщика">
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
    borrowerObject: {
      passportData: {
        fioImenitelny: null,
        fioRoditelny: null,
        fioDatelny: null,
        fioTvoritelny: null,
        dateBirth: null,
        gender: null,
        passportSeries: null,
        passportId: null,
        issuedBy: null,
        unitCode: null,
        placeBirth: null
      },
      share: {
        shareInOwnership: null
      },
      contactData: {
        phoneHome: null,
        phoneService: null,
        phoneMobile: null,
        email: null
      },
      bankData: {
        accountNumber: null,
        requisites: null
      },
      incomeData: {
        basic: null,
        basicDeduction: null,
        basicTotal: null,
        partTime: null,
        partTimeDeduction: null,
        partTimeTotal: null,
        pension: null,
        pensionDeduction: null,
        pensionTotal: null,
        sum: null
      },
      aggregateExpense: null,
      placeRegistration: {
        subject: null,
        district: null,
        typeSettlement: null,
        locality: null,
        typeRoad: null,
        nameRoad: null,
        houseNumber: null,
        housing: null,
        apartmentNumber: null
      },
      placeResidence: {
        subject: null,
        district: null,
        typeSettlement: null,
        locality: null,
        typeRoad: null,
        nameRoad: null,
        houseNumber: null,
        housing: null,
        apartmentNumber: null
      }
    },
    switchPlaceResidence: false
  }),
  watch: {
    'borrowerObject.incomeData.basic' (val) {
      if (this.borrowerObject.incomeData.basicDeduction > 0) {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic - (this.borrowerObject.incomeData.basic * this.borrowerObject.incomeData.basicDeduction / 100)
      } else {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.basicDeduction' (val) {
      if (this.borrowerObject.incomeData.basicDeduction > 0) {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic - (this.borrowerObject.incomeData.basic * this.borrowerObject.incomeData.basicDeduction / 100)
      } else {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.partTime' (val) {
      if (this.borrowerObject.incomeData.partTimeDeduction > 0) {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime - (this.borrowerObject.incomeData.partTime * this.borrowerObject.incomeData.partTimeDeduction / 100)
      } else {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.partTimeDeduction' (val) {
      if (this.borrowerObject.incomeData.partTimeDeduction > 0) {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime - (this.borrowerObject.incomeData.partTime * this.borrowerObject.incomeData.partTimeDeduction / 100)
      } else {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.pension' (val) {
      if (this.borrowerObject.incomeData.pensionDeduction > 0) {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension - (this.borrowerObject.incomeData.pension * this.borrowerObject.incomeData.pensionDeduction / 100)
      } else {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.pensionDeduction' (val) {
      if (this.borrowerObject.incomeData.pensionDeduction > 0) {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension - (this.borrowerObject.incomeData.pension * this.borrowerObject.incomeData.pensionDeduction / 100)
      } else {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.aggregateExpense' () {
      this.setIncomeDataSum()
    }
  },
  methods: {
    setValutPlaceResidence () {
      for (let item in this.borrowerObject.placeResidence) {
        if (this.switchPlaceResidence === true) {
          this.borrowerObject.placeResidence[item] = this.borrowerObject.placeRegistration[item]
        } else {
          this.borrowerObject.placeResidence[item] = null
        }
      }
    },
    onClickButtonBack () {
      this.$router.push('/borrower')
    },
    onCreateBorrower () {
      this.$refs['borrowerObjectForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('borrower/create', this.borrowerObject)
        } else {
          return false
        }
      })
    },
    setIncomeDataSum () {
      this.borrowerObject.incomeData.sum = this.borrowerObject.incomeData.basicTotal + this.borrowerObject.incomeData.partTimeTotal + this.borrowerObject.incomeData.pensionTotal - this.borrowerObject.aggregateExpense
    }
  },
  computed: {
    getIncomeDataSum () {
      return this.borrowerObject.incomeData.sum
    }
  }
}
</script>

<style lang="scss">
</style>
