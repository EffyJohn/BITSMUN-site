let cards = document.getElementsByClassName("committees__card");
let data = document.getElementsByClassName("committees__data");
let subheadingDefault = document.getElementsByClassName(
  "details__subheading--default"
)[0];
let subheadingClose = document.getElementsByClassName(
  "details__subheading--close"
)[0];

function Hide(element) {
  setTimeout(function () {
    element.classList.add("hidden");
    element.classList.remove("process");
  }, 1000);
}

for (card of cards) {
  card.addEventListener("click", function () {
    for (currCard of cards) {
      if (currCard != this) {
        currCard.classList.add("process");
        Hide(currCard);
      }
    }

    let datum = document.getElementsByClassName(this.id)[0];
    setTimeout(function () {
      datum.classList.add("active");
    }, 1000);

    subheadingDefault.classList.add("hidden");
    subheadingClose.classList.add("active");
  });
}

subheadingClose.addEventListener("click", function () {
  for (card of cards) {
    if (card.classList.contains("hidden")) {
      card.classList.add("process");
      card.classList.remove("hidden");
      card.classList.remove("process");
    }
  }

  for (datum of data) {
    if (datum.classList.contains("active")) {
      datum.classList.remove("active");
    }
  }

  subheadingDefault.classList.remove("hidden");
  subheadingClose.classList.remove("active");
});

setTimeout(console.clear, 2000);
