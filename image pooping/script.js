const throttleFunction = (func,delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((details)=> {
    //code to be executed in less time
     let div= document.createElement("div")
    div.classList.add('imagediv');
    
    div.style.left=details.clientX+'px'
    div.style.top=details.clientY+'px'

    let image = document.createElement("img");
    
    image.setAttribute(
      "src",
      "img1.jpg"
    );
    div.appendChild(image)
document.body.appendChild(div);


    setTimeout(function(){
        div.remove();
    }, 1400)

},400))