// const viPolygons = document.querySelectorAll(".viPolygon")
// const viPolygonSection = document.querySelectorAll(".polygon222")
// const viDescription = document.querySelectorAll(".viDescription")

// const zenitsu_Animations = ["line-animation-1","line-animation-2"]
// const zenitsu_Shapes = document.querySelectorAll(".shape")
// const zArray = Array.from(zenitsu_Shapes)
// console.log(zArray)

// for (let i = 0; i < zArray.length; i++){
//     console.log(zenitsu_Animations[i])
//     zArray[i].classList.add(zenitsu_Animations[i])
// }



// const observerViPolygon = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){
//             return
//         }
//         else{    
            
//             viPolygons.forEach((piece, i) => { 
//                 setTimeout(() => {               
//             piece.classList.add("viPolygonAnimate")
//             }, i * 20);
            
        
//         })      
//     }
//     })
// })

// viPolygonSection.forEach(section => {
//     observerViPolygon.observe(section)
// })

// const observerViDescription = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){
//             return
//         }
//         else{    
            
//             viDescription.forEach((description) => { 
//                 setTimeout(() => {               
//             description.classList.add("viDescriptoin__Fade")
//             }, 6500);
            
        
//         })      
//     }
//     })
// })

// viPolygonSection.forEach(section => {
//     observerViDescription.observe(section)
// })



