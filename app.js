const viPolygons = document.querySelectorAll(".viPolygon")
const viPolygonSection = document.querySelectorAll(".polygon222")
const viDescription = document.querySelectorAll(".viDescription")

const zenitsu_Line_Animations = ["zline1","zline2","zline3","zline4","zline5","zline6","zline7","zline8","zline9","zline10","zline11",]
const zenitsu_Lines = document.querySelectorAll(".zenitsu__line")
const zArray = Array.from(zenitsu_Lines)
const zPolygonSelection = document.querySelectorAll(".zenitsu__trigger")
const zCharacter = document.querySelectorAll(".zline1")
const zCover = document.querySelectorAll(".zenitsu_cover_on")
const zRevealed = document.querySelectorAll(".zenitsu__character")

//Zenitsu line animations
const observerZPolygon = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{                
            animateLines();   
            setTimeout(() => {coverLines()}, 3000);   
            setTimeout(() => {revealCharacter()}, 3000); 
            }     
                            }
                    )
                                                                }
                                                    )

zPolygonSelection.forEach(section => {
    observerZPolygon.observe(section)
})

function animateLines(){
    for (let i = 0; i < zArray.length; i++){
    zArray[i].classList.add(zenitsu_Line_Animations[i])}; 
}

function coverLines(){
    for (let i = 0; i < zCover.length; i++){
    zCover[i].classList.add("zenitsu_cover_animate_in")}; 
}

function revealCharacter(){
    for (let i = 0; i < zRevealed.length; i++){
    zRevealed[i].classList.add("zRevealed_on")}; 
}

















const observerViPolygon = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{    
            
            viPolygons.forEach((piece, i) => { 
                setTimeout(() => {               
            piece.classList.add("viPolygonAnimate")
            }, i * 20);
            
        
        })      
    }
    })
})

viPolygonSection.forEach(section => {
    observerViPolygon.observe(section)
})









const observerViDescription = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{    
            
            viDescription.forEach((description) => { 
                setTimeout(() => {               
            description.classList.add("viDescriptoin__Fade")
            }, 6500);
            
        
        })      
    }
    })
})

viPolygonSection.forEach(section => {
    observerViDescription.observe(section)
})



