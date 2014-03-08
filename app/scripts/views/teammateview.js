/*global societe, Backbone */

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.TeammateviewView = Backbone.View.extend({
		tagName: 'li',
		className: 'teammate',
		initialize:function(){
			this.render();
		},
		render: function () {
			var source = $('#teammate-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.model.toJSON());
			this.$el.html(html);
		}
	});

})();
