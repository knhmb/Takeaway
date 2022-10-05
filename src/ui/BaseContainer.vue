<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 14rem;
}

@media screen and (max-width: 991px) {
  .container {
    padding: 1rem 1rem;
  }
}
</style>