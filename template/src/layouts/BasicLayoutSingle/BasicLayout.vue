<template>
  <div class="basic-layout" :class="classObj">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="doClickOutside" />
    <div class="basic-layout-sider" :class="sliderClass">
      <!-- <div class="logo hm-flex-row-center" v-if="!isCollapse"> -->
      <!-- <p>CRM后台管理系统</p> -->
      <!-- </div> -->
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
    height: 100%;
    overflow-y: auto;
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
      padding: 10px;
      background-color: #f0f2f6;
      overflow: auto;
    }
  }
}
.mobile {
  position: relative;

  .basic-layout-sider {
    position: fixed;
    z-index: 10000;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .hideSidebar {
    pointer-events: none;
    transition-duration: 0.3s;
    transform: translate(-100%, 0);
  }
}
</style>
