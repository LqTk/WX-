const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var m = date.getDay();
  var h = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  if (min<10){
    min = '0'+min;
  }
  if (sec<10) {
    sec = '0' + sec;
  }
  var z;
  switch(m){
    case 1:
      z = '一';
      break
    case 2:
      z = '二';
      break
    case 3:
      z = '三';
      break
    case 4:
      z = '四';
      break
    case 5:
      z = '五';
      break
    case 6:
      z = '六';
      break
    case 0:
      z = '日';
      break
  }
  return year + '/' + month + '/' + day + '星期' + z + '\n' + h + ':' + min + ':' + sec;
} 

module.exports = {
  formatTime: formatTime,
  getDate:getDate,
}
