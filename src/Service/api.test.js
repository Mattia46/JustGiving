import Api from './api';
import fetchMock from 'fetch-mock';
import expect from 'expect';

describe("Api",() => {

  it('should', () => {
    var url = `https://api.justgiving.com/f432ab50/v1/charity/183095`;
    var obj = {title: 'National Trust'}
    fetchMock.get(url, obj);
    Api.getData(183095).then((data) => {
      expect(data).toEqual(obj);
    })
  })
});
