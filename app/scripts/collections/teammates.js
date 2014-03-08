/*global societe, Backbone*/

societe.Collections = societe.Collections || {};

(function () {
	'use strict';

	societe.Collections.TeammatesCollection = Backbone.Collection.extend({

		model: societe.Models.TeammateModel,
		initialize: function() {
			console.log('New teammates collection.');
		}

	});

})();
