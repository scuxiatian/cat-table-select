export const baseCode = `
<template>
  <cat-table-select
    v-model="value"
    :data="data"
    :columns="columns"
    :props="props"></cat-table-select>
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
`

export const disabledOptionCode = `
<template>
  <cat-table-select
    v-model="value"
    :data="data"
    :columns="columns"
    :props="props"></cat-table-select>
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
        address: '上海市普陀区金沙江路 1517 弄',
        disabled: true
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
`

export const disabledCode = `
<template>
  <cat-table-select
    v-model="value"
    :data="data"
    :columns="columns"
    :props="props"
    disabled></cat-table-select>
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
`

export const clearableCode = `
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
`

export const pagedCode = `
<template>
  <cat-table-select
    v-model="value"
    :data="data"
    :columns="columns"
    :props="props"
    paged
    layout="prev, pager, next"
    :page-size="2"
    :current-page.sync="page"></cat-table-select>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      page: 1,
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
`

export const multipleCode = `
<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">默认显示所有Tag</span>
      <cat-table-select
        v-model="value1"
        :data="data"
        :columns="columns"
        :props="props"
        check-strictly
        multiple></cat-table-select>
    </div>
    <div class="block">
      <span class="demonstration">折叠展示Tag</span>
      <cat-table-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :columns="columns"
        :props="props"
        check-strictly
        multiple
        collapse-tags></cat-table-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: [],
      value2: [],
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
`

export const templateCode = `
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
`

export const filterableCode = `
<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">单选可搜索</span>
      <cat-table-select
        v-model="value1"
        :data="data"
        :columns="columns"
        :props="props"
        :filter-method="filterRow"
        filterable>
      </cat-table-select>
    </div>
    <div class="block">
      <span class="demonstration">多选可搜索</span>
      <cat-table-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :columns="columns"
        :props="props"
        multiple
        :filter-method="filterRow"
        filterable>
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
    filterRow (value, data) {
      const reg = new RegExp(value)
      return data.filter(item => {
        return reg.test(item.name)
      })
    }
  }
}
</script>
`
