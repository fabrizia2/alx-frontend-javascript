import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results.map((result) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          return null;
        }
      });

      return { photo, user };
    })
    .catch(() => ({ photo: null, user: null }));
}

export default asyncUploadUser;
