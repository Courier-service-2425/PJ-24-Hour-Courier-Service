document.getElementById("trackButton").addEventListener("click", function() {
  document.getElementById("trackingSection").style.display = "block";
});

document.getElementById("trackPackage").addEventListener("click", function() {
  let trackingNumber = document.getElementById("trackingNumber").value;
  if (trackingNumber) {
    alert("Tracking package with number: " + trackingNumber);
    // Here you can add logic to call the backend to fetch real-time tracking information.
  } else {
    alert("Please enter a valid tracking number.");
  }
});
