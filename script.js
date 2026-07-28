const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/70;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});
const reveals=document.querySelectorAll(".reveal");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(item=>{

revealObserver.observe(item);

});
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const today = document.getElementById("todayClose");

if (popup && closeBtn && today) {

    const hideUntil = localStorage.getItem("popupHide");

    if (hideUntil && Number(hideUntil) > Date.now()) {
        popup.style.display = "none";
    }

    closeBtn.addEventListener("click", () => {

        if (today.checked) {
            localStorage.setItem("popupHide", Date.now() + 86400000);
        }

        popup.style.display = "none";
    });

}
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const btn=item.querySelector(".faq-question");

    btn.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
const contactBtn = document.querySelector(".contact-main");
const contactMenu = document.querySelector(".contact-menu");

if(contactBtn && contactMenu){

    contactBtn.addEventListener("click",()=>{

        contactMenu.classList.toggle("show");

    });

}
function openContact(){

    const popup = document.getElementById("contactPopup");

    if(popup){

        popup.style.display="flex";

    }

}

document.addEventListener("DOMContentLoaded",()=>{

    const popup=document.getElementById("contactPopup");
    const close=document.getElementById("closeContact");

    if(close){

        close.onclick=()=>{

            popup.style.display="none";

        };

        popup.onclick=(e)=>{

            if(e.target===popup){

                popup.style.display="none";

            }

        };

    }

});
function copyDiscordID(){

    const discordID = "seoyeoniluvu";

    navigator.clipboard.writeText(discordID);

    const toast=document.getElementById("toast");

    toast.innerHTML=
    "✅ 디스코드 아이디가 복사되었습니다.<br>디스코드 친구추가 후 문의해주세요.<br><br><b>"+discordID+"</b>";

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");toast

    },2000);

}
function showService(id, btn){

    document.querySelectorAll(".price-box").forEach(box=>{
        box.classList.remove("active");
    });

    document.querySelectorAll(".service-btn").forEach(button=>{
        button.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    btn.classList.add("active");

}
function showService(name){

document.querySelectorAll(".price-box").forEach(box=>{
box.classList.remove("active");
});

document.getElementById(name).classList.add("active");

document.querySelectorAll(".service-btn").forEach(btn=>{
btn.classList.remove("active");
});

event.target.classList.add("active");

}
function toggleDetail(el){

const item=el.parentElement;

const text=el.querySelector(".detail-btn");

item.classList.toggle("active");

if(item.classList.contains("active")){

text.innerHTML="접기 ▲";

}else{

text.innerHTML="자세히 보기 ▾";

}

}
/* true = 영업중
   false = 영업종료 */
const SHOP_OPEN = true;

window.addEventListener("load",()=>{

    if(!SHOP_OPEN){
        document.getElementById("closedPopup").style.display="flex";
    }

});

function closeClosedPopup(){
    document.getElementById("closedPopup").style.display="none";
}