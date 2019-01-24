import Transformer from './Transformer'

export default class DocumentTransformer extends Transformer {
  static fetch (data) {
    return data.map(item => ({
      _id: item._id,
      name: item.name,
      text: item.text
    }))
  }
  static send (data) {
    return {
      _id: data._id,
      name: data.name,
      text: data.text
    }
  }
}
