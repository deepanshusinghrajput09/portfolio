const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(
".about,.services,.projects,.skills,.contact"
);

hiddenElements.forEach((el)=>{
    observer.observe(el);
});

const words=[
"Graphic Designer",
"Video Editor",
"Website Designer",
"Growth Partner"
];

let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");

function type(){

if(charIndex<words[wordIndex].length){

typing.textContent+=words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,90);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}else{

wordIndex=(wordIndex+1)%words.length;

setTimeout(type,300);

}

}

if (typing) {
    type();
}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        scrollBtn.style.display = "flex";
    }else{
        scrollBtn.style.display = "none";
    }

});

if(scrollBtn){

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
}

window.addEventListener("load",()=>{

    setTimeout(()=>{

      const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0"; 
        setTimeout(()=>{

            loader.style.display="none";

        },800);

 }

     },1200);

});



const glow = document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

}

const sections = document.querySelectorAll("section");
const navLinksItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinksItems.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = Math.ceil(target / 80);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,25);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

function openProject(project){

const modal = document.getElementById("projectModal");

const title = document.getElementById("modalTitle");

const text = document.getElementById("modalText");

const tools = document.getElementById("modalTools");


modal.style.display="flex";


if(project==="webifi"){

title.innerHTML="Webifi Agency";

text.innerHTML=
"Complete brand identity and website project. Designed the visual identity, website UI and digital presence.";

tools.innerHTML=
"HTML • CSS • JavaScript • Canva";

}


if(project==="editing"){

text.innerHTML = `

<div class="video-grid">

<div class="video-item">
<h3>Calisthenics Transformation Reel</h3>
<iframe src="https://www.youtube.com/embed/ePSNOw-R5vg" allowfullscreen></iframe>
<p class="video-desc">Fitness cinematic reel with smooth transitions.</p>
</div>

<div class="video-item">
<h3>ProEdit.lab Brand Reel</h3>
<iframe src="https://www.youtube.com/embed/RGDMfqjjQvk" allowfullscreen></iframe>
<p class="video-desc">Brand promotional edit for ProEdit.lab.</p>
</div>

<div class="video-item">
<h3>Car Cinematic Edit</h3>
<iframe src="https://www.youtube.com/embed/Y_jnneLbDo4" allowfullscreen></iframe>
<p class="video-desc">Car edit with cinematic transitions and color grading.</p>
</div>

<div class="video-item">
<h3>Luxury Birthday Highlight</h3>
<iframe src="https://www.youtube.com/embed/WUd9NS-RiAs" allowfullscreen></iframe>
<p class="video-desc">Premium birthday event highlight edit.</p>
</div>

<div class="video-item">
<h3>The Pharm D Doctor</h3>
<iframe src="https://www.youtube.com/embed/jqn13zMJ-ZI" allowfullscreen></iframe>
<p class="video-desc">Educational YouTube video editing project.</p>
</div>

</div>

`;


tools.innerHTML=
"Adobe Premiere Pro • CapCut • Filmora";

}



if(project==="website"){

title.innerHTML="Website Design Concepts";


text.innerHTML=`

<div class="video-grid">


<div class="video-item">

<h3>Restaurant Website Concept</h3>

<iframe
src="https://www.youtube.com/embed/0KtetaW5csk"
allowfullscreen>
</iframe>

</div>



<div class="video-item">

<h3>Startup Landing Page Concept</h3>

<iframe
src="https://www.youtube.com/embed/MPmJaH1etvg"
allowfullscreen>
</iframe>

</div>


</div>

`;


tools.innerHTML=
"AI Tools • HTML • CSS • JavaScript";

}

}

function closeProject(){

document.getElementById("projectModal").style.display="none";

}

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(otherVideo => {

            if(otherVideo !== video){

                otherVideo.pause();

            }

        });

    });

});

document.addEventListener("play", function(e){

    if(e.target.tagName === "VIDEO"){

        const videos = document.querySelectorAll("video");

        videos.forEach(video => {

            if(video !== e.target){

                video.pause();

            }

        });

    }

}, true);

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        document.body.style.overflow = "hidden";
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        document.body.style.overflow = "auto";
    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        document.body.style.overflow="auto";

    });

});
const form = document.getElementById("projectForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const btn = document.getElementById("sendBtn");

btn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
btn.disabled = true;

emailjs.send("service_4hb0weh","template_56g1a0e",{

name:document.getElementById("name").value,

business:document.getElementById("business").value,

email:document.getElementById("email").value,

service:document.getElementById("service").value,

budget:document.getElementById("budget").value,

message:document.getElementById("message").value

})

.then(()=>{

document.getElementById("status").innerHTML =
"✅ Project request sent successfully!";

form.reset();

btn.innerHTML='<span>Start Your Project</span><i class="fa-solid fa-arrow-right"></i>';


btn.disabled=false;

})

.catch(()=>{

document.getElementById("status").innerHTML =
"❌ Something went wrong.";

btn.innerHTML='<span>Start Your Project</span><i class="fa-solid fa-arrow-right"></i>';


btn.disabled=false;

});

});

}