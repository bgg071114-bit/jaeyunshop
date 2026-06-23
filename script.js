function showTab(tabId, btn){

    document.getElementById("knock").style.display = "none";
    document.getElementById("mineral").style.display = "none";

    document.getElementById(tabId).style.display = "block";

    document.querySelectorAll(".tab-btn")
    .forEach(button => {
        button.classList.remove("active");
    });

    btn.classList.add("active");
}

function openReview(imgSrc){

    document.getElementById("reviewPopup").style.display = "flex";
    document.getElementById("popupReview").src = imgSrc;

}

function closeReview(){

    document.getElementById("reviewPopup").style.display = "none";

}
function showUnavailable(){

    document.getElementById("servicePopup")
    .style.display = "flex";

}

function closeUnavailable(){

    document.getElementById("servicePopup")
    .style.display = "none";

}