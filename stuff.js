$(document).ready(function(){
	var a = new Showdown.converter();
	$.get("home.md",function(resp) {
    	$("main").html(a.makeHtml(resp));
	});
	$("a#home-link").click(function(){
		loadPage("home")
	});
	$("a#devices-link").click(function(){
		loadPage("devices");
	});
	$("a#changelog-link").click(function(){
		loadPage("changelog");
	});
	$("a#downloads-link").click(function(){
		loadPage("downloads");
	});
	$("a#source-link").click(function(){
		loadPage("source");
	});
	$("a#projects-link").click(function(){
		loadPage("projects");
	});
	function loadPage(page) {
		$.get(page+".md",function(resp){
				$("main").fadeOut(500).html(a.makeHtml(resp)).fadeIn(500);
		});
	}
});
