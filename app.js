const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('s-show');
        }else{
            entry.target.classList.remove('s-show');
        }
    });
});


const hiddenEle = document.querySelectorAll('.s-hidden'); 
hiddenEle.forEach((el) => observer.observe(el));
