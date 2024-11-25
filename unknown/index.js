const text = document.querySelector("#text")
const btn = document.querySelector("#btn")

btn.addEventListener('onclick', function(){
     if (text.style.display === "none") {
       text.style.display = "block";
     } else {
       text.style.display = "none";
     }
})