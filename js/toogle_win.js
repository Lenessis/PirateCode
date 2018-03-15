$(document).ready
(function()
{
     
     $(".rule_title").click(
          function()
          {
               $(this).next(".rule_description").slideToggle("medium").siblings(".rule_description:visible").slideUp("medium");
               $(this).toogleClass("active");
               $(this).siblings(".rule_title").removeClass("active");
          }
     );
}
);