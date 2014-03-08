/*global societe, Backbone*/

societe.Collections = societe.Collections || {};

(function () {
	'use strict';

	societe.Collections.ServicesCollection = Backbone.Collection.extend({

		model: societe.Models.ServiceModel,
		initialize: function() {
			console.log('New services collection.');
		}

	});

})();
