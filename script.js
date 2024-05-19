<script type="text/javascript">
  $(function(){
    $("#menu a").click(function(e){
      e.preventDefault();
      var target = $(this.hash);
      var headerHeight = $("#menu").outerHeight(); // Get the height of the fixed header
      var targetOffset = target.offset().top - headerHeight; // Adjust the target offset by subtracting the header height
      $('html, body').animate({scrollTop: targetOffset}, 500);
    });
  });
</script>