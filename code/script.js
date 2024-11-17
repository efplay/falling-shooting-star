document.addEventListener("DOMContentLoaded", ()=>{
    const stars = document.querySelectorAll('.shooting_star');
    
    stars.forEach(star => {
        const delay = Math.random() * 5 + 's';
        const duration = Math.random() * 2 + 1 + 's';
        const xPos = Math.random() * window.innerWidth + 'px';
        // const yPos = Math.random() * window.innerHeight + 'px';

        console.log(`founded ${stars.length} stars`);

        star.style.left = xPos;
        //star.style.top = yPos;
        star.style.animationDelay = delay;
        star.style.animationDuration = duration;
    });
});