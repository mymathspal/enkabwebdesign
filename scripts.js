const bookCallBtns = document.querySelectorAll(".call");
const bookCallTemplate = document.querySelector(".bookCallTemplate");
const templateClone = bookCallTemplate.content.cloneNode(true);
document.querySelector(".body").appendChild(templateClone);
const bookCallModal = document.querySelector(".bookCallModal");
const closeFormBtn = document.querySelector(".closeFormBtn");

function bookCall(event){
    bookCallModal.showModal();
}

function closeBtn(){
    bookCallModal.close();
}

function validateName(){

}

function validateEmail(){

}

function telNumber(){

}

function submitBookCallForm(event){
    if(event.type === "click"){
        event.preventDefault()
    }
    return;
    
}

function submitEnquiryForm(event){
    if(event.type === "click"){
        event.preventDefault()
    }
    return;
}





// const bookCall = (event) => {
//     bookCallModal.showModal();
//     // console.log(event);
//     // if(event.type === "click"){
//     //     event.preventDefault()
//     //      console.log("default");
//     // }
//     // console.log("book call btn clicked");
// }


// const closeBtn = () => {
//     // bookCallModal.style.display="none";
//     bookCallModal.close();
// }