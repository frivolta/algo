const people = [
    {
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
        name: "peter doe",
        job: "product manager",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
        name: "susan doe",
        job: "developer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
        name: "emma doe",
        job: "designer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
];

const container = document.querySelector(".items")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

const slides = []
let slideSize = 0;
let currentSlide = 0;

const createItem = ({img, name, job, text}, key) => {
    const container = document.createElement("div")
    container.classList.add("item")
    container["data-index"] = key;

    const element =
     `<img class="item-picture"  src=${img} />
                    <div class="item-title"><h4>${name}</h4></div>
                    <div class="item-job"><h5>${job}</h5></div>
                    <div class="item-text"><p>${text}</p></div>
               `
    container.innerHTML+=element;
    return container
}


const initView = () => {
     people.map((person, idx)=>createItem(person, idx)).
    forEach((item)=> {
         container.appendChild(item)
     })
    slides.push(...Array.from(document.querySelectorAll(".item")))
    slideSize = slides[0].getBoundingClientRect().width
    refreshBtns()
}

const adjustLeft = () => {
    slides.map((slide, idx)=>{
        slide.style.left = idx*slideSize + "px"
    })
}
const refreshBtns = () => {
    nextBtn.style.display = currentSlide === slides.length-1 ? "none" : "block";
    prevBtn.style.display = currentSlide === 0 ? "none" : "block";
}
nextBtn.addEventListener("click", ()=>{
    container.style.transform=`translate(-${slides[currentSlide+1].style.left}, 0)`
    currentSlide++
    refreshBtns()
})
prevBtn.addEventListener("click", ()=>{
    container.style.transform=`translate(-${slides[currentSlide-1].style.left}, 0)`
    currentSlide--
    refreshBtns()
})




initView()
adjustLeft()
