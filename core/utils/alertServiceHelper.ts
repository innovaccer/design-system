import uidGenerator from "@/utils/uidGenerator";

export function pubSub() {
  const subscribers: any = {};

  function publish(eventName: string | number, data: any) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    let toastId = uidGenerator();
    subscribers[eventName].forEach((callback: (arg0: any) => void) => {
      callback({ ...data, toastId });
    });
    return toastId;
  }

  function subscribe(eventName: string | number, callback: any) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;
    return () => subscribers[eventName].splice(index, 1);
  }
  return {
    publish,
    subscribe
  };
}