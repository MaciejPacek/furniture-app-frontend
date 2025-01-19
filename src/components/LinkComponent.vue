<template>
  <li class="nav-item">
    <a class="nav-link" :href="href">{{ titleToDisplay }}</a>
  </li>
</template>

<script>
import "@/assets/css/link-component/link-component.css";

export default {
  name: "LinkComponent",
  props: {
    href: String,
    titleToDisplay: String,
  },
};
</script>
