<template>
    <div class="flex flex-col gap-6 mx-auto p-10 md:w-[40em]">
        <NuxtLink to="/blog" class="text-sm text-gray-300/75 underline underline-offset-4 hover:text-gray-300">&#8592; back</NuxtLink>
        <h3 class="text-xl font-medium">{{ data.title }}</h3>
        <div v-html="data.content" class="space-y-5 text-gray-300/95"></div>
    </div>
</template>

<script setup lang="js">
const config = useRuntimeConfig();

const { slug } = useRoute().params;

const { data } = await useFetch(`${config.public.BACKEND_URI}/blog/${slug}`);

</script>

<style>
li {
    margin-top: 1.25rem;
}
</style>