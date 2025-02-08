<template>
  <header class="header_section long_section px-0">
    <nav class="navbar navbar-expand-lg custom_nav-container">
      <a class="navbar-brand" href="index.html">
        <span> Edgecut </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class=""> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
          <ul class="navbar-nav">
            <LinkComponent
              href="/home.html"
              title-to-display="Home"
              parentClasses="nav-item "
              childrenClasses="nav-link"
            />
            <LinkComponent
              href="/about.html"
              title-to-display="About"
              parentClasses="nav-item"
              childrenClasses="nav-link"
            />
            <LinkComponent
              href="/furnitures"
              title-to-display="Furnitures"
              parentClasses="nav-item"
              childrenClasses="nav-link"
            />
            <LinkComponent
              href="/blog.html"
              title-to-display="Blog"
              parentClasses="nav-item"
              childrenClasses="nav-link"
            />
            <LinkComponent
              href="/contact-us.html"
              title-to-display="Contact Us"
              parentClasses="nav-item"
              childrenClasses="nav-link"
            />
          </ul>
        </div>
        <div class="quote_btn-container">
          <a href="">
            <span> Login </span>
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
          <form class="form-inline">
            <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LinkComponent from "./LinkComponent.vue";
export default {
  name: "NavBar",
  props: {},
  components: {
    LinkComponent,
  },
};
</script>
