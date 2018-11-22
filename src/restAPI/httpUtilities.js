import store from '../store';
import router from '../router'
import notifications from '../components/Notification/notifications';

export function errorHandler(error) {
  const notification = 'UNKNOWN';
  store.dispatch('LoadingAnimation/hideAnimation', null, {root: true});
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('ERROR DATA: ', error.response.data);
    console.log('STATUS: ', error.response.status);
    store.dispatch(
      'Notifications/addNotificationForDisplay',
      notifications.notifyErrorFromServer(error.response.data.message, error.response.data.error),
      { root: true },
    );
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    store.dispatch(
      'Notifications/addNotificationForDisplay',
      notifications.notifyErrorFromServer(error.message),
      { root: true },
    );
    console.log('REQUEST ERROR: ', error.message);
  } else {
    // Something happened in setting up the request that triggered an Error
    store.dispatch(
      'Notifications/addNotificationForDisplay',
      notifications[notification],
      { root: true },
    );
    console.log('Error Final', error.message);
  }
  return Promise.reject(error);
}
