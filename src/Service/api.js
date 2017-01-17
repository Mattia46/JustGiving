var api = {
  getData(charityId){
    var appId = 'f432ab50';
    var url = `https://api.justgiving.com/${appId}/v1/charity/${charityId}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(err => {
        throw new Error('Fetch failed' + err)
      })
  }
}

export default api;
