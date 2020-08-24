<template>
  <view-page title="TableSelect 表格选择器" desc="当选项信息量较大时，使用表格选择器展示并选择内容">
    <show-box :config="baseConfig">
      <table-select-base></table-select-base>
    </show-box>
    <show-box :config="disabledOptionConfig">
      <table-select-disabled-option></table-select-disabled-option>
    </show-box>
    <show-box :config="disabledConfig">
      <table-select-disabled></table-select-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <table-select-clearable></table-select-clearable>
    </show-box>
    <show-box :config="pagedConfig">
      <table-select-paged></table-select-paged>
    </show-box>
    <show-box :config="multipleConfig">
      <table-select-multiple></table-select-multiple>
    </show-box>
    <show-box :config="templateConfig">
      <table-select-template></table-select-template>
    </show-box>
    <show-box :config="filterableConfig">
      <table-select-filterable></table-select-filterable>
    </show-box>

    <show-table title="TableSelect" :data="attributes"></show-table>
    <show-table title="" type="columns" :data="columns"></show-table>
    <show-table title="" type="props" :data="props"></show-table>
    <show-table title="TableSelect" type="events" :data="events"></show-table>
    <show-table title="TableSelect" type="vSlots" :data="vslots"></show-table>
  </view-page>
</template>

<script>
import TableSelectBase from './components/TableSelectBase'
import TableSelectDisabledOption from './components/TableSelectDisabledOption'
import TableSelectDisabled from './components/TableSelectDisabled'
import TableSelectClearable from './components/TableSelectClearable'
import TableSelectPaged from './components/TableSelectPaged'
import TableSelectMultiple from './components/TableSelectMultiple'
import TableSelectTemplate from './components/TableSelectTemplate'
import TableSelectFilterable from './components/TableSelectFilterable'
import { baseCode, disabledOptionCode, disabledCode, clearableCode, pagedCode, multipleCode, templateCode, filterableCode } from './code'

export default {
  name: 'TableSelectApi',
  components: {
    TableSelectBase,
    TableSelectDisabledOption,
    TableSelectDisabled,
    TableSelectClearable,
    TableSelectPaged,
    TableSelectMultiple,
    TableSelectTemplate,
    TableSelectFilterable
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '简单的表格选择器',
        code: baseCode,
        codeDesc: 'v-model的值为选中row的key属性，输入框中显示的值为row的label属性，key属性与label属性需通过props配置'
      },
      disabledOptionConfig: {
        title: '有禁用选项',
        desc: '',
        code: disabledOptionCode,
        codeDesc: '通过disabled设置禁用状态，disabled属性可通过props配置。'
      },
      disabledConfig: {
        title: '禁用状态',
        desc: '选择器不可用状态',
        code: disabledCode,
        codeDesc: '为cat-table-select设置disabled属性，则整个选择器不可用'
      },
      clearableConfig: {
        title: '可清空单选',
        desc: '包含清空按钮，可将选择器清空为初始状态',
        code: clearableCode,
        codeDesc: '为cat-table-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。'
      },
      pagedConfig: {
        title: '分页表格选择器',
        desc: '表格中数据较多时分页显示',
        code: pagedCode,
        codeDesc: '为cat-table-select设置paged属性即可启用分页，可参考el-pagination配置layout，page-size，current-page属性'
      },
      multipleConfig: {
        title: '基础多选',
        desc: '适用性较广的基础多选，用 Tag 展示已选项',
        code: multipleCode,
        codeDesc: '为cat-table-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。'
      },
      templateConfig: {
        title: '自定义列内容',
        desc: '可以自定义备选项的列内容',
        code: templateCode,
        codeDesc: '可以通过v-slot对级联选择器的备选项的列内容进行自定义，v-slot会传入两个字段 row 和 index，分别表示当前列和当前列在表格数据中的序号。'
      },
      filterableConfig: {
        title: '可搜索',
        desc: '可以利用搜索功能快速查找选项',
        code: filterableCode,
        codeDesc: '为cat-table-select添加filterable属性即可启用搜索功能。需要通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值与data值。'
      },
      attributes: [
        ['value / v-model', '绑定值', 'boolean / string / number', '—', '—'],
        ['multiple', '是否多选', 'boolean', '—', 'false'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['size', '输入框尺寸', 'string', 'medium/small/mini', '—'],
        ['clearable', '是否可以清空选项', 'boolean', '—', 'false'],
        ['collapse-tags', '多选时是否将选中值按文字的形式展示', 'boolean', '—', 'false'],
        ['name', 'table-select input 的 name 属性', 'string', '—', '—'],
        ['placeholder', '占位符', 'string', '—', '请选择'],
        ['filterable', '是否可搜索', 'boolean', '—', 'false'],
        ['placement', '弹出框出现位置', 'string', 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end', 'bottom'],
        ['tableWidth', '表格宽度', 'string', '—', '400px'],
        ['paged', '是否分页', 'boolean', '—', 'false'],
        ['layout', '组件布局，子组件名用逗号分隔', 'string', 'prev, pager, next, jumper, ->, total, slot', '"prev, pager, next, jumper, ->, total"'],
        ['pageSize', '每页显示条目个数', 'number', '—', '10'],
        ['currentPage', '当前页数，支持 .sync 修饰符', 'number', '—', '1'],
        ['columns', '配置选项，具体看下表', 'array', '—', '—'],
        ['props', '配置选项，具体看下表', 'object', '—', '—'],
        ['el-table attributes', '参考element-ui官网 el-table attributes', '—', '—', '—']
      ],
      columns: [
        ['key', '列值对应列对象的属性名（必填）', 'string', '—', '—'],
        ['label', '列显示名对应列对象的属性名（必填）', 'string', '—', '—'],
        ['width', '列宽度', 'number', '—', '—'],
      ],
      props: [
        ['key', '指定row值为row对象的某个属性值（必填）', 'string / number', '—', '—'],
        ['label', '指定row标签为row对象的某个属性值', 'string', '—', '—'],
        ['disabled', '指定row选择框是否禁用为row对象的某个属性值', 'boolean', '—', '—'],
      ],
      events: [
        ['change', '选中值发生变化时触发', '目前的选中值'],
        ['visible-change', '下拉框出现/隐藏时触发', '出现则为 true，隐藏则为 false'],
        ['remove-tag', '多选模式下移除tag时触发', '移除的tag值'],
        ['clear', '可清空的单选模式下用户点击清空按钮时触发', '—'],
        ['blur', '当 input 失去焦点时触发', '(event: Event)'],
        ['focus', '当 input 获得焦点时触发', '(event: Event)'],
        ['el-table events', '参考element-ui官网 el-table events', '—']
      ],
      vslots: [
        ['columns中配置的key', '自定义备选项的列内容，参数为 { row, index }，分别为当前列和索引']
      ]
    }
  }
}
</script>
