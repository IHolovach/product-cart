import Config from '../../config';
import { getRequest } from '../requests';

export default class SkuService {
  static async getSku() {
    try {
      return await getRequest(Config.api.sku);
    } catch (err) {
      return err;
    }
  }
}
