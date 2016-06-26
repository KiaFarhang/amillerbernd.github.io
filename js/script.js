function init() {
    window.onscroll = function() {
        var clips = document.getElementById("clips");

        var objectPosition = clips.getBoundingClientRect();
        var objectBottom = objectPosition.top;
        var windowBottom = (window.scrollY);

        if (((windowBottom + 500) > objectBottom) && (clips.className == "")) {
            clips.className += " show";
        }

    }

    
}

window.onload = init;
