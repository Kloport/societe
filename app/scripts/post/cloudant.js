<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script>
$(document).ready(function() {
	$.post( "https://societeecran.cloudant.com/_session?name=societeecran&password=79sXWUgMan1ScYOp", function( data ) {
  $('#res').html( data );
});
});
<script>

<div id="res"></div>
