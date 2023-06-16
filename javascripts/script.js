function getWindowScrollHandler(previousScrollState) {
  const scrollConstant = 0.5;
  const buildingImage = document.getElementById("description");
  return function(event) {
    console.log(document.documentElement.scrollTop - previousScrollState);
    buildingImage.scrollTop += scrollConstant * (document.documentElement.scrollTop - previousScrollState);
    previousScrollState = document.documentElement.scrollTop;
  }
}

var previousScrollState = 0;
window.addEventListener('scroll', getWindowScrollHandler(previousScrollState));
