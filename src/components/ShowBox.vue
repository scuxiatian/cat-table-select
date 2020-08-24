<template>
  <div>
    <h3 class="show-title">{{ config.title }}</h3>
    <h5 class="show-desc">{{ config.desc }}</h5>
    <div class="box view-box">
      <slot></slot>
      <hr color="#eeeeee">
      <div v-show="codeShow">
        <div v-if="config.codeDesc" class="code-desc">{{ config.codeDesc }}</div>
        <pre><code>{{ markedCodess }}</code></pre>
      </div>
      <div class="box-foot">
        <el-button type="text"
          @click="codeShow = !codeShow"
          :icon="codeShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'">
          {{ buttonText }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'ShowBox',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      codeShow: false
    }
  },
  computed: {
    markedCodess () {
      return this.config.code ? marked(this.config.code) : ''
    },
    buttonText () {
      return this.codeShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style scoped>
.show-title,
.show-desc {
  margin: 20px 0;
}
pre,
code {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
code {
  font-size: 87.5%;
  color: slateblue;
  word-wrap: break-word;
}
.box {
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px;
}
.code-desc {
  border: 1px solid #eeeeee;
  border-radius: 5px;
  color: chocolate;
  margin: 10px;
  padding: 10px;
}
.box-foot {
  width: 100%;
  text-align: center;
}
.text-info {
  cursor: pointer;
}
</style>
