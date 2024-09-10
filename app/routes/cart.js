import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
    return items;
  }

  //   //   override the setupController hook
  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     const subtotal = model.reduce((acc, item) => acc + item.price, 0);
  //     controller.set('subtotal', subtotal);
  //   }
}
