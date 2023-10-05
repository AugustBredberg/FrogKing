import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  environment = environment;
  musicSliderValue: number;
  generalSoundSliderValue: number;

  constructor(private soundService: SoundService) {}

  ngOnInit(): void {
    this.musicSliderValue = this.soundService.musicSoundLevel * 10;
    this.generalSoundSliderValue = this.soundService.effectSoundLevel * 10;
  }

  getMusicSoundImage(): string {
    if (this.musicSliderValue <= 0) {
      return this.environment.assetsPath + 'images/interface/sound-off.png';
    } else if (this.musicSliderValue <= 3) {
      return this.environment.assetsPath + 'images/interface/sound-low.png';
    } else if (this.musicSliderValue <= 7) {
      return this.environment.assetsPath + 'images/interface/sound-medium.png';
    } else {
      return this.environment.assetsPath + 'images/interface/sound-high.png';
    }
  }

  getGeneralSoundImage(): string {
    if (this.generalSoundSliderValue <= 0) {
      return this.environment.assetsPath + 'images/interface/sound-off.png';
    } else if (this.generalSoundSliderValue <= 3) {
      return this.environment.assetsPath + 'images/interface/sound-low.png';
    } else if (this.generalSoundSliderValue <= 7) {
      return this.environment.assetsPath + 'images/interface/sound-medium.png';
    } else {
      return this.environment.assetsPath + 'images/interface/sound-high.png';
    }
  }

  toggleMusicMute() {
    if (this.musicSliderValue > 0) {
      this.musicSliderValue = 0;
    } else {
      this.musicSliderValue = 10;
      this.soundService.playBackgroundSound();
    }
    this.soundService.toggleBackgroundMusicLevel(this.musicSliderValue / 10);
  }

  updateMusicSound($event: any): void {
    // This function is called when the slider value changes.
    // You can use it for any additional logic you need.
    if ($event > 0) {
      this.soundService.playBackgroundSound();
    }
    this.soundService.toggleBackgroundMusicLevel($event / 10);
  }

  toggleGeneralMute() {
    if (this.generalSoundSliderValue > 0) {
      this.generalSoundSliderValue = 0;
    } else {
      this.generalSoundSliderValue = 10;
    }
    this.soundService.toggleEffectsLevel(this.generalSoundSliderValue / 10);
  }

  updateGeneralSound($event: any): void {
    // This function is called when the slider value changes.
    // You can use it for any additional logic you need.

    this.soundService.toggleEffectsLevel($event / 10);
  }
  clearCache() {
    window.location.reload();
    localStorage.removeItem('inventory_state');
  }
}
