const toggleDisplay = (element, style) => {
  element.style.display = style;
};

const figures = document.querySelectorAll("figure[data-figure-id]");

for (let i = 0; i < figures.length; i++) {
  figures[i].addEventListener("mouseover", (event) => {
    event.preventDefault();

    const { figureId } = figures[i].dataset;

    const photoLabel = document.querySelector(
      `figure[data-figure-id='${figureId}']>.figure-label`
    );
    toggleDisplay(photoLabel, "block");

    const photoButton = document.querySelector(
      `figure[data-figure-id='${figureId}']>.figure-button`
    );
    toggleDisplay(photoButton, "block");
  });

  figures[i].addEventListener("mouseleave", (event) => {
    event.preventDefault();

    const { figureId } = figures[i].dataset;

    const photoLabel = document.querySelector(
      `figure[data-figure-id='${figureId}']>.figure-label`
    );
    toggleDisplay(photoLabel, "none");

    const photoButton = document.querySelector(
      `figure[data-figure-id='${figureId}']>.figure-button`
    );
    toggleDisplay(photoButton, "none");
  });
}
