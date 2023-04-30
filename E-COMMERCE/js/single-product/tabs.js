export function tabsFunction() {
  const btnTab = document.querySelectorAll(".tab-button");
  const contentDOM = document.querySelectorAll(".content");
  const tabsWrapper = document.querySelector(".tab-list");

  tabsWrapper.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      btnTab.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");
      contentDOM.forEach((element) => {
        element.classList.remove("active")
      });
      const element = document.getElementById(id);
      element.classList.add("active")
    }
  });
}

tabsFunction();
