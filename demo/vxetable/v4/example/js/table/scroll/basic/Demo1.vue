<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="400"
      :row-config="{isHover: true}"
      :data="tableData"
      :scroll-y="{enabled: true}">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([])
setTimeout(() => {
  // 模拟数据
  const mockList = []
  for (let index = 0; index < 500; index++) {
    mockList.push({
      id: index,
      name: 'Test' + index,
      role: 'Developer',
      sex: '男'
    })
  }
  tableData.value = mockList
}, 100)
</script>
