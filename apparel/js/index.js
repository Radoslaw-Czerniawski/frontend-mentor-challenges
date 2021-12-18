const form = document.querySelector(".content-main_form");
const menu = document.querySelector(".logo-menu");
const menuBody = document.querySelector(".menu-list");

const toggleMenu = () => {
    if(menu.getAttribute("class").includes("logo-inactive")) {
        menu.classList.remove("logo-inactive");
        menuBody.classList.remove("list-hidden");
    } else {
        menu.classList.add("logo-inactive");
        menuBody.classList.add("list-hidden");
    }
}

menu.addEventListener("click", () => toggleMenu());

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = document.querySelector(".content-main_form-input").value.trim();

    const errors = [];
    errors[0] = document.querySelector(".content-main_error-message");
    errors[1] = document.querySelector(".content-main_form-error-image");

    if (inputValue === "" || !isEmail(inputValue)) {
        for (const error of errors) {
            error.classList.add("visible");
            error.classList.remove("hidden");
        }
        form.classList.add("error");
        form.classList.remove("normal");
    } else {
        for (const error of errors) {
            error.classList.remove("visible");
            error.classList.add("hidden");
        }
        form.classList.remove("error");
        form.classList.add("normal");
    }
});

const isEmail = (email) => {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    ));
};
