<template lang="">
    <div class="mb-6">
        <label :for="label" class="block mb-2 text-sm font-medium">{{ label }}</label>
        <input :type="type" :id="label" @input="updateInput" :value="modelValue" class="text-black text-sm rounded-lg block w-full p-2.5 shadow-md" />
    </div>
</template>
<script>
export default {
    name: 'InputUI',
    props: {
        label: String,
        type: String,
        modelValue: [String, Number]
    },
    methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>
<style lang="">
    
</style>