const viPolygons = document.querySelectorAll(".viPolygon")
const viPolygonSection = document.querySelectorAll(".polygon165")



const observer = new IntersectionObserver(entries => {
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
    observer.observe(section)
})



