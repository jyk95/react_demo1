const crypto = require('crypto')

module.exports = {
  md5: function (str) {
    const md5Suffix = 'sdfsdi939304fjio032jfd'
    var obj = crypto.createHash('md5')
    obj.update(str + md5Suffix)
    return obj.digest('hex')
  }
}
