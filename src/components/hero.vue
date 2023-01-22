<template>
  <div class="w-full h-full bg-black p-5">
    <Role />
    <div class="flex justify-center mt-5 md:mt-10">
      <Projects />
    </div>
    <More />
  </div>
</template>

<script>
import Role from "./role.vue";
import Projects from "./projects.vue";
import More from './more.vue'

export default {
  name: "Hero",
  components: {
    Role,
    Projects,
    More,
  },
};
</script>