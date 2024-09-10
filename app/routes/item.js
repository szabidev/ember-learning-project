import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  // add the model hook to fetch the item with the given id
  model(params) {
    const { item_id } = params;
    return item_id;
  }
}
