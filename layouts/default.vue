<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://www.taiwantourcar.com/wp-content/uploads/2020/01/logo-tr.png" alt="夢玩家包車旅遊" height="60" />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarItems"
            @click="toggleMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarItems" class="navbar-menu">
          <div class="navbar-end">
            <a
              v-for="(item, key) of items"
              :key="key"
              class="navbar-item"
              :to="item.to"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">主標題</h1>
          <h2 class="subtitle">副標題</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Nuxt />
        <!-- 內容區域 1 -->
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- 內容區域 2 -->
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- 內容區域 3 -->
      </div>
    </section>

    <footer class="footer has-text-centered">
      <div class="container">
        <p>
          &copy; 2023 - 您的公司名稱。保留所有權利。
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isActive: false,
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.navbar.is-primary {
  background-color: #ffb606;
}

.hero.is-primary {
  background-color: #ffb606;
}
</style>
