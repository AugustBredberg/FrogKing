import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  backgroundMusicActive: boolean = false;
  soundMuted: boolean = true;
  activeAudio: HTMLAudioElement;
  musicSoundLevel: number = 0;
  effectSoundLevel: number = 0.5;
  private audioContext: AudioContext;

  constructor() {
    this.audioContext = new window.AudioContext();
  }

  playClickSound() {
    if (this.effectSoundLevel === 0) {
      return;
    }

    const audioSource = this.audioContext.createBufferSource();

    const request = new XMLHttpRequest();
    request.open('GET', environment.assetsPath + 'sounds/click-2.wav', true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      const audioData = request.response;

      this.audioContext.decodeAudioData(audioData, (buffer) => {
        audioSource.buffer = buffer;
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.effectSoundLevel;
        audioSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        audioSource.start(0);
      });
    };

    request.send();
  }

  playBackgroundSound() {
    this.backgroundMusicActive = !this.backgroundMusicActive;
    if (!this.activeAudio) {
      this.activeAudio = new Audio();
      this.activeAudio.src =
        environment.assetsPath + 'sounds/Shy-Little-Frog.mp3';
      this.activeAudio.loop = true;
      this.activeAudio.load();
      this.activeAudio.play();
    }
  }

  toggleBackgroundMusicLevel(level: number) {
    if (this.activeAudio) {
      // Ensure the activeAudio object exists
      // Ensure the volume level is between 0 (mute) and 1 (full volume)

      // Set the volume level of the audio
      this.musicSoundLevel = level;
      this.activeAudio.volume = level;
    }
  }

  toggleEffectsLevel(level: number) {
    console.log('level', level);
    // Set the volume level of the audio
    this.effectSoundLevel = level;
  }

  playFrogSound() {
    const audioElement = new Audio(environment.assetsPath + 'sounds/frog.wav');

    audioElement.volume = this.effectSoundLevel;

    audioElement.play();
    setTimeout(() => {
      audioElement.remove();
    }, 1000);
  }
}
