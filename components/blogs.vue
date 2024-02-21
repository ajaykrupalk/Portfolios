<template>
    <div class="space-y-4">
        <div>
            <h3 class="font-mono text-xl">blog</h3>
        </div>
        <div class="flex justify-between" v-for="blog in data" :key="blog">
            <NuxtLink :to="`/blog/${blog.slug}`">
                <h4 class="text-base font-medium underline underline-offset-4 decoration-1 font-mono hover:text-gray-300/75">{{ blog.title }}</h4>
            </NuxtLink>
            <p class="text-sm text-gray-300/75">{{ formatDate(blog.createdAt.seconds) }}</p>
        </div>
        <div>
            <NuxtLink to="/blog" class="text-sm text-gray-300/75 underline underline-offset-4 hover:text-gray-300">
                view more &#8594;
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="js">
const config = useRuntimeConfig();

const { data } = await useFetch(`${config.public.BACKEND_URI}/latest`);

function formatDate(ts) {
    const timestamp = ts * 1000;

    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Define the months in an array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Get the year, month, and day
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    // Create the formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate.toLowerCase();
}
</script>