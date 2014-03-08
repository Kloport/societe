window.societe = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
		'use strict';
		console.log('Hello from Backbone!');
	}
};

$(document).ready(function () {
	'use strict';
	societe.init();
	var approuter = new societe.Routers.ApprouterRouter();
	Backbone.history.start();

	$('ul.nav > li').click(function() {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	});

});