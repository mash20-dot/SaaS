<template>
  <canvas ref="canvas" class="w-full h-64"></canvas>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  sales: {
    type: Array,
    required: true,
  }
})

const canvas = ref(null)
let chartInstance = null

function prepareChartData(sales) {
  const grouped = {}
  sales.forEach(sale => {
    const dateKey = new Date(sale.date).toISOString().slice(0, 10)
    grouped[dateKey] = (grouped[dateKey] || 0) + sale.amount
  })

  const dates = Object.keys(grouped).sort()
  const amounts = dates.map(date => grouped[date])

  return { dates, amounts }
}
                                                        
function renderChart() {
  if (chartInstance) {
    chartInstance.destroy()
  }
  const { dates, amounts } = prepareChartData(props.sales)
  const ctx = canvas.value.getContext('2d')
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Sales Amount',
        data: amounts,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.3)',
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { display: true, title: { display: true, text: 'Date' } },
        y: { display: true, title: { display: true, text: 'Amount ($)' }, beginAtZero: true }
      }
    }
  })
}

onMounted(() => {
  renderChart()
})

watch(() => props.sales, () => {
  renderChart()
})
</script>