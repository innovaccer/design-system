export const action = (...args: any) => {
  return console.log.bind(null, ['my custom action log: ', ...args]);
};
