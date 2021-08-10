import DataLoader from 'dataloader';

export default async () => {
  const fakeBooksDB = [
    { title: 'book 1', author_id: 1 },
    { title: 'book 2', author_id: 2 },
    { title: 'book 3', author_id: 3 },
    { title: 'book 4', author_id: 3 },
  ];

  const batchGetBooksById = async (ids: any) => {
    console.log('Called once per click: ', ids);
    const books = ids.map((id: number) => {
      return fakeBooksDB.filter((bk) => bk.author_id === id);
    });
    console.log('I only get fired once');
    return books;
  };

  const booksLoader = new DataLoader(batchGetBooksById);
  const books = await booksLoader.loadMany([1, 2, 3, 4]);
  books.forEach((bk) => {
    console.log(bk);
  });
  for (let i = 1; i <= 3; i++) {
    booksLoader.load(i).then((res) => {
      console.log(`Author ${i} books`, res);
    });
  }
  //   console.log('Event Loop Tick 1');
  //   const users = [];
  //   users.push(await userLoader.load(1));
  //   //   userLoader.load(2).then((user) => {
  //   //     console.log('Here is the user: ', user);
  //   //   });
  //   users.push(await userLoader.load(2));
  //   console.log(users);

  //   setTimeout(() => {
  //     console.log('Tick 2');
  //     userLoader.load(3);
  //     userLoader.load(4);
  //   }, 1000);

  //   setTimeout(() => {
  //     console.log('Tick 3');
  //     userLoader.load(5);
  //     userLoader.load(6);
  //   }, 1000);
};
