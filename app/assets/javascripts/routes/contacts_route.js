WikiEmber.ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  }

});
