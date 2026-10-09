const detailsLink = document.getElementById("detailsLink");
const correction = document.getElementById("correction");
const closeCorrection = document.getElementById("closeCorrection");

detailsLink.addEventListener("click", (event) => {
  event.preventDefault();
  correction.hidden = !correction.hidden;
  detailsLink.innerHTML = correction.hidden
    ? 'VIEW CORRECTION <span>↗</span>'
    : 'HIDE CORRECTION <span>↘</span>';
});

closeCorrection.addEventListener("click", () => {
  correction.hidden = true;
  detailsLink.innerHTML = 'VIEW CORRECTION <span>↗</span>';
});
