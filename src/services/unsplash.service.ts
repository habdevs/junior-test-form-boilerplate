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
