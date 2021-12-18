const mainImage = document.querySelector(".site-main__aside__head-image");
const modal = document.querySelector(".modal");
const modalMainImage = document.querySelector(".modal__head-image");
const exitModal = document.querySelector(".modal__exit-wrapper");
const previousModalMainImage = document.querySelector(".modal__previous-image-wrapper");
const nextModalMainImage = document.querySelector(".modal__next-image-wrapper");
const srcs = {
    mainImageSrcs: Array.from({ length: 4 }, (_, i) => `./images/image-product-${i + 1}.jpg`),
    miniaturesSrcs: document.querySelectorAll(".miniature"),
    modalMiniaturesSrcs: document.querySelectorAll(".modal-miniature"),
    navLinksSrcs: document.querySelectorAll(".site-nav__links-link"),
};
let modalMainIndex = 0;
let count = 0;

const changeHighlight = (
    activatingElements,
    activeClass,
    swapableSrcs,
    mainImage
) => {
    activatingElements.forEach((element, i) => {
        element.addEventListener("click", () => {
            mainImage && mainImage.setAttribute("src", swapableSrcs[i]);

            activatingElements.forEach((miniature) => {
                miniature.classList.remove(activeClass);
            });

            element.classList.add(activeClass);
        });
    });
};

changeHighlight(
    srcs.miniaturesSrcs,
    "miniature-active",
    srcs.mainImageSrcs,
    mainImage,
);

changeHighlight(
    srcs.navLinksSrcs,
    "link-active"
);

changeHighlight(
    srcs.modalMiniaturesSrcs,
    "modal-miniature-active",
    srcs.mainImageSrcs,
    modalMainImage,
);

mainImage.addEventListener("click", () => {
    modal.classList.remove("modal-invisible")
});

exitModal.addEventListener("click", () => {
    modal.classList.add("modal-invisible")
})


previousModalMainImage.addEventListener("click", () => {
    modalMainIndex -= 1;
    modalMainIndex = Math.max(modalMainIndex, 0);

    srcs.modalMiniaturesSrcs.forEach((miniature) => {
        miniature.classList.remove("modal-miniature-active");
    });

    srcs.modalMiniaturesSrcs[modalMainIndex].classList.add("modal-miniature-active");
    modalMainImage.setAttribute("src", srcs.mainImageSrcs[modalMainIndex]);
})

nextModalMainImage.addEventListener("click", () => {
    modalMainIndex += 1;
    modalMainIndex = Math.min(modalMainIndex, 3);

    srcs.modalMiniaturesSrcs.forEach((miniature) => {
        miniature.classList.remove("modal-miniature-active");
    });

    srcs.modalMiniaturesSrcs[modalMainIndex].classList.add("modal-miniature-active");

    modalMainImage.setAttribute("src", srcs.mainImageSrcs[modalMainIndex]);
})

const decrementButton = document.querySelector(
    ".site-main__content-user-actions__amount-remove"
);
const incrementButton = document.querySelector(
    ".site-main__content-user-actions__amount-add"
);
const amount = document.querySelector(
    ".site-main__content-user-actions__amount-current"
    );

const updateDisplay = () => {
    amount.textContent = `${count}`;
};

const makeClickHandler = (delta) => () => {
    count += delta;
    count = Math.max(count, 0);
    updateDisplay();
}
incrementButton.addEventListener("click", makeClickHandler(1));
decrementButton.addEventListener("click", makeClickHandler(-1));
