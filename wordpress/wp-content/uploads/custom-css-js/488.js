<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">



$(document).ready(function(){
$('table').replaceTag('div');

(function( $ ) {
  $.fn.replaceTag = function(newTag) {
    var originalElement = this[0]
    , originalTag = originalElement.tagName
    , startRX = new RegExp('^<'+originalTag, 'i')
    , endRX = new RegExp(originalTag+'>$', 'i')
    , startSubst = '<'+newTag
    , endSubst = newTag+'>'
    , newHTML = originalElement.outerHTML
    .replace(startRX, startSubst)
    .replace(endRX, endSubst);
    this.replaceWith(newHTML);
  };
}
})(jQuery);</script>
<!-- end Simple Custom CSS and JS -->
