describe("Book Tests", function () {
  let testBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3257,
    },
  ];

  beforeEach(function () {
    books = [
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
      { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
      {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3257,
      },
    ];
  });

  it("Add a new Book Test ", function () {
    assert.deepEqual(
      {
        title: "Lovely Bones",
        author: "Alice Sebold",
        libraryID: 4567,
      },
      addBook("Lovely Bones","Alice Sebold",4567,)
    );
  });

  it("Get Title List", function () {
    let titles = books.map((book)=> book.title);
    assert.deepEqual(
    titles.sort(),
     getTitles(),
    );
  });

  it("Find Book", function () {
    assert.deepEqual(
      testBooks[1],
      findBook("Isaac")
    );
  });
});
