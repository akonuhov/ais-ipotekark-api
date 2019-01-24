import Transformer from './Transformer'

export default class ProviderTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      name: item.name,
      nameTvoritelny: item.nameTvoritelny,
      bankAccount: item.bankAccount,
      bank: item.bank,
      inn: item.inn,
      kpp: item.kpp,
      landPlace: {
        address: item.landPlace.address,
        area: item.landPlace.area,
        cadastralId: item.landPlace.cadastralId
      },
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
      landPlace: {
        address: data.landPlace.address,
        area: data.landPlace.area,
        cadastralId: data.landPlace.cadastralId
      },
      other: data.other
    }
  }
}
