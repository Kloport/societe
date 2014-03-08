/*global societe, Backbone*/

societe.Models = societe.Models || {};

(function () {
	'use strict';

	societe.Models.ServiceModel = Backbone.Model.extend({
		defaults: {
			id: '0',
			title: 'designer',
			picture: '',
			description: ''
		},
		initialize: function() {
			//console.log(videoId);
		}
	});

})();
