<template>
<!-- pass attr as prop to the class of a div -->
    <div
        :class="`
        group
        w-full
        bg-gray-800
        h-60
        text-white
        rounded-md
        p-5
        hover:bg-amber-600
        ${attr}`"
    >   
        <slot name="nohover"></slot>
        <div class="group-hover:hidden">
            <slot name="content"></slot>
        </div>
        <slot name="image"></slot>
        <div class="group-hover:block hidden">
            <slot name="onhover"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props:{
    attr: String,
  },
}

</script>