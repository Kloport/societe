/*global societe, Backbone, JST*/

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.ProjetsviewView = Backbone.View.extend({

		initialize:function(){
			this.render();
		},
		render: function () {
			var source = $('#projets-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.collection.toJSON());
			this.$el.html(html);
		},
		events: {
			'click .projet' : 'showProjet'
		},
		showProjet: function(e) {
			var clicked = $(e.currentTarget);
			var id = clicked.attr("id");
			// var item = this.collection.get(id);
			// var name = item.get("name");
			Backbone.history.navigate("#projet/"+id,true);
		}
	});

})();
