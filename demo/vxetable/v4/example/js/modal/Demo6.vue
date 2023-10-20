<template>
  <div>
    <vxe-button content="多窗口、叠加窗口" @click="openAlert({ content: '多窗口、叠加窗口', lockView: false, mask: false })"></vxe-button>
  </div>
</template>

<script setup>
import { VXETable } from 'vxe-table'
const openAlert = (options) => {
  VXETable.modal.alert(options)
}
</script>
