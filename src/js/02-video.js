
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY= 'videoplayer-current-time';

function saveTime({ seconds } = 0) {
    localStorage.setItem(STORAGE_KEY, seconds);
}

function getVideoplayerCurrentTimeLS() {
    return localStorage.getItem(STORAGE_KEY);
}

player.on('timeupdate', throttle(saveTime, 1000));

player.setCurrentTime(getVideoplayerCurrentTimeLS()).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});