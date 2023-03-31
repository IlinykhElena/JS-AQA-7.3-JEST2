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

  it("Books names should be not sorted", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "ВЛАСТЕЛИН КОЛЕЦ",
        "вЛаСтЕлИн кОлЕц",
      ])
    ).toEqual(["Властелин Колец", "ВЛАСТЕЛИН КОЛЕЦ", "вЛаСтЕлИн кОлЕц"]);
  });

  it("There are no book", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });
});
