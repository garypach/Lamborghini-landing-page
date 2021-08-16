let init = () => {
    if(document.getElementsByClassName('1').clicked == true)
        {
        alert("button was clicked");
        }
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
        slides = document.getElementsByClassName('jumbo-slider__slide'),
        circles = document.getElementsByClassName('jumbo-slider__circle'),
        links = document.getElementsByClassName('jumbo-slider__link'),
        current = 1,
        time = 15000;

    //add animation class to slide
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current - 1].classList.add('jumbo-slider__link--active');
    circles[current - 1].classList.add('jumbo-slider__circle--filled');

    
    
    //update elipsis and links
    let updateNav = (current) => {
        // console.log(`update current: ${current}`)
        for (let index = 0; index < slides.length; index++) {
            links[index].classList.remove('jumbo-slider__link--active');
            circles[index].classList.remove('jumbo-slider__circle--filled');
        }

        links[current - 1].classList.add('jumbo-slider__link--active');
        circles[current - 1].classList.add('jumbo-slider__circle--filled');
    }
    let startSliding = () => {

        setInterval(() => {
            // console.log(`current: ${current}`)

            //remove from active from first and add it to the second slide so It can become the first side with the class activated
            slides[1].classList.add('jumbo-slider__slide--active')
            slides[0].classList.remove('jumbo-slider__slide--active')
             // clone the first slide and place on the last space.
             container.appendChild(slides[0].cloneNode([true]));
             // then remove the first slide after it has been cloned
             container.removeChild(slides[0]);

            // console.log(`slides: ${slides.length}`)
            if (current < slides.length) {
                current++;
                updateNav(current);
            } else {
                current = 1;
                updateNav(current);
                
            }

        }, time);
    }
    startSliding();
}

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let section = {
    start: 57,
    end: 65
};
let section2 = {
    start: 15,
    end: 25
};
let section3 = {
    start: 13,
    end: 24
};
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player(
        'vidOne', {
            height: '360',
            width: '640',
            playerVars: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 0,
                rel: 0,
                disablekb: 1,
                modestbranding: 1,
          
            },
            videoId: 'C74Hq3HVD0Y',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    ),
    player2 = new YT.Player(
        'vidTwo', {
            height: '360',
            width: '640',
            playerVars: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 0,
                rel: 0,
                disablekb: 1,
                modestbranding: 1,
         
            },
            videoId: 'fKNdoxRld34',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    ),
    player3 = new YT.Player(
        'vidThree', {
            height: '360',
            width: '640',
            playerVars: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 0,
                rel: 0,
                disablekb: 1,
                modestbranding: 1,
            },
            videoId: 'TdDmHsLnPZ8',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event) {
    player.mute();
    player.seekTo(section.start);
    player.playVideo();
    player2.mute();
    player2.seekTo(section2.start);
    player2.playVideo();
    player3.mute();
    player3.seekTo(section3.start);
    player3.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        var duration = section.end - section.start;
        setTimeout(restartVideoSection, duration * 2000);
    }
}

function restartVideoSection() {
    player.seekTo(section.start);
    player2.seekTo(section2.start);
    player3.seekTo(section3.start);
}

init();