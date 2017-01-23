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
