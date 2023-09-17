<template>
    <div class="flex flex-col gap-6 mx-auto p-10 md:w-[40em]">
        <NuxtLink to="/" class="text-sm text-gray-300/75 underline underline-offset-4">&#8592; back</NuxtLink>
        <h3 class="font-mono text-xl">blog</h3>
        <div class="flex flex-col space-y-2" v-for="blog in data" :key="blog">
            <NuxtLink :to="`/blog/${blog.slug}`">
                <h4
                    class="text-base font-medium underline underline-offset-4 decoration-1 decoration-gray-300/75 hover:decoration-white">
                    {{ blog.title }}
                </h4>
            </NuxtLink>
            <p class="font-normal">
                {{ blog.description }}
            </p>
            <p class="text-sm text-gray-300/75">
                {{ formatDate(blog.createdAt.seconds) }}
            </p>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('http://localhost:5000/blogs');

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