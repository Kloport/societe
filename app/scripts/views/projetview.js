
societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.ProjetviewView = Backbone.View.extend({
		tagName: 'li',
		className: 'projet',
		initialize:function(){
			this.render();
		},
		render: function () {
			var source = $('#projet-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.model.toJSON());
			this.$el.html(html);
		}
	});

})();