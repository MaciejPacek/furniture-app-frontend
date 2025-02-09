<template>
    <div class="footer_section">
        <div class="container">
        <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Maciej Pacek</a>
        </p>
        </div>
    </div>
</template>
<script>
export default {
  name: "FootComponent",
  props: {
  },
  methods: {
    getYear() {
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      document.querySelector("#displayYear").innerHTML = currentYear;
    }
  },
  mounted() {
    this.getYear();
  }
};
</script>