import uploadPhoto from './utils';
import createUser from './utils';

async function asyncUploadUser(firstName, lastName, fileName) {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await createUser(firstName, lastName);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}
