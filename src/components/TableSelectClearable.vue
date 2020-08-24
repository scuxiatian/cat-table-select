<template>
  <cat-table-select
    v-model="value"
    :data="data"
    :columns="columns"
    :props="props"
    clearable></cat-table-select>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      columns: [
        {
          key: 'name',
          label: '姓名',
          width: 100
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
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
