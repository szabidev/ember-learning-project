import Controller from '@ember/controller';

export default class CartController extends Controller {
  //  properties to pass to the template
  get subtotal() {
    return this.model.reduce((acc, item) => acc + item.price, 0);
  }
  get tax() {
    return this.subtotal * 0.9;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}
