import * as mockData from '../mocks/default.json';

const feeds = mockData.data.feedAvailability;

test('should get most read of length 1', () => {
  const mostRead = feeds.most_read;
  expect(mostRead).toHaveLength(1);
});

test('should contain featured articles', () => {
  const expected = ['bg.wikipedia.org', 'bn.wikipedia.org', 'bs.wikipedia.org'];
  const featuredArticles = feeds.todays_featured_article;
  expect(featuredArticles).toEqual(expect.arrayContaining(expected));
});

test('should be picture of the day ', () => {
  const expected = ['*.wikipedia.org'];
  const pictureOfDay = feeds.picture_of_the_day;
  expect(pictureOfDay).toEqual(expected);
});
