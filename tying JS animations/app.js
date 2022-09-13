const blocks = document.querySelectorAll(".block")
const blockSection = document.querySelectorAll(".section2")



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{    
            
            blocks.forEach((block, i) => { 
                setTimeout(() => {               
            block.classList.add("animate")
            }, i * 1000);   
        
        })      
    }
    })
})

blockSection.forEach(section => {
    observer.observe(section)
})


// const blocks = document.querySelectorAll(".block")
// const blockSection = document.querySelector("section2")

// const observer = new IntersectionObserver(entry => {
//     if(!entry.isIntersecting){
//         return
//     }
//     else{
//         blocks.classList.add("animate")
//     }


//     // entries.forEach(entry =>{
//     //     entry.target.classList.toggle("animate", entry.isIntersecting)
//     // })
// })

// // blockSection.forEach(block => {
// //     observer.observe(block)
// // })