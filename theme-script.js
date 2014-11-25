/************************************************
Tumblr loops images inside paragraph -element
when rendering text posts.

This script removes "p" -tags around "img" -tag
************************************************/

var imgTags =  $("img");

$(document).ready(function(){
	if ( imgTags.parent().is( "p" ) ) {
		imgTags.unwrap();
	} else {
		
	}
});
