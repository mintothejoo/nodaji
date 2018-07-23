import request from 'superagent';
import { sessionService } from 'redux-react-session';
import { Parameters } from './config/Parameters';

const BASE_URL = Parameters.BASE_URL;
const DEFAULT_TIMEOUT = 20000;
const DEFAULT_DEADLINE = 40000;

export const __url = (path, id, params, path_extras) => {
  let url = [BASE_URL, path];

  if (id) {
    url.push(id);
  }

  if (path_extras && Array.isArray(path_extras)) {
    url.push(path_extras.join('/'));
  }

  return url.join('/');
};

export function fetch(path, id, params, headers, path_extras) {
  return new Promise((resolve, reject) => {
    let url = [BASE_URL, path];

    if (id) {
      url.push(id);
    }

    if (path_extras && Array.isArray(path_extras)) {
      url.push(path_extras.join('/'));
    }

    const call = request
      .get(url.join('/'))
      .withCredentials()
      .accept('json')
      .timeout({
        response: DEFAULT_TIMEOUT, // Wait 5 seconds for the server to start sending,
        deadline: DEFAULT_DEADLINE, // but allow 1 minute for the file to finish loading.
      })
      .query(params);

    if (headers) {
      headers.forEach(header => {
        call.set(header[0], header[1]);
      });
    }

    call.end((err, res) => {
      if (err) {
        reject(err, res);
      } else {
        resolve(res.body);
      }
    });
  });
}

export function _post(path, data, user, headers) {
  return new Promise((resolve, reject) => {
    let call = request
      .post([BASE_URL, path].join('/'), data)
      .withCredentials()
      .accept('json')
      .timeout({
        response: DEFAULT_TIMEOUT, // Wait 5 seconds for the server to start sending,
        deadline: DEFAULT_DEADLINE, // but allow 1 minute for the file to finish loading.
      });

    if (user) {
      call.set('On-behalf-of', user.objectId);
    }

    if (headers) {
      headers.forEach(header => {
        call.set(header[0], header[1]);
      });
    }

    call.end((err, res) => {
      if (err) {
        if (res && res.body) {
          reject(res.body);
        }
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

export function post(path, data, anonimous, headers) {
  return new Promise((resolve, reject) => {
    if (!anonimous) {
      sessionService
        .loadUser()
        .then(user => {
          _post(path, data, user, headers)
            .then(response => {
              resolve(response);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    } else {
      _post(path, data, null, headers)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
}

export function put(path, id, data) {
  return new Promise((resolve, reject) => {
    let call = request
      .put([BASE_URL, path, id].join('/'), data)
      .withCredentials()
      .accept('json')
      .timeout({
        response: DEFAULT_TIMEOUT, // Wait 5 seconds for the server to start sending,
        deadline: DEFAULT_DEADLINE, // but allow 1 minute for the file to finish loading.
      });

    call.end((err, res) => {
      if (err) {
        reject(err, res);
      } else {
        resolve(res);
      }
    });
  });
}

export function remove(path, id, params) {
  return new Promise((resolve, reject) => {
    sessionService
      .loadUser()
      .then(user => {
        let call = request
          .delete([BASE_URL, path, id].join('/'))
          .withCredentials()
          .accept('json')
          .timeout({
            response: DEFAULT_TIMEOUT, // Wait 5 seconds for the server to start sending,
            deadline: DEFAULT_DEADLINE, // but allow 1 minute for the file to finish loading.
          });

        if (user) {
          call.set('On-behalf-of', user.objectId);
        }

        call.end((err, res) => {
          if (err) {
            reject(err, res);
          } else {
            resolve(res);
          }
        });
      })
      .catch(err => {
        reject(err);
      });
  });
}

const forceReAuthentication = () => {}; //eslint-disable-line
