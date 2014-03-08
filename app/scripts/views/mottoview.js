/*global societe, Backbone, JST*/

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.MottoviewView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function() {
			var source = $('#motto-template').html();
			var template = Handlebars.compile(source);
			var html = template();
			this.$el.html(html);
		}

	});

})();
