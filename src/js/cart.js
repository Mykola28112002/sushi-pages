(() => {
  const priceSum = document.querySelector(".fullprice");
  const printFullprice = document.querySelector(".print_fullprice");
  
  
 
  const refs = {
    openModalBtn: document.querySelector("[data-modal-opens]"),
    closeModalBtn: document.querySelector("[data-modal-closes]"),
    modal: document.querySelector("[data-modals]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalsss);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function toggleModalsss() {
    printFullprice.textContent = priceSum.textContent;
    refs.modal.classList.toggle("is-hidden");
  }
})();