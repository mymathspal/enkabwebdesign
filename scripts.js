
const bookCall = (event) => {
    console.log(event);
    if(event.type === "click"){
        event.preventDefault()
         console.log("default");
    }
    console.log("book call btn clicked");
}

const selectPrice = (event) =>{
    console.log("price selected");
}


const submitContactForm = (event) => {
    console.log("contact form clicked");

}