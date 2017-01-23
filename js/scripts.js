//business logic
function TravelLocation(location, time, landmarks, activities) {
  this.theLocation = location;
  this.theTime = time;
  this.theLandmarks = landmarks;
  this.theActivities = activities;
}

TravelLocation.prototype.destination = function() {
  return this.theLocation + " during " + this.theTime;
}

//user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault()

    var inputtedMainLocation = $("input#main-location").val();
    var inputtedTime = $("input#time-of-year").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedActivities = $("input#activities").val();

    var newLocation = new TravelLocation(inputtedMainLocation, inputtedTime, inputtedLandmarks, inputtedActivities);

    $("ul#places").append("<li><span class='place'>" + newLocation.destination() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newLocation.theLocation);
      $(".time-of-year").text(newLocation.theTime);
      $(".landmarks").text(newLocation.theLandmarks);
      $(".activities").text(newLocation.theActivities);
    });

    $("input#main-location").val("");
    $("input#time-of-year").val("");
    $("input#landmarks").val("");
    $("input#activities").val("");

  })
})
