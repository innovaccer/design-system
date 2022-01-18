export const uidGenerator = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    const s = (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    return s;
  });
  return uuid;
};

export default uidGenerator;
