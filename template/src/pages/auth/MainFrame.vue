<template>
  <!-- 此处为布局容器组件，由layouts目录引入，可以选择切换不同的布局 -->
  <basic-layout :isCollapse="isCollapse">
    <!-- 页面header 开始 -->
    <template slot="header">
      <div class="header-left" @click="doHeaderClose">
        <i v-if="!isCollapse" class="iconfont ic-ui-menuunfold" style="font-size: 20px"></i>
        <i v-else class="iconfont ic-ui-menufold" style="font-size: 20px"></i>
      </div>
      <div class="header-right">
        <el-dropdown trigger="click" @command="doLogout">
          <div class="user-name">
            <img src="@/assets/img/common/ic_portrait@2x.png" class="user-name-icon" />
            <span>小星星</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>
    <!-- 页面header 结束 -->
    <!-- 侧边导航 开始 -->
    <template slot="sider">
      <el-menu
        text-color="#fff"
        background-color="rgb(48, 65, 86)"
        class="sidebar"
        :unique-opened="false"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <div v-for="(item, key) in menus" :key="key">
          <router-link :to="item.url" v-if="item.children.length === 0">
            <el-menu-item :index="item.index" ref="menuItem">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </router-link>
          <el-submenu :index="item.index" v-else>
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <router-link v-for="(submenu, key) in item.children" :key="key" :to="submenu.url">
              <el-menu-item :index="submenu.index" ref="menuItem">
                <span slot="title">{{ submenu.title }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </div>
      </el-menu>
    </template>
    <!-- 侧边导航 结束 -->
    <!-- 容器主体 -->
    <template slot="main">
      <keep-alive>
        <transition name="fade-transform" mode="out-in">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition name="fade-transform" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </template>
  </basic-layout>
</template>
<script lang="ts" src="./MainFrame.ts"></script>
<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: $--color-text-primary;
  .header-left-logo {
    height: 32px;
    margin-right: 10px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  .user-name {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: $--color-text-primary;
    .user-name-icon {
      height: 38px;
      margin-right: 10px;
    }
  }
}

/*隐藏文字*/
/deep/.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
/deep/.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
/deep/.el-menu {
  height: 100%;
  border: none;
}

// 设置侧边栏宽度时，必须将.el-menu--collapse排除，否则动画效果出现BUG
/deep/.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
/deep/.el-submenu .el-submenu__title {
  &:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
}
/deep/.el-submenu .el-menu-item {
  line-height: 38px;
  height: 38px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
}
/deep/.el-menu-item {
  &:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
}
/deep/.router-link-active {
  .el-menu-item {
    color: $--color-primary !important;
  }
}
/deep/.el-icon-arrow-right {
  right: 0px;
  margin-top: -5px;
}
/deep/.el-submenu .el-menu-item,
#app .sidebar-container .nest-menu .el-submenu > .el-submenu__title {
  background-color: #1f2d3d !important;
}

a {
  text-decoration: none !important;
}
</style>
