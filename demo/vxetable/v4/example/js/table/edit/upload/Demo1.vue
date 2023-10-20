<template>
  <div>
    <p>
      <vxe-button status="primary" @click="insertEvent(false)">选择文件</vxe-button>
      <vxe-button status="primary" @click="insertEvent(true)">选择多个</vxe-button>
      <vxe-button @click="removeSelectEvent">删除选中</vxe-button>
      <vxe-button @click="getInsertEvent">保存</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="400"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <input type="text" v-model="row.name">
        </template>
      </vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'
const tableRef = ref()
const tableData = ref([])
const insertEvent = async (isMultiple) => {
  const $table = tableRef.value
  if ($table) {
    const { files } = await $table.readFile({ multiple: isMultiple })
    const records = Array.from(files).map(file => {
      const ns = file.name.split('.')
      const name = ns.slice(0, ns.length - 1).join('')
      const type = ns[ns.length - 1]
      return {
        name: name,
        size: file.size,
        type: type,
        date: XEUtils.toDateString(new Date())
      }
    })
    $table.insert(records)
  }
}
const removeSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}
const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VXETable.modal.alert(insertRecords.length)
  }
}
</script>
