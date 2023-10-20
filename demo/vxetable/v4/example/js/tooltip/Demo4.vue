<template>
  <div>
    <vxe-tooltip ref="tooltipRef"></vxe-tooltip>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例1</a>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例2</a>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例3</a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref()
const mouseenterEvent = (event) => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip.open(event.target, '自定义提示内容')
  }
}
const mouseleaveEvent = () => {
  const $tooltip = tooltipRef.value
  if ($tooltip) {
    $tooltip?.close()
  }
}
</script>
