/*global societe, Backbone */

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.VideoviewView = Backbone.View.extend({

		initialize: function() {
			this.render();
		},
		render: function() {
			var source = $('#video-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.model.toJSON());
			this.$el.html(html);
		}


	});

})();
