<template>
  <div>
    <h4 class="show-title">{{ title }} {{ config[type].title }}</h4>
    <el-table :data="data">
      <el-table-column
        v-for="(head, index) of config[type].heads"
        :key="head"
        :label="head"
        :prop="index.toString()">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ShowTable',
  props: {
    title: String,
    type: {
      type: String,
      default: 'attributes'
    },
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      config: {
        attributes: {
          title: 'Attributes',
          heads: ['参数', '说明', '类型', '可选值', '默认值']
        },
        methods: {
          title: 'Methods',
          heads: ['方法名称', '说明', '参数']
        },
        events: {
          title: 'Events',
          heads: ['事件名称', '说明', '回调参数']
        },
        slots: {
          title: 'Slots',
          heads: ['name', '说明']
        },
        scopedSlot: {
          title: 'Scoped Slot',
          heads: ['name', '说明']
        },
        vSlots: {
          title: 'V-Slot',
          heads: ['name', '说明']
        },
        props: {
          title: 'Props',
          heads: ['参数', '说明', '类型', '可选值', '默认值']
        },
        columns: {
          title: 'Columns',
          heads: ['参数', '说明', '类型', '可选值', '默认值']
        }
      }
    }
  }
}
</script>

<style scoped>
.show-title {
  margin: 20px 0;
}
</style>
