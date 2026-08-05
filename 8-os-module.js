const os = require('os');
const userInfo = os.userInfo();
console.log(userInfo)

console.log(os.uptime)

const currentOS = {
  name : os.type(),
  release : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem(),
}
console.log(currentOS)