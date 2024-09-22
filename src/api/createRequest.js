export default async function createRequest(options) {
  const response = await fetch(process.env.REACT_APP_API_URL + options.input, options.init);
  options.callback(await response);
}