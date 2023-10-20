<template>
  <div>
    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="500"
      :row-config="{height: 120}"
      :column-config="{resizable: true}"
      :scroll-y="{enabled: true, gt: 0}"
      :loading="loading">
      <vxe-column type="seq" title="序号" width="100"></vxe-column>
      <vxe-column title="图片" width="140" align="center">
        <template #default>
          <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 100px;">
        </template>
      </vxe-column>
      <vxe-column title="基本信息">
        <template #default="{ row }">
          <div class="label-ellipsis">{{ row.name }}</div>
          <div class="label-ellipsis">{{ row.num }}</div>
          <div class="label-ellipsis">{{ row.address }}</div>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Num" width="200"></vxe-column>
      <vxe-column field="time" title="Time" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const tableRef = ref()
const mockList = (size) => {
  const list = []
  for (let index = 0; index < size; index++) {
    list.push({
      name: `名称${index} 名称名称 名称名称 名称名称名称名称名称名称 名称名称名称名称 名称名称名称名称名称名称`,
      time: '2021-01-01 10:20:30',
      num: 20,
      address: 'shenzhen shenzhen shenzhen shenzhen shenzhen'
    })
  }
  return list
}
const findList = () => {
  loading.value = true
  // 模拟后台接口
  return new Promise(resolve => {
    setTimeout(() => {
      const data = mockList(600)
      const $table = tableRef.value
      if ($table) {
        $table.loadData(data)
      }
      resolve(null)
      loading.value = false
    }, 300)
  })
}
findList()
</script>
