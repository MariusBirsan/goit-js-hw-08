import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const timeKey = 'videoplayer-current-time';

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(timeKey, seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(timeKey) || 0);