import Transformer from './Transformer'

export default class BorrowerTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      passportData: {
        fioImenitelny: item.passportData.fioImenitelny,
        fioRoditelny: item.passportData.fioRoditelny,
        fioDatelny: item.passportData.fioDatelny,
        fioTvoritelny: item.passportData.fioTvoritelny,
        dateBirth: item.passportData.dateBirth,
        gender: item.passportData.gender,
        passportSeries: item.passportData.passportSeries,
        passportId: item.passportData.passportId,
        issuedBy: item.passportData.issuedBy,
        unitCode: item.passportData.unitCode,
        placeBirth: item.passportData.placeBirth
      },
      share: {
        shareInOwnership: item.share.shareInOwnership
      },
      contactData: {
        phoneHome: item.contactData.phoneHome,
        phoneService: item.contactData.phoneService,
        phoneMobile: item.contactData.phoneMobile,
        email: item.contactData.email
      },
      bankData: {
        accountNumber: item.bankData.accountNumber,
        requisites: item.bankData.requisites
      },
      incomeData: {
        basic: item.incomeData.basic,
        basicDeduction: item.incomeData.basicDeduction,
        partTime: item.incomeData.partTime,
        partTimeDeduction: item.incomeData.partTimeDeduction,
        pension: item.incomeData.pension,
        pensionDeduction: item.incomeData.pensionDeduction
      },
      aggregateExpense: item.aggregateExpense,
      placeRegistration: {
        subject: item.placeRegistration.subject,
        district: item.placeRegistration.district,
        typeSettlement: item.placeRegistration.typeSettlement,
        locality: item.placeRegistration.locality,
        typeRoad: item.placeRegistration.typeRoad,
        nameRoad: item.placeRegistration.nameRoad,
        houseNumber: item.placeRegistration.houseNumber,
        housing: item.placeRegistration.housing,
        apartmentNumber: item.placeRegistration.apartmentNumber
      },
      placeResidence: {
        subject: item.placeResidence.subject,
        district: item.placeResidence.district,
        typeSettlement: item.placeResidence.typeSettlement,
        locality: item.placeResidence.locality,
        typeRoad: item.placeResidence.typeRoad,
        nameRoad: item.placeResidence.nameRoad,
        houseNumber: item.placeResidence.houseNumber,
        housing: item.placeResidence.housing,
        apartmentNumber: item.placeResidence.apartmentNumber
      }
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      passportData: {
        fioImenitelny: data.passportData.fioImenitelny,
        fioRoditelny: data.passportData.fioRoditelny,
        fioDatelny: data.passportData.fioDatelny,
        fioTvoritelny: data.passportData.fioTvoritelny,
        dateBirth: data.passportData.dateBirth,
        gender: data.passportData.gender,
        passportSeries: data.passportData.passportSeries,
        passportId: data.passportData.passportId,
        issuedBy: data.passportData.issuedBy,
        unitCode: data.passportData.unitCode,
        placeBirth: data.passportData.placeBirth
      },
      share: {
        shareInOwnership: data.share.shareInOwnership
      },
      contactData: {
        phoneHome: data.contactData.phoneHome,
        phoneService: data.contactData.phoneService,
        phoneMobile: data.contactData.phoneMobile,
        email: data.contactData.email
      },
      bankData: {
        accountNumber: data.bankData.accountNumber,
        requisites: data.bankData.requisites
      },
      incomeData: {
        basic: data.incomeData.basic,
        basicDeduction: data.incomeData.basicDeduction,
        partTime: data.incomeData.partTime,
        partTimeDeduction: data.incomeData.partTimeDeduction,
        pension: data.incomeData.pension,
        pensionDeduction: data.incomeData.pensionDeduction
      },
      aggregateExpense: data.aggregateExpense,
      placeRegistration: {
        subject: data.placeRegistration.subject,
        district: data.placeRegistration.district,
        typeSettlement: data.placeRegistration.typeSettlement,
        locality: data.placeRegistration.locality,
        typeRoad: data.placeRegistration.typeRoad,
        nameRoad: data.placeRegistration.nameRoad,
        houseNumber: data.placeRegistration.houseNumber,
        housing: data.placeRegistration.housing,
        apartmentNumber: data.placeRegistration.apartmentNumber
      },
      placeResidence: {
        subject: data.placeResidence.subject,
        district: data.placeResidence.district,
        typeSettlement: data.placeResidence.typeSettlement,
        locality: data.placeResidence.locality,
        typeRoad: data.placeResidence.typeRoad,
        nameRoad: data.placeResidence.nameRoad,
        houseNumber: data.placeResidence.houseNumber,
        housing: data.placeResidence.housing,
        apartmentNumber: data.placeResidence.apartmentNumber
      }
    }
  }
}
