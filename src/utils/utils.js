export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export const getLastSunday = (current) => {
  const today = new Date(current.getFullYear(), current.getMonth(), current.getDate());
  const lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));
  return lastSunday
}

export const formatDate = (date) => {
  const toDate = new Date(date)
  return toDate.getDate()  + "/" + (toDate.getMonth()+1) + "/" + toDate.getFullYear()
}

// default is week ( 7 days )
export const addDaysToDate = (date, days = 7) => {
  var datePlusDay = new Date(date);
  datePlusDay.setDate(datePlusDay.getDate() + days);
  return datePlusDay
}

// default is week ( 7 days )
export const subDaysFromDate = (date, days = 7) => {
  var datePlusDay = new Date(date);
  datePlusDay.setDate(datePlusDay.getDate() - days);
  return datePlusDay
}

export const initStartDates = (LIMIT) => {
  const START_DATES = []
  const now = new Date();
  const lastSunday = getLastSunday(now)
  Array.from({length: LIMIT}, (x, index) => {
      const date = addDaysToDate(lastSunday, 7 * index);
      START_DATES.push({
          name: formatDate(date),
          id: index
      })
  });
  return START_DATES;
}

export const isEmpty = (array) => {
  if ( array && array.length && array.length > 0) return false
  return true
}

export const isSameDate = (date1, date2) => {
  const toDate1 = new Date(date1)
  const toDate2 = new Date(date2)
    if ( 
      toDate1.getFullYear() === toDate2.getFullYear()
      &&
      toDate1.getMonth() === toDate2.getMonth()
      &&
      toDate1.getDate() === toDate2.getDate()
    ) return true
    return false
}

export const usersToListItem = (users) => {
    return users.map(user => user.username)
}

// serverDate = 31-12-2002
export const serverToClientDate = (serverDate) => {
    const splitted = serverDate.split("-")
    return new Date(splitted[2], Number(splitted[1]) - 1, splitted[0])
}

export const clientToServeDate = (clientDate) => {
  const toDate = new Date(clientDate)
  let month = toDate.getMonth()+1
  let day = toDate.getDate()
  if ( day < 10 ) day = '0' + day
  if ( month < 10 ) month = '0' + month
  return day + "-" + month + "-" + toDate.getFullYear()
}