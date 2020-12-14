<template>
  <el-form label-width="96px" ref="queryCondition" class="query-condition" @keydown.native="bindFastCode">
    <div v-for="(item, index) in rowNumber" :key="index">
      <el-row class="opened-action-row" :gutter="20" v-if="showRow(index + 1)">
        <slot :name="'row-' + (index + 1)"></slot>
        <template v-if="opened && $slots.closed && searchLocationRow === index + 1">
          <slot name="closed"></slot>
        </template>

        <el-col :span="8" v-if="showButton && searchLocationRow === index + 1" :class="conditionOperate">
          <el-button size="medium" type="primary" @click="doSearch" :loading="submitLoading">查询</el-button>
          <el-button size="medium" @click="doReset">重置</el-button>
          <el-button size="medium" type="text" v-if="toggle && opened" @click="doToggle" icon="el-icon-arrow-up">收起</el-button>
          <el-button size="medium" type="text" v-if="toggle && !opened" @click="doToggle" icon="el-icon-arrow-down">展开</el-button>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script lang="ts" src="./QueryCondition.ts"></script>

<style lang="scss" scoped>
.query-condition {
  padding: 0;

  .opened-action-row {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 12px;
    .condition-operation {
      box-sizing: border-box;
      padding-left: 96px;
    }
    /deep/.el-input {
      width: 100%;
    }
  }

  .el-select {
    width: 100%;
  }

  .condition-operation {
    padding-top: 2px;
  }
}
</style>
