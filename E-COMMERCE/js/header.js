const sidebarFunction=()=>{
    //! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");

//* click open sidebar
btnOpenSidebar.addEventListener("click", () => {
  sidebar.style.left = "0";
});
//* click open sidebar

//* click to close sidebar x
btnCloseSidebar.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
//* click to close sidebar x

//* click to close except sidebar
document.addEventListener("click", (event) => {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});
//* click to close except sidebar

//! home sidebar end
}

const searchModalFunction=()=>{
    //! search model start
const btnOpenSearch = document.querySelector(".search-button");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
const btnCloseModalSearch = document.getElementById("close-search");

//* click to open moda search
btnOpenSearch.addEventListener("click", () => {
  modalSearch[0].style.visibility = "visible";
  modalSearch[0].style.opacty = "1";
});
//* click to open moda search

//*click to close modal search x
btnCloseModalSearch.addEventListener("click", () => {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacty = "0";
});
//*click to close modal search x

//*click outside to close modal search
document.addEventListener("click", (event) => {
  if (
    !event.composedPath().includes(modalSearchWrapper[0]) &&
    !event.composedPath().includes(btnOpenSearch)
  ) {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacty = "0";
  }
});
//*click outside to close modal search

//! search model end
}

const headerFunction= ()=>{
    sidebarFunction();
    searchModalFunction();
}

export default headerFunction();