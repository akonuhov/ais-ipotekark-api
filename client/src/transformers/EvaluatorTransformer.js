import Transformer from './Transformer'

export default class EvaluatorTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      name: item.name,
      nameTvoritelny: item.nameTvoritelny,
      bankAccount: item.bankAccount,
      bank: item.bank,
      inn: item.inn,
      kpp: item.kpp,
      other: item.other
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      name: data.name,
      nameTvoritelny: data.nameTvoritelny,
      bankAccount: data.bankAccount,
      bank: data.bank,
      inn: data.inn,
      kpp: data.kpp,
      other: data.other
    }
  }
}
