import axios from 'axios';

const API_BASE_URL = 'https://api.unsplash.com/';

axios.defaults.baseURL = API_BASE_URL;

axios.defaults.headers.common[
  'Authorization'
] = `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

export interface IPhoto {
  [x: string]: any;
  id: string;
  created_at: string;
  description: string | null;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}

export const UnsplashService = {
  async getAll() {
    console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

    return axios.get<IPhoto[]>('/photos/random?', {
      params: {
        count: 5,
      },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    });
  },

  async getById(id: string) {
    return axios.get<IPhoto>(`/photos/${id}`);
  },

  async create(data: IPhoto) {
    return axios.post('/photos', data, {
      headers: { 'Content-Type': 'application/json' },
    });
  },

  async deletePhoto(id: string) {
    console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

    return axios.delete(`/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    });
  },
};
// TODO: CLEAR for апи СПЛЭШ
// export const UnsplashService = {
//   async getAll() {
//     return axios.get<IPhoto[]>('/photos/random', {
//       params: {
//         count: 5,
//         client_id: '3Yt-PRJXQr-_0UG9tR_MZakaqV24cfX-V1czk5K7wLg',
//       },
//     });
//   },
//   async getById(id: string) {
//     return axios.get<IPhoto[]>(`/photos/${id}`);
//   },
//   async create(data: IPhoto) {
//     return axios.post('/photos', data, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   },
//   async deletePhoto(id: string) {
//     return axios.delete(`/photos/${id}`);
//   },
// };

// TODO: CLEAR for test db.json
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// axios.defaults.baseURL = API_BASE_URL;

// export interface IPhoto {
//   [x: string]: any;
//   id: string;
//   created_at: string;
//   description: string | null;
//   alt_description: string;
//   urls: {
//     raw: string;
//     full: string;
//     regular: string;
//     small: string;
//     thumb: string;
//     small_s3: string;
//   };
// }

// export const UnsplashService = {
//   async getAll() {
//     return axios.get<IPhoto[]>('/photos');
//   },
//   async get() {
//     return axios.get<IPhoto[]>('/photos');
//   },
//   async getById(id: string) {
//     return axios.get<IPhoto[]>(`/photos/${id}`);
//   },
//   async create(data: IPhoto) {
//     return axios.post('/photos', data, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   },
//   async deletePhoto(id: string) {
//     return axios.delete(`/photos/${id}`);
//   },
// };

// TODO: CLEAR
// https://api.unsplash.com/photos/random/?count=5
//  headers: {
//         Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
//       },
