<template>
    <div class="items">
        <div @click="toRoute(item)" class="item" v-for="item in items">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vitepress';
    const { items } = defineProps(['items']);

    const router = useRouter();

    function toRoute(item) {
        if (item?.route) {
            router.go(item.route)
        }
        return;
    }
</script>

<style scoped>
.items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

.item {
    width: calc(100% / 2 - 10px);
    box-sizing: border-box;
    border: 1px solid var(--vp-c-bg-soft);
    background-color: var(--vp-c-bg-soft);
    border-radius: 4px;
    padding: 20px;
    cursor: pointer;
    transition: border-color 0.25s, background-color 0.25s;
}

.item:hover {
    background-color: var(--vp-c-bg-mute);
    border-color: var(--vp-c-brand);
}

.item h3 {
    color: var(--vp-c-brand);
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
}

.item p {
    margin: 0;
    line-height: 24px;
    font-size: 14px;
    color: var(--vp-c-text-2);
}
</style>