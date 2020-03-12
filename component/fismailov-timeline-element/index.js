function changeColors() {
    let meta = document.getElementById('meta');
    let status = document.getElementById('status')
    if (meta.classList.contains("passed")) {
        meta.classList.remove("passed");
        status.classList.remove("passed");
    } else {
        meta.classList.add("passed");
        status.classList.add("passed");
    }
}