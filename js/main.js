const spiner = document.getElementById("spiner")

function load(){
    setTimeout(() => {
        spiner.classList.remove("spiner_container-active");
        spiner.classList.add("spiner_container");
    }, 500);
}
window.addEventListener('load', load());