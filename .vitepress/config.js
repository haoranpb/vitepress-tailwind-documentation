const { fetchDocs } = require('./fetchDocs')

module.exports = {
  title: 'Tailwind Doc Clone',
  description: 'Tailwind CSS documentation site clone with Vitepress',
  themeConfig: {
    repo: 'https://github.com/haoranpb/vitepress-tailwind-documentation',
    pages: fetchDocs(),
    collections: {
      'Getting started': [
        'installation',
        'upgrading-to-v2',
        'using-with-preprocessors',
        'optimizing-for-production',
        'browser-support',
        'intellisense',
      ],
      'Core Concepts': [
        'utility-first',
        'responsive-design',
        'hover-focus-and-other-states',
        'dark-mode',
        'adding-base-styles',
        'extracting-components',
        'adding-new-utilities',
        'functions-and-directives',
      ],
    },
  },
}
