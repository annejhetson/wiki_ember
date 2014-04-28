WikiEmber.EditContactController = Ember.ObjectController.extend({
  actions: {
    updateContact: function() {
      var model = this.get('model');
      var controller = this;

      model.save()
      .then(function() {
        controller.transitionToRoute('contact', model);
      })
      .catch(function() {
        alert("Fix these problems")
      });
    }
  }
});
