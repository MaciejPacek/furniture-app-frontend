<template>
  <li :class="this.parentClasses">
    <a :class="this.childrenClasses" :href="this.href">{{ this.titleToDisplay }}</a
>
  </li>
</template>

<script>
export default {
  name: "LinkComponent",
  props: {
    href: String,
    titleToDisplay: String,
    parentClasses: String,
    childrenClasses: String,
  },
};
</script>
