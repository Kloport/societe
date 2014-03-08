/*global societe, Backbone*/

societe.Routers = societe.Routers || {};

(function () {
	'use strict';

	societe.Routers.ApprouterRouter = Backbone.Router.extend({
		routes: {
			"": "index",
			"services": "services",
			"projets": "projets",
			"projet/:id": "projet",
			"equipe": "equipe",
			"membre/:id": "membre",
			"journal": "journal"
		},
		index: function() {
			var mottoview = new societe.Views.MottoviewView({ el: $("#front") });
			console.log("Welcome to your / route.");
		},
		services: function() {
			var video = new societe.Models.ServiceModel({id: '1', title:'Vidéo', description: 'Blah', picture: 'star.jpg'});
			var webdev = new societe.Models.ServiceModel({id: '2', title:'Développement web', description: 'Blah', picture: 'cqtr.png'});
			var anim = new societe.Models.ServiceModel({id: '3', title:'Anim', description: 'Blah', picture: 'cqtr.png'});
			var services = new societe.Collections.ServicesCollection();
			services.set([video, webdev, anim]);
			var servicesview = new societe.Views.ServicesviewView({ el: $("#front"), collection: services });
			console.log("Welcome to your /services route.");
		},
		projets: function() {
			// var showreel = new societe.Models.VideoModel();
			// 	showreel.fetch().complete(function(){
			// 	var videoview = new societe.Views.VideoviewView({el: $("#front"), model: showreel})
			// 	});

			var addict = new societe.Models.ProjetModel({id: 'addict', title:'Addict', tags:{1:'this', 2:'that'}});
			var myverbier = new societe.Models.ProjetModel({id: 'myverbier', title:'MyVerbier', tags:{1:'this', 2:'that'}});

			var projets = new societe.Collections.ProjetsCollection();
			projets.set([addict,myverbier]);
			var projetsview = new societe.Views.ProjetsviewView({el: $("#front"), collection: projets });
			console.log("Welcome to your /projets route.");
		},
		projet: function() {
			var myverbier = new societe.Models.ProjetModel({
				id: 'myverbier',
				title:'MyVerbier',
				tags: {}
			});
			var projetview = new societe.Views.ProjetviewView({ el: $("#front"), model: myverbier });
		},
		equipe: function() {

			var yannick = new societe.Models.TeammateModel({id: 'yannick', name:'Yannick Saraillon', job:'développeur', social_accounts: {twitter:'@societeecrandev'}});
			var alex = new societe.Models.TeammateModel({id: 'alex', name:'Alexandre Bugnon', job:'manager'});
			var delph = new societe.Models.TeammateModel({id: 'delph', name:'Delphine', job:'illusioniste papillon',social_accounts: {twitter:'@societeecrandev'}});
			var team = new societe.Collections.TeammatesCollection();
			team.set([yannick, alex,delph]);
			var teammatesview = new societe.Views.TeammatesviewView({ el: $("#front"), collection: team });
			console.log("Welcome to your /equipe route.");
		},
		membre: function() {
			var yannick = new societe.Models.TeammateModel({
				id: 'yannick',
				name:'Yannick Saraillon',
				job:'développeur',
				social_accounts: {twitter:'@societeecrandev'},
				avatar: 'se.jpg'
			});
			// var alex = new societe.Models.TeammateModel({id: 'alex', name:'Alexandre Bugnon', job:'manager'});
			// var team = new societe.Collections.TeammatesCollection();
			// team.set([yannick, alex]);

			// var pathname =  $(location).attr('href');
			// var path_array = pathname.split("/");
			// var id = path_array.pop();

			// var item = team.get(id);

			var teammateview = new societe.Views.TeammateviewView({ el: $("#front"), model: yannick });
			console.log("Welcome to your /membre route.");
		},
		journal: function() {
			console.log("Welcome to your /journal route.");
		}
	});

})();