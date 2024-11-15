$(function () {
   $("header li").on("click", function () {
      let i = $(this).index();
      console.log(i);
      $("#container")
         .stop()
         .animate({ "margin-top": -i * 100 + "vh" });
   });
});
