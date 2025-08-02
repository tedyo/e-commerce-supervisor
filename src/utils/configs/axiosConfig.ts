// import axios from "axios";
// const environment: "dev" | "production" = import.meta.env.VITE_ENVIRONMENT;
// const axiosInstance = axios.create({
//   baseURL:
//     environment === "dev"
//       ? "https://testapi.roydtechs.com/api"
//       : "https://api.roydtechs.com/api",
//   withCredentials: true,
// });
// let tokenRefreshed = false;
// axiosInstance.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     if (
//       err?.response?.status === 401 &&
//       tokenRefreshed === false &&
//       !err?.response?.request?.responseURL?.includes("/sign_in")
//     ) {
//       tokenRefreshed = true;
//       const refreshToken = localStorage.getItem("refreshToken");
//       const response = await axiosInstance.post("/token/refresh/", {
//         refresh: refreshToken,
//       });

//       if (response?.status === 201) {
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer global.${response.data.access}`;
//         return axios(err.config);
//       }
//     }
//     tokenRefreshed = false;
//     throw err;
//   }
// );

// export default axiosInstance;
