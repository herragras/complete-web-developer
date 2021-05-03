function updatedOutput() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type='text/css'>" +
        $("#cssPanel").val() +
        "</style></head><body>" +
        $("#htmlPanel").val() +
        "</bod></html>"
    );
  document
    .getElementById("outputPanel")
    .contentWindow.eval($("#javascriptPanel").val());
}

$(".toggleButton").hover(
  function () {
    $(this).addClass("selected");
  },
  function () {
    $(this).removeClass("selected");
  }
);
$(".toggleButton").click(function () {
  $(this).toggleClass("active");
  $(this).removeClass("selected");
  var panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");
  var numberOfActivePanel = 4 - $(".hidden").length;
  $(".panel").width($(window).width() / numberOfActivePanel - 10);
});
$(".panel").height($(window).height() - $("#header").height() - 15);
$(".panel").width($(window).width() / 2 - 10);
updatedOutput();

$("textarea").on("change keyup paste", function () {
  updatedOutput();
});
