/*global societe, Backbone*/

societe.Collections = societe.Collections || {};

(function () {
	'use strict';

	societe.Collections.ProjetsCollection = Backbone.Collection.extend({

		model: societe.Models.ProjetModel,
		initialize: function() {
			console.log('New projets collection.');
		}

	});

})();
