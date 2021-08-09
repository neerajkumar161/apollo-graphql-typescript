import * as mockData from '../mocks/default.json';

test('should get 10 posts', () => {
  // Make Sure to add return statement when resolving promises, otherwise memory leak will be there
  const testPosts = mockData.data.get10Posts.slice(0, 10);
  expect(testPosts).toHaveLength(10);
});

test('should get postInfo and comments', () => {
  const postInfo = mockData.data.postInfo.postDetails;
  expect(postInfo).toMatchObject(
    expect.objectContaining({
      userId: expect.any(String),
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
    })
  );
});

test('should get postComments', () => {
  const postComments = mockData.data.postInfo.postComments.filter((comnts) => (comnts.postId = '1'));
  expect(postComments).toEqual(expect.arrayContaining([]));
});
