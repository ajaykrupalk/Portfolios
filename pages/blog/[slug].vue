<template>
    <div class="flex flex-col gap-6 mx-auto p-10 md:w-[40em]">
        <NuxtLink to="/blog" class="text-sm text-gray-300/75 underline underline-offset-4">&#8592; back</NuxtLink>
        <h3>{{ data.title }}</h3>
        <p>{{ data.content }}</p>
    </div>
</template>

<script setup>
const { slug } = useRoute().params;

const { data } = await useFetch(`http://localhost:5000/blog/${slug}`);
</script>