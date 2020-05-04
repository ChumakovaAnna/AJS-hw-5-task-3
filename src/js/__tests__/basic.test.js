import character from "../basic";

describe("character.toString", () => {
  test("Swordsman", () => {
    character.type = "Swordsman";
    const result = `character: ${character}`;
    const expected = "character: \u{1F621} Л(1) \u{2694} 40 \u{1F6E1} 10 \u{2764} 50";
    expect(result).toBe(expected);
  });
});
