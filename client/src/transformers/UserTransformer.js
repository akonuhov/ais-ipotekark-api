import Transformer from './Transformer'

export default class UserTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      fio: item.fio,
      password: item.password,
      dataBirth: item.dataBirth,
      email: item.email,
      position: item.position,
      phone: item.phone,
      employmentDate: item.employmentDate,
      role: item.role,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      fio: data.fio,
      password: data.password,
      dataBirth: data.dataBirth,
      email: data.email,
      position: data.position,
      phone: data.phone,
      employmentDate: data.employmentDate,
      role: data.role,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  }
}
