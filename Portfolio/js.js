const faders = document.querySelectorAll('.maindiv');
const appearOptions = {
    threshold: 1
}
const appearScroll = new IntersectionObserver(
    function(
        entries, 
        appearScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting){
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearScroll.unobserve(entry.target)
                }
            })
        }, appearOptions);

faders.forEach(fader => {
    appearScroll.observe(fader)
})

function extendMenu(x,y){
    x.classList.toggle("change");
    y.classList.toggle("change");
}

function pokazUkryj1(x,y){
    x.classList.toggle("change");
    y.classList.toggle("change");
}

function galleryFunction(img){
    img.classList.toggle("gallery_change")
}
function hideInformation(x){
    x.style.display = "none";
}
