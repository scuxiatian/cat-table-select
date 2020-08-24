# cat-table-select

**Vue component (Vue.js 2.x) based on [Element-ui](https://github.com/ElemeFE/element)**


## Features

* Consistent with the appearance of Element-ui and works well with ElForm component
* Contains single and multple table select
* paged table select
* Customize table row style
* Filterable table rows

## Demo Installation

### Clone repository

```bash
git clone git@github.com:scuxiatian/cat-table-select.git
```

### Install dependences

```
npm install
```

### Preview demo

```
npm run serve
```

## Example

### single table select

```javascript
<cat-table-select
	v-model="value"
	:data="data"
	:columns="columns"
	:props="props"></cat-table-select>
```
```javascript
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
```

### paged table select

```javascript
<cat-table-select
	v-model="value"
	:data="data"
	:columns="columns"
	:props="props"
	paged
	layout="prev, pager, next"
	:page-size="2"
	:current-page.sync="page">
</cat-table-select>
```

### multiple table select

```javascript
<cat-table-select
	v-model="value1"
	:data="data"
	:columns="columns"
	:props="props"
	multiple></cat-table-select>
```

### customer table nodes
```javascript
<cat-table-select
	v-model="value1"
	:data="data"
	:columns="columns"
	:props="props">
	<template v-slot:index="{ index }">{{ index + 1 }}</template>
	<template v-slot:date="{ row }">{{ showDate(row.date) }}</template>
</cat-table-select>
```

### filterable table nodes
```javascript
<cat-table-select
	v-model="value1"
	:data="data"
	:columns="columns"
	:props="props"
	:filter-method="filterRow"
	filterable>
</cat-table-select>
```
```javascript
filterRow (value, data) {
	const reg = new RegExp(value)
	return data.filter(item => {
		return reg.test(item.name)
	})
}
```

## Api document

### TableSelect Attributes

|   参数   | 说明   |  类型  | 可选值 | 默认值 |
| :--------:   | :-----:  | :----:  | :--------:   | :--------:   |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| size | 输入框尺寸 | string | medium/small/mini | —
| clearable | 是否可以清空选项 | boolean |—|false
|collapse-tags|多选时是否将选中值按文字的形式展示|boolean|—|false
|name|table-select input 的 name 属性|string|—|—
|placeholder|占位符|string|—|请选择
|filterable|是否可搜索|boolean|—|false
|placement|弹出框出现位置|string|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|bottom
|tableWidth|表格宽度|string|—|400px
|paged|是否分页|boolean|—|false
|layout|组件布局，子组件名用逗号分隔|string|prev, pager, next, jumper, ->, total, slot|"prev, pager, next, jumper, ->, total"
|pageSize|每页显示条目个数|number|—|10
|currentPage|当前页数，支持 .sync 修饰符|number|—|1
|columns|配置选项，具体看下表|array|—|—
|props|配置选项，具体看下表|object|—|—
|el-table  attributes|参考element-ui官网 el-table  attributes|—|—|—

### Columns
|   参数   | 说明   |  类型  |可选值 | 默认值 |
| :--------:   | :-----:  | :----:  |:--------:   | :--------:   |
|key|列值对应列对象的属性名（必填）|string|—|—
|label|列显示名对应列对象的属性名（必填）|string|—|—
|width|列宽度|number|—|—

### Props
|   参数   | 说明   |  类型  |可选值 | 默认值 |
| :--------:   | :-----:  | :----:  |:--------:   | :--------:   |
|key|指定row值为row对象的某个属性值（必填）|string / number|—|—
|label|指定row标签为row对象的某个属性值|string,|—|—
|disabled|指定row选择框是否禁用为row对象的某个属性值|boolean|—|—

### TableSelect Events

|   事件类型   | 说明   |  回调参数  |
| :--------:   | :-----:  | :----:  |
|change|选中值发生变化时触发|目前的选中值
|visible-change|下拉框出现/隐藏时触发|出现则为 true，隐藏则为 false
|remove-tag|多选模式下移除tag时触发|移除的tag值
|clear|可清空的单选模式下用户点击清空按钮时触发|—
|blur|当 input 失去焦点时触发|(event: Event)
|focus|当 input 获得焦点时触发|(event: Event)
|el-table  events|参考element-ui官网 el-table  events|—

### TableSelect V-Slot
|   name   | 说明  |
| :--------:   | :-----:  |
|columns中配置的key|自定义备选项的列内容，参数为 { row, index }，分别为当前列和索引

