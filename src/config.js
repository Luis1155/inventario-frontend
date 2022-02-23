let localDebug = true,
  prodEndpoint = "https://inventario-fonseca.herokuapp.com",
  localEndpoint = "http://localhost:4000";

let config = {
  localDebug,
  endPointURL: localDebug ? localEndpoint : prodEndpoint,
};

export default config;
