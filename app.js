const viPolygons = document.querySelectorAll(".viPolygon")
const viPolygonSection = document.querySelectorAll(".polygon222")
const viDescription = document.querySelectorAll(".viDescription")

const zenitsu_Line_Animations = ["zline1","zline2","zline3","zline4","zline5","zline6","zline7","zline8","zline9","zline10","zline11",]
const zenitsu_Lines = document.querySelectorAll(".zenitsu__line")
const zArray = Array.from(zenitsu_Lines)
const zPolygonTrigger = document.querySelectorAll(".zenitsu__trigger")
const zCharacter = document.querySelectorAll(".zline1")
const zCover = document.querySelectorAll(".zenitsu_cover_on")
const zRevealed = document.querySelectorAll(".zenitsu__character")

const tree_animations = "tbase"
const tree_polygons = document.querySelectorAll(".tree_polygon")
const treeArray = Array.from(tree_polygons)
const treeTrigger = document.querySelectorAll(".tree__trigger")

const treeBranchAnimationsA = "tbranchA_"
const treeBranchPolygonsA = document.querySelectorAll(".tree_branch_A")
const treeBranchArrayA = Array.from(treeBranchPolygonsA)




//Tree animation
const observerTreePolygon = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{
            animateTree()
            setTimeout(() => {animateBranchA()}, 4000);
        }     
                            }
                    )
                                                                }
                                                    )
//Tree intersection observer 
treeTrigger.forEach(section => {
    observerTreePolygon.observe(section)
})
//Animates the base of the tree
function animateTree(){
    treeArray.forEach((piece, i) => { 
            setTimeout(() => {       
            console.log([i])        
            piece.classList.add(`${tree_animations}${[i]}`)
            }, i * 80)
        })
}

function animateBranchA(){
    treeBranchArrayA.forEach((piece, i) => { 
            setTimeout(() => {       
            console.log([i])        
            piece.classList.add(`${treeBranchAnimationsA}${[i]}`)
            }, i * 80)
        })}



//Zenitsu animation
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
//Zenitsu intersection observer 
zPolygonTrigger.forEach(section => {
    observerZPolygon.observe(section)
})
//Zenitsu line animation
function animateLines(){
    for (let i = 0; i < zArray.length; i++){
    zArray[i].classList.add(zenitsu_Line_Animations[i])}; 
}
//Zenitsu fade out lines
function coverLines(){
    for (let i = 0; i < zCover.length; i++){
    zCover[i].classList.add("zenitsu_cover_animate_in")}; 
}
//Zenitsu fade in character
function revealCharacter(){
    for (let i = 0; i < zRevealed.length; i++){
    zRevealed[i].classList.add("zRevealed_on")}; 
}

//Vi animation--polygons
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
//Vi intersection observer--polygons
viPolygonSection.forEach(section => {
    observerViPolygon.observe(section)
})
//Vi line animation--text
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
//Vi intersection observer==text
viPolygonSection.forEach(section => {
    observerViDescription.observe(section)
})




