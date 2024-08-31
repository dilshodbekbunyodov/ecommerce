<script setup lang="ts">
import * as echarts from "echarts";
import Sidebar from './Sidebar.vue'
import { onMounted, ref, nextTick, onUnmounted } from "vue";

const options = ref({
  title: {
    text: 'Отчет за месяц',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Доход' },
        { value: 735, name: 'Расход' },
        { value: 580, name: 'Повреждать' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

const weeks = ref({
  title: {
    text: 'Еженедельный отчет',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Доход' },
        { value: 735, name: 'Расход' },
        { value: 580, name: 'Повреждать' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

const allData = ref({
  title: {
    text: 'Годовой отчет'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: "O'sish",
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
})

let myChart, myChart2, myChart3;

onMounted(async () => {
  await nextTick();

  let chartDom = document.getElementById("main");
  let chartDom2 = document.getElementById("weeksId");
  let chartDom3 = document.getElementById("allId");

  if (chartDom && chartDom2 && chartDom3) {
    myChart = echarts.init(chartDom);
    myChart2 = echarts.init(chartDom2);
    myChart3 = echarts.init(chartDom3);

    myChart.setOption(options.value);
    myChart2.setOption(weeks.value);
    myChart3.setOption(allData.value);
  }
});

onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
  }
  if (myChart2) {
    myChart2.dispose();
  }
  if (myChart3) {
    myChart3.dispose();
  }
});
</script>

<template>
  <div class="flex">
    <Sidebar/>

    <div class="!w-[100%]">
      <div class="bg-[#F8FAFC] p-3 flex pt-5 gap-3">
        <div class="w-[50%]">
          <div id="main" class="h-[350px] bg-white shadow-lg p-4 rounded-md"/>
        </div>

        <div class="w-[50%]">
          <div id="weeksId" class="h-[350px] bg-white shadow-lg p-4 rounded-md"/>
        </div>
      </div>

      <div id="allId" class="h-[500px] bg-white shadow-lg p-4 rounded-md"/>
    </div>
  </div>
</template>
