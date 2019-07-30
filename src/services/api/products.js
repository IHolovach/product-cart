import Config from '../../config';
import { getRequest } from '../requests';

export default class ProductsService {
  static async getProducts() {
    try {
      return await getRequest(Config.api.products);
    } catch (err) {
      return err;
    }
  }
}
