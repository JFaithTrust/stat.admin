<template>
    <div class="flex justify-between items-center border p-5 rounded-lg shadow-md w-64" v-for="(item) in propData"
        :key="item.id">
        <div class="space-y-4">
            <span class="text-2xl font-bold">{{ item.name }}</span>
            <p class="text-xl">{{ formatNumber(item.count) }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardUI',
    props: {
        propData: {
            type: Array,
            reuqired: true
        }
    },
    methods: {
        formatNumber(number) {
            if (typeof number === 'number') {
                return number.toLocaleString();
            }
            return '';
        }
    }
}
</script>
<style></style>