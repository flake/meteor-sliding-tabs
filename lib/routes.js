Router.configure({
	layoutTemplate: 'appLayout',
    loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.map(function(){
	this.route('home', {
		path: '/',
		template: 'slidingTabs'
	});
});