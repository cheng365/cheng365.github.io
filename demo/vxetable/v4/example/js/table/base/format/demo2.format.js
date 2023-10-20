import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'
// 式化日期，默认 yyyy-MM-dd HH:mm:ss
VXETable.formats.add('formatDate', {
  cellFormatMethod ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  }
})
// 四舍五入金额，每隔3位逗号分隔，默认2位数
VXETable.formats.add('formatAmount', {
  cellFormatMethod ({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
  }
})
// 格式化银行卡，默认每4位空格隔开
VXETable.formats.add('formatBankcard', {
  cellFormatMethod ({ cellValue }) {
    return XEUtils.commafy(XEUtils.toValueString(cellValue), { spaceNumber: 4, separator: ' ' })
  }
})
// 向下舍入,默认两位数
VXETable.formats.add('formatCutNumber', {
  cellFormatMethod ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)
  }
})
// 四舍五入,默认两位数
VXETable.formats.add('formatFixedNumber', {
  cellFormatMethod ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)
  }
})
// 格式化性别
VXETable.formats.add('formatSex', {
  cellFormatMethod ({ cellValue }) {
    return cellValue ? (cellValue === '1' ? '男' : '女') : ''
  }
})
