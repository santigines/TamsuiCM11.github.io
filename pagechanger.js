$(document).ready(function(){
	$('a[href^="#"]').on("click",function(e){
		loadPage($(this).attr("href").substr(1));
	});
	var d = setTimeout(loadBeginPage,1);
});
function loadBeginPage(){
	if($(":target").length) {
		loadPage($(":target").attr("id"));
	}
	else { loadPage("home"); window.location.href="#home"; }
}
function loadPage(page) {
	var showdown = new Showdown.converter();
	$.get(page+".md",function(resp) { 
		$("main").html(showdown.makeHtml(resp)); 
	});
}
/*
I henceforth declare,
it is difficult to know,
what above code says.
*/