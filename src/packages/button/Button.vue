<template>
    <div>
        <button :type="type">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SiButton',
    props: {
        type: {
            type: String,
            default: "button"
        }
    }
}
</script>

<style>
</style>