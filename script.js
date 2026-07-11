function showTab(tabId, btn){

    document.getElementById("knock").style.display = "none";
    document.getElementById("mineral").style.display = "none";
    document.getElementById("mineralProxy").style.display = "none";

    document.getElementById(tabId).style.display = "block";

    document.querySelectorAll(".tab-btn").forEach(button => {
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
    document.getElementById("servicePopup").style.display = "flex";
}

function closeUnavailable(){
    document.getElementById("servicePopup").style.display = "none";
}
function closeNotice(){

    document.getElementById("noticePopup").style.display="none";

}
function openContactPopup(){

    document.getElementById("contactPopup").style.display="flex";

    const agrees=document.querySelectorAll(".agree");
    const btn=document.getElementById("agreeBtn");

    agrees.forEach(box=>{

        box.onchange=function(){

            let ok=true;

            agrees.forEach(a=>{

                if(!a.checked) ok=false;

            });

            if(ok){

                btn.disabled=false;
                btn.classList.add("active");

            }else{

                btn.disabled=true;
                btn.classList.remove("active");

            }

        }

    });

}
function startLoading(){

    document.getElementById("contactPopup").style.display="none";

    const loading = document.getElementById("loadingPopup");

    loading.style.display="flex";

    setTimeout(function(){

        window.location.href="https://open.kakao.com/me/jaeyunshop";

    },3000);

}
function goOpenChat(){

    window.location.href="https://open.kakao.com/me/jaeyunshop";

}