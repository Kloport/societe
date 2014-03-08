/*global societe, Backbone*/

societe.Models = societe.Models || {};

(function () {
	'use strict';

	societe.Models.ProjetModel = Backbone.Model.extend({
		urlRoot: '/projet',
		defaults: {
			id: '0',
			name: 'Proj',
			tags: {}
		},
		initialize: function() {
			console.log('New project created.');
		}
	});

})();
