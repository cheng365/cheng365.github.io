<template>
  <div>
    <vxe-pulldown ref="pulldownRef" transfer>
      <template #default>
        <vxe-input v-model="searchName" suffix-icon="vxe-icon-table" placeholder="实现下拉分页表格" @keyup="keyupEvent" @focus="focusEvent" @suffix-click="suffixClick"></vxe-input>
      </template>
      <template #dropdown>
        <div class="my-dropdown4">
          <vxe-grid
            border
            auto-resize
            height="auto"
            :row-config="{isHover: true}"
            :loading="loading"
            :pager-config="pagerConfig"
            :data="tableData"
            :columns="tableColumn"
            @cell-click="cellClickEvent"
            @page-change="pageChangeEvent">
          </vxe-grid>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
const searchName = ref('')
const loading = ref(false)
const tableColumn = ref([
  { field: 'name', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' }
])
const tableData = ref([])
const tableList = ref([
  { name: 'Test1', role: '前端', sex: '男' },
  { name: 'Test2', role: '后端', sex: '男' },
  { name: 'Test3', role: '测试', sex: '男' },
  { name: 'Test4', role: '设计师', sex: '女' },
  { name: 'Test5', role: '前端', sex: '男' },
  { name: 'Test6', role: '前端', sex: '男' },
  { name: 'Test7', role: '前端', sex: '男' }
])
const pagerConfig = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10
})
const pulldownRef = ref()
const focusEvent = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.showPanel()
  }
}
const keyupEvent = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    if (searchName.value) {
      tableData.value = tableList.value.filter((row) => row.name.indexOf(searchName.value) > -1)
    } else {
      tableData.value = tableList.value.slice(0)
    }
  }, 100)
}
const suffixClick = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.togglePanel()
  }
}
const cellClickEvent = ({ row }) => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    searchName.value = row.name
    $pulldown.hidePanel()
  }
}
const pageChangeEvent = ({ currentPage, pageSize }) => {
  pagerConfig.currentPage = currentPage
  pagerConfig.pageSize = pageSize
}
onMounted(() => {
  keyupEvent()
})
</script>

<style lang="scss" scoped>
.my-dropdown4 {
  width: 600px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
