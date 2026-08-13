
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",

  // Do not set Content-Type globally.
  // Axios will automatically use:
  // - application/json for normal JSON requests
  // - multipart/form-data for FormData uploads

  // Allow browser to send HttpOnly JWT cookie
  withCredentials: true,

  // Abort requests that take longer than 10 seconds
  timeout: 10000,
});

export default api;

