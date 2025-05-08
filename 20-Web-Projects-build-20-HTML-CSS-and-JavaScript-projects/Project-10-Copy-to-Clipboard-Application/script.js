const button = document.getElementById("copy");
const main_para = document.getElementById("main_para");
const message = document.getElementById("message");

function copyToClipboard(element) {
    navigator.clipboard.writeText(element.textContent)
    .then(()=>{
        message.textContent = "Copied to Clipboard";
        message.classList.add("after-click");
    })
    .catch((error) =>{
        console.log("Unable to copy the data");
    })
    .finally(()=>{
        setTimeout(()=> {
            message.textContent = "Copied to Clipboard";
            message.classList.remove("after-click");
        }, 2000);
    }) ;
}

button.addEventListener("click", ()=> copyToClipboard(main_para));