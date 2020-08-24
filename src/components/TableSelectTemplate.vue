<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">单选自定义节点</span>
      <cat-table-select
        v-model="value1"
        :data="data"
        :columns="columns"
        :props="props">
        <template v-slot:index="{ index }">{{ index + 1 }}</template>
        <template v-slot:date="{ row }">{{ showDate(row.date) }}</template>
      </cat-table-select>
    </div>
    <div class="block">
      <span class="demonstration">多选自定义节点</span>
      <cat-table-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :columns="columns"
        :props="props"
        multiple>
        <template v-slot:index="{ index }">{{ index + 1 }}</template>
        <template v-slot:date="{ row }">{{ showDate(row.date) }}</template>
      </cat-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: [],
      columns: [
        {
          key: 'index',
          label: '序号',
          width: 50
        },
        {
          key: 'name',
          label: '姓名',
          width: 100
        },
        {
          key: 'date',
          label: '日期'
        },
        {
          key: 'address',
          label: '地址'
        }
      ],
      props: {
        key: 'id',
        label: 'name'
      },
      data: [{
        id: '1',
        name: '王小虎1',
        date: Date.now(),
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        name: '王小虎2',
        date: Date.now(),
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        name: '王小虎3',
        date: Date.now(),
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        name: '王小虎4',
        date: Date.now(),
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    showDate (date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.flex-div {
  display: flex;
}
.block {
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  width: 50%;
  box-sizing: border-box;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
