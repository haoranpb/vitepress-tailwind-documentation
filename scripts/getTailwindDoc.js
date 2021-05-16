const fs = require('fs')
const path = require('path')

// clone tailwindlabs/tailwindcss.com into same level folder
const tailwindDocsDir = path.join(
  __dirname,
  '../../tailwindcss.com/src/pages/docs'
)
const fileDestDir = path.join(__dirname, '../docs')

const docFileNameList = fs
  .readdirSync(tailwindDocsDir)
  .filter((file) => file.endsWith('mdx'))

for (const fileName of docFileNameList) {
  fs.copyFile(
    path.join(tailwindDocsDir, fileName),
    path.join(fileDestDir, fileName.slice(0, -1)), // use .md instead of mdx
    (err) => {
      if (err) throw err
    }
  )
}
