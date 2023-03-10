const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names should be sorted in descending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ]);
  });

  it("Books names should be not sorted", () => {
    expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
  });

  it("Books names should throw exception", () => {
    expect(sorting.sortByName([])).toThrow(TypeError);
  });
});
