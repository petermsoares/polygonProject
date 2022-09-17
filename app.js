const viPolygons = document.querySelectorAll(".viPolygon")
const viPolygonSection = document.querySelectorAll(".polygon222")
const viDescription = document.querySelectorAll(".viDescription")


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



