import Transformer from './Transformer'

export default class SocialPaymentTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      borrowerId: item.borrowerId,
      category: item.category,
      numberCitizensRegister: item.numberCitizensRegister,
      totalAreaPlaceRegistration: item.totalAreaPlaceRegistration,
      numberRegisteredPersons: item.numberRegisteredPersons,
      provideCitizenArea: item.provideCitizenArea,
      nameRegistrationCertificate: item.nameRegistrationCertificate,
      registrationCertificateNumber: item.registrationCertificateNumber,
      dateRegistrationCertificate: item.dateRegistrationCertificate,
      numberCohabitingFamilyMembers: item.numberCohabitingFamilyMembers,
      familyCertificateReference: item.familyCertificateReference,
      familyCertificateNumber: item.familyCertificateNumber,
      dateCertificateFamily: item.dateCertificateFamily,
      cohabitingFamilyMembers: item.cohabitingFamilyMembers,
      nameCertificateFromBank: item.nameCertificateFromBank,
      numberCertificateFromBank: item.numberCertificateFromBank,
      dateCertificateFromBank: item.dateCertificateFromBank,
      nameEmployer: item.nameEmployer,
      certificateNumberFromWork: item.certificateNumberFromWork,
      dateCertificateFromWork: item.dateCertificateFromWork,
      positionWithIndicationEmployer: item.positionWithIndicationEmployer,
      nameDocumentConfirmingApprovalLoan: item.nameDocumentConfirmingApprovalLoan,
      approvalNumber: item.approvalNumber,
      approvalDate: item.approvalDate,
      categoryRecipientSocialBenefits: item.categoryRecipientSocialBenefits,
      totalAmountSocialPayment: item.totalAmountSocialPayment
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      borrowerId: data.borrowerId,
      category: data.category,
      numberCitizensRegister: data.numberCitizensRegister,
      totalAreaPlaceRegistration: data.totalAreaPlaceRegistration,
      numberRegisteredPersons: data.numberRegisteredPersons,
      provideCitizenArea: data.provideCitizenArea,
      nameRegistrationCertificate: data.nameRegistrationCertificate,
      registrationCertificateNumber: data.registrationCertificateNumber,
      dateRegistrationCertificate: data.dateRegistrationCertificate,
      numberCohabitingFamilyMembers: data.numberCohabitingFamilyMembers,
      familyCertificateReference: data.familyCertificateReference,
      familyCertificateNumber: data.familyCertificateNumber,
      dateCertificateFamily: data.dateCertificateFamily,
      cohabitingFamilyMembers: data.cohabitingFamilyMembers,
      nameCertificateFromBank: data.nameCertificateFromBank,
      numberCertificateFromBank: data.numberCertificateFromBank,
      dateCertificateFromBank: data.dateCertificateFromBank,
      nameEmployer: data.nameEmployer,
      certificateNumberFromWork: data.certificateNumberFromWork,
      dateCertificateFromWork: data.dateCertificateFromWork,
      positionWithIndicationEmployer: data.positionWithIndicationEmployer,
      nameDocumentConfirmingApprovalLoan: data.nameDocumentConfirmingApprovalLoan,
      approvalNumber: data.approvalNumber,
      approvalDate: data.approvalDate,
      categoryRecipientSocialBenefits: data.categoryRecipientSocialBenefits,
      totalAmountSocialPayment: data.totalAmountSocialPayment
    }
  }
}
