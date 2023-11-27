window.onload = function () {
  setTimeout(function () {
    var airplaneElement = document.getElementById("airplane");
    var mainElement = document.getElementsByTagName("main")[0];
    // Remove the 'display: none' from the airplane element to make it visible
    airplaneElement.setAttribute("hidden", "");
    mainElement.removeAttribute("hidden");

    console.log("It works");

    // Optionally, hide the body content, but this will hide everything including the airplane
    // bodyElement.style.display = "none";
  }, 3 * 1000); // 4000 milliseconds = 4 seconds
};
