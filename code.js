
let share_btn = document.querySelectorAll(".share-btn");

let share_box_desktop = document.querySelector(".share-details-desktop");

let share_box_mobile = document.querySelector(".share-details-mobile");

let user = document.querySelector('.user');

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);


share_btn.forEach(element => {
    element.addEventListener("click", () => {

        if (window.innerWidth >= 850) {
            toggle(share_box_desktop, "hidden");
        }

        else {
            toggle(user, "hidden")
            toggle(share_box_mobile, "hidden");
        }

    })
});

