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
      lg:w-3/12
    "
  >
    <a
      href="https://github.com/ajaykrupalk/NBA-Bot"
      class="absolute top-0 left-0 z-10 w-full h-full"
      target="_blank"
    ></a>
    <div class="group-hover:hidden">
      <h2 class="text-lg font-bold md:text-xl">Discord NBA Bot</h2>
      <p class="text-md">Built using Python with Discord.py</p>
    </div>
    <div class="self-center p-3 absolute bottom-0">
      <img
        src="/src/assets/jump-person.png"
        alt=""
        class="h-28 w-26 group-hover:scale-125 group-hover:-translate-y-3 transition ease-in duration-300"
      />
    </div>
    <div class="group-hover:block hidden">
      <div class="flex flex-col">
        <div>
          <h2 class="text-lg font-bold md:text-xl">View Source Code</h2>
        </div>
        <!-- <div class="self-center p-3 absolute bottom-3">
          <img
            src="/src/assets/jump-person.png"
            alt=""
            class="h-28 w-26 group-hover:scale-125"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>