<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-slate-100">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Название организации
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Количество запросов
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="stat in this.tableData" :key="stat.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ stat.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ formatNumber(stat.count) }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'TableUI',
    props: {
        tableData: {
            type: Array,
            required: true
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
<style>
</style>