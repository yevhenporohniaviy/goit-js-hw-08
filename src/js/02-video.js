import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoplayerCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

videoplayerCurrentTime && player.setCurrentTime(videoplayerCurrentTime);

function handlePlaybackTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(handlePlaybackTime, 2000));
