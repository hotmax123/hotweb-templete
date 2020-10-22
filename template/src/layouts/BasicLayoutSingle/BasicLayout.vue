<template>
  <div class="basic-layout">
    <div class="basic-layout-sider">
      <div class="logo">
        <p>后台管理系统</p>
      </div>
      <slot name="sider"></slot>
    </div>
    <div class="basic-layout-container">
      <header class="header">
        <slot name="header"></slot>
      </header>
      <main class="main">
        <slot name="main"></slot>
      </main>
    </div>
  </div>
</template>
<script lang="ts" src="./BasicLayout.ts"></script>

<style lang="scss" scoped>
.basic-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  .basic-layout-sider {
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    width: 200px;
    height: 100%;
    flex: 0 0 auto;
    background: #fff;
    overflow-y: auto;
    .logo {
      height: 60px;
      line-height: 60px;
      color: #000;
      margin-left: 20px;
      font-weight: 600;
      font-size: 20px;
    }
    .el-menu-vertical-demo {
      width: 200px;
    }
    /deep/.el-menu {
      border: none;
    }
  }

  .basic-layout-sider::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .basic-layout-container {
    flex: 1 1 auto;
    min-height: 100%;
    overflow-x: auto;
    .header {
      width: 100%;
      height: 64px;
      box-sizing: border-box;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
    }
    .main {
      width: 100%;
      height: calc(100% - 64px);
      box-sizing: border-box;
      padding: 20px;
      background-color: #f0f2f6;
      overflow: auto;
    }
  }
}
</style>
