<script setup>
    const items = [
        {
            title: 'Accessibility',
            description: 'Allow merchants of all abilities to understand, use and enjoy our solutions.'
        },
        {
            title: 'Internationalization',
            description: 'Develop empathy by tailoring the experience for international merchants.'
        },
        {
            title: 'Information hierarchy',
            description: 'Organize elements to guide our merchatns to consume each element in the intended order.'
        },
        {
            title: 'Speed',
            description: 'Achieve the minimal timeframe in which merchants accomplish a task.'
        }
    ];
</script>

# Foundations

Revel is the design system for all of Rebilly’s experiences. Foundations help us achieve the necessary standards to offer our merchant's the best experience.

<BoxedItems :items="items" />