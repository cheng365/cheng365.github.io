<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents">
      <template #name_item="{ data }">
        <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>
      </template>
      <template #sex_item="{ data }">
        <vxe-select v-model="data.sex" transfer>
          <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
        </vxe-select>
      </template>
      <template #operate_item>
        <vxe-button type="submit" status="primary" content="查询"></vxe-button>
        <vxe-button type="reset" content="重置"></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const gridOptions = reactive({
  border: true,
  showOverflow: true,
  loading: false,
  height: 400,
  exportConfig: {},
  columnConfig: {
    resizable: true
  },
  formConfig: {
    data: {
      name: '',
      sex: ''
    },
    items: [
      { field: 'name', title: 'Name', slots: { default: 'name_item' } },
      { field: 'sex', title: '性别', titlePrefix: { message: '帮助信息！！！', icon: 'vxe-icon-question-circle-fill' }, slots: { default: 'sex_item' } },
      { slots: { default: 'operate_item' } }
    ]
  },
  toolbarConfig: {
    export: true,
    custom: true
  },
  columns: [
    { type: 'seq', width: 60 },
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'age', title: 'Age' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: []
})
const findList = () => {
  gridOptions.loading = true
  setTimeout(() => {
    gridOptions.data = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0 ', age: 23, address: 'Shenzhen' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0 ', age: 30, address: 'Shanghai' }
    ]
    gridOptions.loading = false
  }, 500)
}
const gridEvents = {
  formSubmit () {
    findList()
  }
}
findList()
const sexList = ref([])
// 异步更新下拉选项
setTimeout(() => {
  sexList.value = [
    { value: '1', label: '男' },
    { value: '0', label: '女' }
  ]
}, 200)
</script>
