import axios from 'axios';

class Restful {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  async getData(query) {
    if (!query) {
      const res = await this.client.get('/mock/HIUN_corona.json');

      return res.data;
    } else {
      const ax = axios.create({
        baseURL: 'http://localhost:5000',
      });
      const res = await ax.get(`${query}`);

      return res.data;
    }
  }

  async testRequest() {
    const https = require('https');
    const testAxios = axios.create({
      baseURL: 'http://localhost:5000',
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });

    const res = await testAxios.get('/jsontest').then((data) => data.data);

    // baseURL에 hosting한 주소 또는 localhost 주소를 입력하고
    // res 변수 내에서 요청한 get 메소드 내부에 상세 주소를 입력하면 콘솔로 출력됩니다
    console.log(res);
  }

  async getDataForPage() {
    const ax = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    const res = await ax.get('/posts').then((data) => data.data);

    return res;
  }
}

export default Restful;
