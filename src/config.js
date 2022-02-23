let localDebug = false,
  prodEndpoint = "https://inventario-fonseca-backend.herokuapp.com",
  localEndpoint = "http://localhost:4000";

let config = {
  localDebug,
  endPointURL: localDebug ? localEndpoint : prodEndpoint,
};

export default config;
