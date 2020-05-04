const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
  toString() {
    const iconsType = {
      Bowman: "\u{1F620}",
      Swordsman: "\u{1F621}",
      Magician: "\u{1F9D0}",
      Daemon: "\u{1F47F}",
      Undead: "\u{1F480}",
      Zombie: "\u{1F9DF}",
    };

    const icon = iconsType[this.type];
    const firstLetterName = this.name[0].toUpperCase();

    return `${icon} ${firstLetterName}(${this.level}) \u{2694} ${this.attack} \u{1F6E1} ${this.defence} \u{2764} ${this.health}`;
  },
};

export default character;
