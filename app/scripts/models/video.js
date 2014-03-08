/*global societe, Backbone*/

societe.Models = societe.Models || {};

(function () {
	'use strict';

	societe.Models.VideoModel = Backbone.Model.extend({
		defaults: {
			0: {},
			id: '0',
			url: 'Joe Dohn',
			title: 'designer',
			thumbnail_medium: 'tn'
		},
		urlRoot: 'http://vimeo.com/api/v2/video/59908384.json', //+ this.attributes.videoId +
		initialize: function() {
			//console.log(videoId);
		}
	});

})();
