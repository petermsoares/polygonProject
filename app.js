const viPolygons = document.querySelectorAll(".viPolygon")
const viPolygonSection = document.querySelectorAll(".polygon222")
const viDescription = document.querySelectorAll(".viDescription")
const viTitle = document.getElementById("vi__title__container")


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

const treeBranchAnimationsB = "tbranchB_"
const treeBranchPolygonsB = document.querySelectorAll(".tree_branch_B")
const treeBranchArrayB = Array.from(treeBranchPolygonsB)

const treeBranchAnimationsC = "tbranchC_"
const treeBranchPolygonsC = document.querySelectorAll(".tree_branch_C")
const treeBranchArrayC = Array.from(treeBranchPolygonsC)

const treeBranchAnimationsD = "tbranchD_"
const treeBranchPolygonsD = document.querySelectorAll(".tree_branch_D")
const treeBranchArrayD = Array.from(treeBranchPolygonsD)

const leaves_animations = "animate_leaves_"
const leaves_polygons = document.querySelectorAll(".leaves_polygon")
const leavesArray = Array.from(leaves_polygons)

const tree_title_animation = "tree__title__moveDown"
const tree_title_text = document.getElementById("tree__title__text")

const rain_drop_animations = "rainAnimate"
const rain_drop_polygons = document.querySelectorAll(".rain")
const rain_drop_array = Array.from(rain_drop_polygons)
const rain_drop_triangle = document.getElementById("tree__title__polygon")
const rain_drop_off = "rainOff"
//Tree animation
const observerTreePolygon = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{
            setTimeout(() => {animateTreeTitle()}, 1200);
            setTimeout(() => {animateRain()}, 2200);
            setTimeout(() => {animateTreePolygonOut()}, 3400);            
            setTimeout(() => {animateTree()}, 4500);
            setTimeout(() => {animateBranchA()}, 6600);
            setTimeout(() => {animateBranchB()}, 6600);
            setTimeout(() => {animateBranchC()}, 6600);
            setTimeout(() => {animateBranchD()}, 6600);
            setTimeout(() => {animateLeaves()}, 8600);
        }     
                            }
                    )
                                                                }
                                                    )
//Tree intersection observer.
treeTrigger.forEach(section => {
    observerTreePolygon.observe(section)
})

//Animates the Tree Title up and then down behind mask.
function animateTreeTitle(){
    tree_title_text.classList.add(tree_title_animation)
    }

function animateTreePolygonOut(){
    // console.log(rain_drop_triangle)
    rain_drop_triangle.classList.add(rain_drop_off)
}

//Animates the rain drops
function animateRain(){
    // console.log(`animateLeaves() number: ${[i]}`)
    rain_drop_array.forEach((piece, i) => { 
            setTimeout(() => {               
            piece.classList.add(`${rain_drop_animations}${[i]}`)
            }, i * 150)
        })
}

//Animates the base of the tree
function animateLeaves(){
    // console.log(`animateLeaves() number: ${[i]}`)
    leavesArray.forEach((piece, i) => { 
            setTimeout(() => {               
            piece.classList.add(`${leaves_animations}${[i]}`)
            }, i * 0)
        })
}

//Animates the base of the tree
function animateTree(){
    treeArray.forEach((piece, i) => { 
            setTimeout(() => {       
            // console.log([i])        
            piece.classList.add(`${tree_animations}${[i]}`)
            }, i * 12)
        })
}
//Animates the A-Branch of the tree
function animateBranchA(){
    treeBranchArrayA.forEach((piece, i) => { 
            setTimeout(() => {       
            // console.log([i])        
            piece.classList.add(`${treeBranchAnimationsA}${[i]}`)
            }, i * 12)
        })}

//Animates the B-Branch of the tree
function animateBranchB(){
    treeBranchArrayB.forEach((piece, i) => { 
            setTimeout(() => {       
            // console.log([i])        
            piece.classList.add(`${treeBranchAnimationsB}${[i]}`)
            }, i * 80)
        })}

//Animates the C-Branch of the tree
function animateBranchC(){
    treeBranchArrayC.forEach((piece, i) => { 
            setTimeout(() => {       
            // console.log([i])        
            piece.classList.add(`${treeBranchAnimationsC}${[i]}`)
            }, i * 80)
        })}

//Animates the D-Branch of the tree
function animateBranchD(){
    treeBranchArrayD.forEach((piece, i) => { 
            setTimeout(() => {       
            // console.log([i])        
            piece.classList.add(`${treeBranchAnimationsD}${[i]}`)
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
            setTimeout(() => {viAnimateTitle()}, 1500);
            setTimeout(() => {viAnimatePolygons()}, 2500);

    }
    })
})
//Animates Vi Polygons into view
function viAnimatePolygons(){
    viPolygons.forEach((piece, i) => { 
                setTimeout(() => {
                    piece.classList.add("viPolygonAnimate")
            }, i * 20);
        })}

//Vi animate title out of view
function viAnimateTitle(){
    viTitle.classList.add("viFade")
}
                            
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




