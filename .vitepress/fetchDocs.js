const fs = require('fs')
const path = require('path')

/**
 * Get all of the documentations under the `docs` folder
 *
 * Nested folders are not supported for simplicity
 *
 * @returns {Object} Filename -> document metadata pairs
 */
exports.fetchDocs = function fetchDocs() {
  const docsDir = path.join(__dirname, '../docs')

  return fs.readdirSync(docsDir).reduce((acc, file) => {
    const fileName = path.parse(file).name

    acc[fileName] = {
      title: fileName,
      href: `/docs/${fileName}.html`,
    }
    return acc
  }, {})
}
