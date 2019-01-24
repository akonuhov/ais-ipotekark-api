import Transformer from './Transformer'

export default class CreditObjectTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      id: item.id,
      status: item.id,
      borrowerId: item.borrowerId,
      providerId: item.providerId,
      evaluatorId: item.evaluatorId,
      amountCredit: item.amountCredit,
      timeCredit: item.timeCredit,
      costSquareMeter: item.costSquareMeter,
      totalAreaAapartment: item.totaAareAapartment,
      costApartment: item.costApartment,
      initialFee: item.initialFee,
      percentRate: item.percentRate,
      totalLoanValue: item.totalLoanValue,
      estimatedCostApartment: item.estimatedCostApartment,
      numberDependents: item.numberDependents,
      ageOnMomentEndCredit: item.ageOnMomentEndCredit,
      monthlyPayment: item.monthlyPayment,
      dateLoanAgreement: item.dateLoanAgreement,
      purchaseAgreementNumber: item.purchaseAgreementNumber,
      numberEvaluationReport: item.numberEvaluationReport,
      dateEvaluationReport: item.dateEvaluationReport
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      id: data.id,
      status: data.id,
      borrowerId: data.borrowerId,
      providerId: data.providerId,
      evaluatorId: data.evaluatorId,
      amountCredit: data.amountCredit,
      timeCredit: data.timeCredit,
      costSquareMeter: data.costSquareMeter,
      totalAreaAapartment: data.totaAareAapartment,
      costApartment: data.costApartment,
      initialFee: data.initialFee,
      percentRate: data.percentRate,
      totalLoanValue: data.totalLoanValue,
      estimatedCostApartment: data.estimatedCostApartment,
      numberDependents: data.numberDependents,
      ageOnMomentEndCredit: data.ageOnMomentEndCredit,
      monthlyPayment: data.monthlyPayment,
      dateLoanAgreement: data.dateLoanAgreement,
      purchaseAgreementNumber: data.purchaseAgreementNumber,
      numberEvaluationReport: data.numberEvaluationReport,
      dateEvaluationReport: data.dateEvaluationReport
    }
  }
}
