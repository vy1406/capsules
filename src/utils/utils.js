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
  return date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
}

// default is week ( 7 days )
export const addDaysToDate = (date, days = 7) => {
  var datePlusWeek = new Date(date);
  datePlusWeek.setDate(datePlusWeek.getDate() + days);
  return datePlusWeek
}

// default is week ( 7 days )
export const subDaysFromDate = (date, days = 7) => {
  var datePlusWeek = new Date(date);
  datePlusWeek.setDate(datePlusWeek.getDate() - days);
  return datePlusWeek
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
    if ( 
      date1.getFullYear() === date2.getFullYear()
      &&
      date1.getMonth() === date2.getMonth()
      &&
      date1.getDate() === date2.getDate()
    ) return true
    return false
}

export const usersToListItem = (users) => {
    return users.map(user => user.username)
}