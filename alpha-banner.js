// if you want the banner off, just comment out the file

var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top well well-sm mrgn-tp-0 mrgn-bttm-0" role="banner"><h2 class="wb-inv">This webpage is in alpha</h2><div class="container"><small><span class="alpha-label"><strong>Alpha</strong></span>&nbsp;&nbsp; This is an experimental version for the Canada Revenue Agency.</small></div></section >');


//Renders search disabled
$('#wb-srch-sub').attr("disabled", true);

//Separate script to null all canada.ca links to a 404 page (including GC menu) and redirect some in menu
$( ".gcweb-menu" ).on( "wb-ready.gcweb-menu", function( event ) {
	$("a[href='https://www.canada.ca/en/services/taxes.html']").attr("href", "https://cra-proto.github.io/sign-in-test/en/services/taxes.html").addClass("prototype");
	$("a[href='https://www.canada.ca/en/services/taxes/income-tax.html']").attr("href", "https://cra-proto.github.io/sign-in-test/en/services/taxes/income-tax.html").addClass("prototype");
	$(".gcweb-menu a:not(.prototype)").attr("href", "https://cra-proto.github.io/sign-in-test/404.html");	
	$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/sign-in-test/404.html");
	$("a[href*='.gc.ca/']").attr("href", "https://cra-proto.github.io/sign-in-test/404.html");
});

//Separate script to null all canada.ca links to a 404 page
$( document ).on( "wb-ready.wb", function( event ) {
	
	$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/sign-in-test/404.html");
$("a[href*='.gc.ca/']").attr("href", "https://cra-proto.github.io/sign-in-test/404.html");
$("#chat-bottom-bar, #gc-pft, .pagedetails details").addClass("hidden");	
});

//Remove visited link design from 404 pages
var visited_link_styling = "<style> a[href='https://cra-proto.github.io/sign-in-test/404.html']:visited{ color:#284162; } </style>"; $('head').append( visited_link_styling );

