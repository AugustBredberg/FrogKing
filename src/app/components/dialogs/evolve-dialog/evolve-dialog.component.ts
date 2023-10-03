import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FROG_ELEMENT_ENUM, FrogItem } from 'src/models/items';
import { EVOLUTION_SHOP } from 'src/models/default-shop-items';

@Component({
  selector: 'app-evolve-dialog',
  templateUrl: './evolve-dialog.component.html',
  styleUrls: ['./evolve-dialog.component.scss'],
})
export class EvolveDialogComponent {
  selectedOption: string | null = null;
  elements = FROG_ELEMENT_ENUM;
  frogItem: FrogItem;
  //@Inject(MAT_DIALOG_DATA) public data: { frogItem: FrogItem };

  EVOLUTION_SHOP = EVOLUTION_SHOP;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { frogItem: FrogItem }) {
    // You can access this.data here
    this.frogItem = this.data.frogItem;
  }
  frogTexts: { [key: string]: string } = {
    [FROG_ELEMENT_ENUM.UNDEAD]:
      "Elevate your frog's status to Undead and delve into an intriguing realm of passive benefits! Your frog will acquire an uncanny resilience, capable of enduring adversity while regenerating stamina at an accelerated rate. Additionally, it gains immunity to select adverse effects, making it a formidable asset in your adventure. Unleash the supernatural potential of your amphibious companion and embark on a mysterious journey into the realm of the Undead!",
    [FROG_ELEMENT_ENUM.HOLY]:
      "Transmute your frog into a Holy being and unlock a passive class brimming with divine advantages. Experience your frog's newfound purity as it radiates an aura of healing, aiding itself and allies. Watch it resist dark influences and empower your adventure with celestial blessings. Step into the sacred path of the Holy class and embrace the light!",
    [FROG_ELEMENT_ENUM.DARK]:
      "Embrace the darkness by evolving your frog into a Dark entity, revealing an intriguing realm of passive abilities. Witness your frog's transformation as it harnesses the power of shadows, becoming adept at stealth and evasion. Delve into the abyss, gaining resistance against holy forces and inflicting mysterious debuffs on adversaries. Traverse the enigmatic path of the Dark class and unlock the secrets of the night!",
    [FROG_ELEMENT_ENUM.SPIRIT]:
      "Elevate your frog to a Spirit form and unveil a passive class teeming with ethereal strengths. Feel your frog's connection to the spirit world as it gains an otherworldly presence, capable of phasing through obstacles and sensing hidden treasures. Discover the harmony of nature and gain an advantage against supernatural threats. Embark on a spiritual journey with the Spirit class and unlock the power of the unseen!",

    [FROG_ELEMENT_ENUM.PSYCHIC]:
      "Awaken the psychic potential within your frog, granting it a passive class filled with mental prowess. Witness your frog's mind expand as it gains telepathic abilities, allowing it to foresee and counter enemy actions. Navigate complex puzzles and decode hidden mysteries with ease. Embrace the enigmatic realm of the Psychic class and harness the power of the mind!",
    [FROG_ELEMENT_ENUM.MIGHTY]:
      "Empower your frog with the Mighty evolution, unlocking a passive class overflowing with physical strength. Marvel at your frog's increased muscle mass and endurance, enabling it to deliver devastating blows and withstand formidable foes. Become a force to be reckoned with on your adventure, breaking through barriers and conquering challenges with the indomitable spirit of the Mighty class!",
  };

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
