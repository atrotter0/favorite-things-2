function getData() {
  var favStuff = [];
  $("input").each(function(index, item) {
    favStuff.push($(item).val());
  });
  console.log(favStuff);
  return favStuff;
}

function displayResult(array) {
  array.forEach(function(result) {
    $("#allResults").append("<li class='listItem'>" + result + "</li>");
  });
}

$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    $(".listItem").remove();
    var results = getData();
    displayResult(results);
  });
});
