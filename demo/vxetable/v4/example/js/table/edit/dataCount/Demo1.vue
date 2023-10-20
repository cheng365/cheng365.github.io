<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-footer
      :column-config="{resizable: true}"
      :data="tableData"
      :footer-method="footerMethod"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="书名" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="amount" title="单价" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.amount" type="number"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="number" title="数量" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.number" type="number"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="总价">
        <template #default="{ row }">
          <span>{{ countAmount(row) }} 元</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { name: 'test abc', amount: 80, number: 5 },
  { name: 'JavaScript 权威指南', amount: 40, number: 3 },
  { name: 'Vue 入门到精通', amount: 90, number: 9 },
  { name: '深入现代 JavaScript 应用开发', amount: 60, number: 1 }
])
const countAmount = (row) => {
  return row.amount * row.number
}
const countAllAmount = (data) => {
  let count = 0
  data.forEach(row => {
    count += countAmount(row)
  })
  return count
}
const sumNum = (list, field) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}
const footerMethod = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '合计'
      }
      if (columnIndex === 3) {
        return `${sumNum(data, 'number')} 本`
      } else if (columnIndex === 4) {
        return `共 ${countAllAmount(data)} 元`
      }
      return '-'
    })
  ]
}
</script>
