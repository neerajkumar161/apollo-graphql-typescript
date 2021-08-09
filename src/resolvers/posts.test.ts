import Posts from './posts';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
test('Will Get 10 Posts or not', async () => {
  expect(await Posts.Query.get10Posts()).toHaveLength(10);
});

test('Get Post Info and Comments', async () => {
  const postId = { id: 1 };
  expect(await Posts.PostInfo.postDetails(postId)).toMatchObject(
    expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    })
  );
});
