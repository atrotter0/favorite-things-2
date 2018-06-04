function getData() {
  var favStuff = [];
  $("input").each(function(index, item) {
    favStuff.push($(item).val());
  });
  console.log(favStuff);
  return favStuff;
}

function displayResult(array) {
  for(i = 0; i < array.length; i++) {
    $("#allResults").append("<li class='listItem'>" + array[i] + "</li>");
  }
}

$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    $(".listItem").remove();
    var results = getData();
    displayResult(results);
  });
});
