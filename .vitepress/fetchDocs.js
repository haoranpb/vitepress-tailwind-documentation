const fs = require('fs')
const path = require('path')

exports.fetchDocs = function fetchDocs() {
  const docsDir = path.join(__dirname, '../docs')

  return fs.readdirSync(docsDir).map((file) => path.parse(file).name)
}
