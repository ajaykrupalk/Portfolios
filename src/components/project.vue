<template>
  <div
    :class="`
      group
      relative
      flex flex-col
      w-full
      bg-gray-800
      h-60
      text-white
      rounded-md
      p-5
      hover:bg-amber-600
      ${size}`
    "
  >
    <a
      :href="`${link}`"
      class="absolute top-0 left-0 z-10 w-full h-full"
      target="_blank"
    ></a>
    <div class="group-hover:hidden">
      <h2 class="text-lg font-bold md:text-xl">{{ title }}</h2>
      <p class="text-md">{{ description }}</p>
    </div>
    <div :class="`${imgposition} p-3 absolute bottom-0`">
      <img
        :src="imgsrc"
        alt=""
        :class="`${imgsize} group-hover:scale-125 group-hover:-translate-y-3 transition ease-in duration-300`"
      />
    </div>
    <div class="group-hover:block hidden">
      <div class="flex flex-col">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Project",
    props: {
        size: String,
        link: String,
        title: String,
        description: String,
        imgsrc: String,
        imgposition: String,
        imgsize: String,
    }
}
</script>