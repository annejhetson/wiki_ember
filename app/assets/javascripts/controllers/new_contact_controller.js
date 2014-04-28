WikiEmber.NewContactController = Ember.ObjectController.extend({
  actions: {
    createContact: function() {
      var model = this.get('model');
      var controller = this;

      model.save()
      .then(function() {
        controller.transitionToRoute('contact');
      })
      .catch(function() {
        alert("Fix these problems")
      });
    }
  }
});
