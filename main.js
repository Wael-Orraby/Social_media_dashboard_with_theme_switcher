const swhitcher = document.querySelector(".switch");
const checkbox = document.querySelector(".switch input");

const elementsToChange = [
  ...document.querySelectorAll(".card"),
  ...document.querySelectorAll("section h2"),
  ...document.querySelectorAll(".darkcolor"),
  document.querySelector(".attribution"),
  ...document.querySelectorAll(".attribution a"),
];

function setStyles(isChecked) {
  const backgroundColor = isChecked ? "hsl(230, 17%, 14%)" : "";
  const textColor = isChecked ? "hsl(0, 0%, 100%)" : "";
  const cardBackgroundColor = isChecked ? "hsl(228, 28%, 20%)" : "";
  const cardTextColor = isChecked ? "hsl(228, 34%, 66%)" : "";
  const attributionBackgroundColor = isChecked ? "hsl(228, 28%, 20%)" : "";
  const attributionColor = isChecked ? "white" : "";
  const linkColor = isChecked ? "red" : "";
  const mouseenterBackgroundColor = isChecked
    ? "hsl(226, 22%, 27%)"
    : "hsl(232, 32%, 91%)";
  const mouseleaveBackgroundColor = isChecked
    ? "hsl(228, 28%, 20%)"
    : "hsl(227, 47%, 96%)";

  document.body.style.backgroundColor = backgroundColor;
  elementsToChange.forEach((element) => {
    element.style.color = textColor;
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.style.backgroundColor = cardBackgroundColor;
    card.style.color = cardTextColor;
    card.addEventListener("mouseenter", function () {
      card.style.backgroundColor = mouseenterBackgroundColor;
      card.querySelectorAll(".followers").forEach((e) => {
        e.style.backgroundColor = mouseenterBackgroundColor;
      });
    });
    card.addEventListener("mouseleave", function () {
      card.style.backgroundColor = mouseleaveBackgroundColor;
      card.querySelectorAll(".followers").forEach((e) => {
        e.style.backgroundColor = mouseleaveBackgroundColor;
      });
    });
  });
  document.querySelectorAll(".card h2 + p").forEach((e) => {
    e.style.color = cardTextColor;
  });
  document.querySelectorAll(".top p").forEach((e) => {
    e.style.color = cardTextColor;
  });

  document.querySelector(".attribution").style.backgroundColor =
    attributionBackgroundColor;
  document.querySelector(".attribution").style.color = attributionColor;

  document.querySelectorAll(".attribution a").forEach((link) => {
    link.style.color = linkColor;
  });
}

swhitcher.addEventListener("click", () => {
  setStyles(checkbox.checked);
});
