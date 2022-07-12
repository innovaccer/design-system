const parseDate = (date_time: any) => {
  const d = new Date();
  d.setHours(date_time.substring(0, 2));
  d.setMinutes(date_time.substring(3, 5));
  return d;
};

export const get24HourTimeList = (interval: number, startTime: string, endTime: string) => {
  const timeList = [];
  const parseStartTime = parseDate(startTime);
  const parseEndTime = parseDate(endTime);

  while (parseStartTime <= parseEndTime) {
    timeList.push(parseStartTime.toTimeString().substring(0, 5));
    parseStartTime.setMinutes(parseStartTime.getMinutes() + interval);
  }
  console.log('timeList---> ', timeList);
  return timeList;
};
