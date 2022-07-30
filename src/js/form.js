const formRef = document.querySelector(".js-speaker-form");
const formBtn = document.querySelector(".form__btn-order");

formRef.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const nameRef = e.currentTarget.userName.value;
    const telRef = e.currentTarget.tel.value;
    const mailRef = e.currentTarget.mail.value;
    const commentRef = e.currentTarget.comment.value;

    const liRef = e.currentTarget.parentNode.querySelector(".product");
    // const ulOnner = ulRef.innerHTML
    console.log(nameRef)
    console.log(telRef)
    console.log(mailRef)
    console.log(commentRef)
    console.log(liRef)
    
})