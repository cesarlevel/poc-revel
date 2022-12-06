export default {
    title: 'VitePress',
    description: 'Just playing around.',
    base: '/poc-revel/',
    themeConfig: {
        siteTitle: 'Revel',
        sidebar: [
            {
                text: 'Latest',
                items: [
                    { text: 'Getting started', link: '/getting-started' },
                ]
            },
            {
                text: 'Foundations',
                collapsible: true,
                items: [
                    { text: 'Meet the standard', link: '/foundations/meet-the-standard' },
                ]
            },
            {
                text: 'Design',
                collapsible: true,
                items: [
                    { text: 'Visual principles', link: '/design/visual-principles' },
                    { text: 'Typography', link: '/design/typography' },
                ]
            },
            {
                text: 'Content',
                collapsible: true,
                items: [
                    { text: 'Express your ideas', link: '/content/express-your-ideas' },
                ]
            },
            {
                items: [
                    { text: 'Patterns', link: '/' },
                    { text: 'Components', link: '/' },
                    { text: 'Tokens', link: '/' },
                    { text: 'Icons', link: '/' },
                ]
            }
        ],
    }
}