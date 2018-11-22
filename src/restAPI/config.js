// export const API_URL = process.env.NODE_ENV !== 'production' ? 'https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON' : 'http://localhost:8080';

export const ENDPOINTS = {
  SESSION_CREATE: '/session/authenticate',
  CHECK_AUTHENTICATION: '/session/isAuthenticated',
  GET_ALL_ORDERS: '/purchase/list',
  GET_PENDING_ORDERS: '/purchase/list/pending'
  // lastEndpointConfigEntry
};
