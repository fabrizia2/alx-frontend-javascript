import signUpcreatedUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [];
  try {
    const User = await signUpcreatedUser(firstName, lastName);
    promise.push({ status: 'fulfilled', value: User });
    await uploadPhoto(fileName);
  } catch (err) {
    promise.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return promise;
}
