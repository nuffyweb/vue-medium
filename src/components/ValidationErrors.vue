<template>
    <ul
        class="invalid-feedback"
    >
        <li v-for="message in getMessages" :key="message">
            {{ message }}
        </li>

    </ul>
</template>

<script>
    export default {
        name: 'AppValidationErrors',
        props: {
            validationErrors: {
                type: Object,
                required: true,
            },
        },
        computed: {
            getMessages() {
                return Object.keys(this.validationErrors).map((name) => {
                    const message = this.validationErrors[name].join(', ');
                    return `${name} ${message}`;
                });
            },
        },
    };
</script>

<style scoped>
.invalid-feedback {
    display: block;
    margin-bottom: 10px;
}
</style>
