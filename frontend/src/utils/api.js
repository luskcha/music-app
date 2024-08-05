import axios from 'axios';

// Crear una instancia de Axios con la configuración base
const api = axios.create({
  baseURL: 'http://localhost:5000', // Asegúrate de que esta URL sea correcta y que el backend esté en funcionamiento
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para registrar un usuario nuevo
export const registerUser = async (username, email, password) => {
  try {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error; // Lanza un error en caso de que ocurra
  }
};

// Función para iniciar sesión
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error; // Lanza un error en caso de que ocurra
  }
};

// Función para obtener la lista de álbumes
export const fetchAlbums = async () => {
  try {
    const response = await api.get('/albums');
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error; // Lanza un error en caso de que ocurra
  }
};

// Función para obtener las canciones de un álbum específico
export const fetchSongsByAlbum = async (albumId) => {
  try {
    const response = await api.get(`/albums/${albumId}/songs`);
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error; // Lanza un error en caso de que ocurra
  }
};

// Exportar la instancia de Axios
export default api;
