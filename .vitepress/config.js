const { fetchDocs } = require('./fetchDocs')

module.exports = {
  title: 'Tailwind Doc Clone',
  description: 'Tailwind CSS documentation site clone with Vitepress',
  themeConfig: {
    repo: 'https://github.com/haoranpb/vitepress-tailwind-documentation',
    pages: fetchDocs(),
    collections: {
      'Getting started': ['Installation'],
      'Core Concepts': ['Utility-First', 'Responsive Design'],
    },
  },
}
