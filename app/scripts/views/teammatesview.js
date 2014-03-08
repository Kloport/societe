/*global societe, Backbone, JST*/

societe.Views = societe.Views || {};

(function () {
	'use strict';

	societe.Views.TeammatesviewView = Backbone.View.extend({

		initialize:function(){
			this.render();
		},
		render: function () {
			var source = $('#teammates-template').html();
			var template = Handlebars.compile(source);
			var html = template(this.collection.toJSON());
			this.$el.html(html);
		},
		events: {
			'click .matename' : 'showMember'
		},
		showMember: function(e) {
			var clicked = $(e.currentTarget);
			var id = clicked.attr("id");
			// var item = this.collection.get(id);
			// var name = item.get("name");
			Backbone.history.navigate("#membre/"+id,true);
		}
	});

})();
