<template>
    <div class="flex flex-wrap justify-center gap-2 md:m-5 md:w-10/12 lg:8/12">
        <!-- About -->
        <About />
        <!-- Achievements -->
        <Achievements />
        <!-- Markdown -->
        <Markdown />
        <!-- CodePen Clone -->
        <CodePen />
        <!-- Movie App -->
        <Movie />
        <!-- Weather App -->
        <Weather />
        <!-- NBA Bot -->
        <Bot />
        <!-- TechTools -->
        <TechTools />
    </div>
</template>

<script>
import About from './about.vue';
import Achievements from './achievements.vue' ;
import Markdown from './markdown.vue';
import CodePen from './codepen.vue';
import Movie from './movie.vue';
import Weather from './weather.vue';
import Bot from './bot.vue';
import TechTools from './techtools.vue';

export default {
    name: 'Projects',
    components: {
        About,
        Achievements,
        Markdown,
        CodePen,
        Movie,
        Weather,
        Bot,
        TechTools
    }
    
}
</script>