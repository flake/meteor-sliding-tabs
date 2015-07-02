Template.slidingTabs.helpers({
	cards: function(){
		return [{},{},{},{},{},{},{},{}];
	}
});

Template.slidingTabs.events({
	'onSlideChanged': function(event, template){
		var sindex = event.index;

		$('.profile-tabs a:nth-child(' + (sindex+1) + ')').addClass('active');
		$('.profile-tabs > a').each(function(index){
			if(index !== sindex)
				$(this).removeClass('active');
		});

		var offset = $("a[slind="+sindex+"]").offset();
		var width = $(window).width();
		var tcWidth = $('.profile-tabs').width(); //width of tabs container
		var tabCount = Session.get('tabCount');
		var tabWidth = tcWidth/tabCount;

		var cond1 = (offset.left+tabWidth) > width;
		var cond2 = offset.left < 0;

		if( cond1 || cond2 ){
			// tabs scrolling container
			$('.tabs-scroll-x').animate({
				scrollLeft: tabWidth*(sindex-1)
			});
			console.log("offset.left "+offset.left+" tcWidth: "+tcWidth+" tabWidth: "+tabWidth+" window: "+width);
		}
	}
});

Template.slidingTabs.rendered = function(){
	$('.profile-tabs a:nth-child(1)').addClass('active');
}