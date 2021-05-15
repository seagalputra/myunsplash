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

    photoButton.addEventListener("click", () => {
      const modal = document.querySelector("#modal-delete-container");
      modal.style.display = "block";

      const deleteForm = modal.querySelector("form");
      deleteForm.setAttribute("action", `/photos/${figureId}`);

      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    });
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

const addPhotoButton = document.querySelector("#add-photo");
addPhotoButton.addEventListener("click", () => {
  const modal = document.querySelector("#modal-add-container");
  modal.style.display = "block";

  const body = document.querySelector("body");
  body.style.overflow = "hidden";
});

const cancelModalButton = document.querySelector("#cancel-add-modal");
cancelModalButton.addEventListener("click", () => {
  const modal = document.querySelector("#modal-add-container");
  modal.style.display = "none";

  const body = document.querySelector("body");
  body.style.overflow = null;
});

const cancelDeleteButton = document.querySelector("#cancel-delete-modal");
cancelDeleteButton.addEventListener("click", () => {
  const modal = document.querySelector("#modal-delete-container");
  modal.style.display = "none";

  const body = document.querySelector("body");
  body.style.overflow = null;
});
