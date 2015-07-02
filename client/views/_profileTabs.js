Template._profileTabs.events({
	'click .profile-tabs > a': function(event){
		var sindex = $(event.currentTarget).attr('slind');

		$('.ion-slide-box').slick('slickGoTo', sindex);
	}
});

Template._profileTabs.rendered = function(){
	var no_of_tabs = $('.profile-tabs').children().length;

	var windowWidth = $(window).width();
	var tabWidth = windowWidth * 0.3;
	var tcWidth = tabWidth * no_of_tabs; // tabs container

	$('.profile-tabs').css("width", tcWidth+"px");
	Session.set('tabCount', no_of_tabs);
}