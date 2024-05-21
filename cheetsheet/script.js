const titleHeads = document.querySelectorAll("h1");
const order = document.querySelectorAll("ol");

titleHeads.forEach((title, index) => {
  title.addEventListener("click", function () {
    console.log("hello");
    let lst = order[index];
    if (lst.style.maxHeight = "50vh") {
      lst.style.maxHeight = null;
    } else {
      lst.style.maxHeight = "70vh";
    }
  });
});
