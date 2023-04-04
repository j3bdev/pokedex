export class Pokemon {
  constructor(
    public name?: string,
    public image?: number,
    public stats: {
      HP?: number;
      attack?: number;
      defense?: number;
    } = { HP: 0, attack: 0, defense: 0 },
    public description?: string
  ) {}
}
