const setDate = (date: number) => {
  const d = new Date();
  return new Date(d.setDate(date));
};

export const getCurrentYear = () => {
  const current = new Date();
  const currentYear = current.getFullYear();

  return currentYear;
};

export const getCurrentMonth = () => {
  const current = new Date();
  const currentMonth = current.getMonth();

  return currentMonth;
};

export const getCurrentWeek = () => {
  const current = new Date();
  const currentDate = current.getDate();
  const currentDay = current.getDay();

  return {
    startDate: setDate(currentDate - currentDay + 1),
    endDate: setDate(currentDate - currentDay + 7),
  };
};

export const getPreviousWeek = () => {
  const current = new Date();
  const currentDate = current.getDate();
  const currentDay = current.getDay();

  return {
    startDate: setDate(currentDate - currentDay - 6),
    endDate: setDate(currentDate - currentDay),
  };
};

export const getPreviousMonth = () => {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();

  return {
    endDate: new Date(currentYear, currentMonth, 0),
    startDate: new Date(currentYear - +(currentMonth < 0), (currentMonth + 11) % 12, 1),
  };
};

export const getPrevious90Days = () => {
  const current = new Date();
  const currentDate = current.getDate();

  return {
    startDate: setDate(currentDate - 90),
    endDate: setDate(currentDate),
  };
};

export const getCustomDates = () => {
  return {
    startDate: '',
    endDate: '',
  };
};
