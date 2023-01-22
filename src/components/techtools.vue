<template>
  <div
    class="
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
      lg:w-4/12
    "
  >
    <a href="https://github.com/ajaykrupalk/TechTools" class="absolute top-0 left-0 z-10 w-full h-full" target="_blank"></a>
    <div class="group-hover:hidden">
      <h2 class="text-lg font-bold md:text-xl">TechTools</h2>
      <p class="text-md">Built using VueJS, Laravel and TailwindCSS</p>
    </div>
    <div class="self-center p-3 absolute bottom-0">
      <img
        src="/src/assets/casual-person.png"
        alt=""
        class="h-28 w-26 group-hover:scale-125 group-hover:-translate-y-3 transition ease-in duration-300"
      />
    </div>
    <div class="group-hover:block hidden">
      <div class="flex flex-col">
        <div>
          <h2 class="text-lg font-bold md:text-xl">View <br> Source<br>  Code</h2>
        </div>
      </div>
    </div>
  </div>
</template>