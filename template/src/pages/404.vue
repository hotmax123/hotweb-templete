<template>
  <el-card>
    <div class="content">
      <div class="text">404</div>
      <img class="img" src="@/assets/img/common/404.png" alt="" />
      <div class="desc">找不到该页面</div>
    </div>
  </el-card>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped lang="scss">
.el-card {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    text-align: center;
    .text {
      font-size: 100px;
      font-weight: bold;
      color: var(--color-primary);
    }
    .desc {
      font-size: 20px;
      font-weight: bold;
      color: var(--color-primary-active);
    }
    img {
      display: block;
      width: 50%;
      margin: auto;
    }

    .btn {
      width: 280px;
      height: 48px;
      margin: 20px;
    }
  }
}
</style>
