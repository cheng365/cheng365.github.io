<template>
  <div>
    <vxe-button @click="selectEvent1">选择一个文件</vxe-button>
    <vxe-button @click="selectEvent2">选择指定类型文件</vxe-button>
    <vxe-button @click="selectEvent3">选择多个文件</vxe-button>
  </div>
</template>

<script setup>
import { VXETable } from 'vxe-table'
const selectEvent1 = async () => {
  try {
    const { file } = await VXETable.readFile()
    VXETable.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
  } catch (e) { }
}
const selectEvent2 = async () => {
  try {
    const { file } = await VXETable.readFile({
      types: ['xlsx', 'html']
    })
    VXETable.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
  } catch (e) { }
}
const selectEvent3 = async () => {
  try {
    const { files } = await VXETable.readFile({
      multiple: true
    })
    VXETable.modal.alert(`共：${files.length} 个文件`)
  } catch (e) { }
}
</script>
