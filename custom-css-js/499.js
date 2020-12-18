<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

var min_w = 300;
var vid_w_orig;
var vid_h_orig;


$(document).ready(function($){
  
  $(".comments-anchor").click(function () {
     console.log("Ting sker");
    window.scrollTo(0, 900); 
    
});
    
 
  if ( $("body").hasClass("page-id-6") == true) {
    
    console.log($(".page-id-6"));

    $("video").show();
  
  }
    
    else { 
      
      $("video").hide();
}

  
  
});
</script>
<!-- end Simple Custom CSS and JS -->
