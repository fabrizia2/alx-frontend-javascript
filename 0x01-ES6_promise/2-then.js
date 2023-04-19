export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      const result = {
        status: 200,
        body: 'success'
      };
      console.info('Got a response from the API');
      return result;
    })
    .catch(() => {
      return new Error();
    });
}
