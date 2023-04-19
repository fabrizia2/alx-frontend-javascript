import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  
  const userPromise = signUpUser(firstName, lastName)
    .then((data) => {
      return { status: 'fulfilled', value: data };
    })
    .catch((error) => {
      return { status: 'rejected', value: error };
    });

  const photoPromise = uploadPhoto(fileName)
    .then(() => {
      return { status: 'fulfilled', value: 'Photo uploaded' };
    })
    .catch((error) => {
      return { status: 'rejected', value: error };
    });
    
  promises.push(userPromise, photoPromise);

  return Promise.all(promises);
}
