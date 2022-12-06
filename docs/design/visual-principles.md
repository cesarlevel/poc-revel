<script setup>
    const items = [
        {
            title: 'Colors',
            description: 'Communicate the meaning and tone of our experiences by using our brand colors.'
        },
        {
            title: 'Icons',
            description: 'Simple, modern, and friendly visual helpers to guide our merchants to complete any task.'
        },
        {
            title: 'Space',
            description: 'Set of rules for how we measure, size, and space our UI elements'
        },
        {
            title: 'Typography',
            route: '/design/typography',
            description: 'The foundational component to communicate and organize our information hierarchy.'
        },
        {
            title: 'Illustrations',
            route: '/',
            description: 'Communicate complex ideas in a meaningful manner.'
        }
    ];
</script>

# Design
The basic visual principles guide us in order to build great experiences.

<BoxedItems :items="items" />