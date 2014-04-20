$(document).ready(function(){
	var a = new Showdown.converter();
	$.get("home.md",function(resp) {
    	$("main").html(a.makeHtml(resp));
	});
	$("a#home-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("home.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
	$("a#devices-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("devices.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
	$("a#changelog-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("changelog.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
	$("a#downloads-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("downloads.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
	$("a#source-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("source.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
	$("a#projects-link").click(function(){
		$("main").fadeOut(500,function(){
			$.get("projects.md",function(resp) {
    			$("main").html(a.makeHtml(resp));
			});
		}).fadeIn(500);
	});
});