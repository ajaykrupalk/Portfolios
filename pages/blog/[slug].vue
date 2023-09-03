<template>
    <div>
        <p>{{ slug }}</p>
    </div>
</template>

<script setup>
const { slug } = useRoute().params;
</script>