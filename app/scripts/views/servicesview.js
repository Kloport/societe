/*global societe, Backbone, JST*/

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.ServicesviewView = Backbone.View.extend({
		initialize:function(){
			this.render();
		},
		render: function () {
			var source = $('#services-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.collection.toJSON());
			this.$el.html(html);
		},
		events: {
			'click .servicename' : 'showService'
		},
		showService: function(e) {
			var clicked = $(e.currentTarget);
			var id = clicked.attr("id");
			// var item = this.collection.get(id);
			// var name = item.get("name");
			Backbone.history.navigate("#membre/"+id,true);
		}
	}
	);

})();
