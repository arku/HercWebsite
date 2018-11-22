import { ENDPOINTS } from '../config';
import client from '../client';
import notifications from '../../components/Notification/notifications';

const root = { root: true }; //Just a shorter version of root dispatch config

export async function authenticateUser(payload, client, store) {
  store.dispatch('LoadingAnimation/showAnimation', null, root);
  const authResult = await client.post(ENDPOINTS.SESSION_CREATE, payload);
  store.dispatch(
    'Notifications/addNotificationForDisplay',
    notifications.LOGIN_SUCCESSFULL,
    root,
  );
  store.dispatch('LoadingAnimation/hideAnimation', null, root);
  store.dispatch('Login/setToken', authResult.data.token, root);
  console.log('AUTH DATA: ', authResult.data);
}

export function checkAuthentication(token) {
  return client.get(ENDPOINTS.CHECK_AUTHENTICATION, {
    headers: { Authorization: token }
  });
}
