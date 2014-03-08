/*global societe, Backbone*/

societe.Models = societe.Models || {};

(function () {
	'use strict';

	societe.Models.TeammateModel = Backbone.Model.extend({
		urlRoot: '/teammate',
		defaults: {
			id: '0',
			name: 'Joe Dohn',
			job: 'designer',
			avatar: '',
			social_accounts: {}
		},
		initialize: function() {
			console.log('New teammate created.');
		}
	});

})();
