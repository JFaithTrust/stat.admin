<template>
  <div class="flex">
    <div class="basis-1/12">
      <aside class="flex-shrink-0 w-72">
        <nav class="py-2">
          <div class="bg-white rounded-2xl">
            <div class="h-screen flex justify-between flex-col">
              <ul class="space-y-1 flex flex-col">
                <div class="flex items-center flex-col">
                  <img src="@/assets/img/logoCSD.svg" alt="" class="h-14 w-14" />

                </div>
                <hr>
                <li class="pt-3">
                  <router-link to="/" class="flex py-2 px-4 space-x-2 text-gray-500 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p>Dashboard</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <hr>
              <div class="flex items-center justify-center py-3 space-x-2">
                <h1>Log Out</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </div>
    <div class="basis-11/12">
      <Navbar id="navbar" class="w-[99%] mx-auto border-b border-gray-400" />
      <div class="mx-auto bg-white text-black rounded-b-2xl" :style="{ width: width + 'px' }">
        <div class="flex flex-col">
          <div class="text-left p-5 space-y-4">
            <h1 class="font-bold">Today Statistics</h1>
            <div class="flex justify-between">
              <CardUI class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md w-48" :propData="statToday" />
              
              <!-- <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-lime-400">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">12,621</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-violet-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">10,431</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">8,984</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div> -->
            </div>
          </div>

          <div class="text-left p-5 flex space-x-4">
            <div class="rounded-lg shadow-md border basis-3/5">
              <div class="flex justify-between">
                <h1 class="font-bold pl-5 py-3">Companies of the World</h1>
                <div class="flex justify-center items-center text-gray-500 rounded-bl-lg border-b border-l bg-slate-100">
                  <ul class="" v-for="(item, index) in informations" :key="item.id">
                    <li @click="saveAmount(item.info)"
                      :class="['bg-slate-100', 'p-3', 'hover:bg-slate-200', 'cursor-pointer', { 'rounded-bl-lg': index === 0 }, { 'rounded-tr-lg': index === 3 }]">
                      {{ item.name }}</li>
                  </ul>
                </div>
              </div>
              <ChartUI :id="chartId" :chartData = "chartData" />
              <div class="m-8">
                <canvas id="myChart"></canvas>
              </div>
            </div>
            <div class="rounded-lg shadow-md border basis-2/5">
              <h1 class="font-bold pl-5 py-3">Social Networks Statistics</h1>
            </div>
          </div>
          <div class="text-left p-5 flex space-x-4">
            <div class="rounded-lg shadow-md border basis-3/5">
              <h1 class="font-bold pl-5 py-3">Companies of the World</h1>
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-slate-100">
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selector</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in items" :key="item.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.column1 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.column2 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.column3 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ '$' + (item.column4 / 1000) + 'B' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="rounded-lg shadow-md border basis-2/5">
              <h1 class="font-bold pl-5 py-3">Social Networks Statistics</h1>
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-slate-100">
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Social
                      Networks</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active users
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">B2C Markets
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in stat" :key="item.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.column1 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ '$' + (item.column2 / 1000) + 'B' }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ item.column3 + '%' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarPage.vue'
import Chart from "chart.js/auto";
export default {
  components: {
    Navbar
  },
  name: 'HomeView',
  data() {
    return {
      statToday: {
        mib: {
          name: 'MIB',
          count: 85136
        },
        soliqCaount:  {
          name: 'Soliq',
          count: 0
        },
        augaCount: {
          name: 'AUGA',
          count: 0
        },
        departmentCount: {
          name: 'Department',
          count: 4
        },
      },
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Companies market cap from 2010 to 2023",
            data: null,
            fill: true,
            borderColor: "rgb(69, 103, 243)",
            borderWidth: 1,
            tension: 0.4
          },
        ],
      },
      width: null,
      items: [
        { id: 1, column1: 'Apple', column2: 'United States', column3: 'Technology', column4: 2051 },
        { id: 2, column1: 'Saudi Aramco', column2: 'Saudi Arabia', column3: 'Energy', column4: 1920 },
        { id: 3, column1: 'Microsoft', column2: 'United States', column3: 'Technology', column4: 1778 },
        { id: 4, column1: 'Amazon', column2: 'United States', column3: 'Consumer Discretionary', column4: 1558 }
      ],
      stat: [
        { id: 1, column1: 'Facebook', column2: 2960, column3: 65 },
        { id: 2, column1: 'Instagram', column2: 2000, column3: 3 },
        { id: 3, column1: 'LinkedIn', column2: 900, column3: 9 },
        { id: 4, column1: 'Pinterest ', column2: 450, column3: 4 }
      ],
      informations: [
        {
          id: 1,
          name: 'Apple',
          info: [
            {
              year: '2010',
              mcap: 297090
            },
            {
              year: '2011',
              mcap: 377510
            },
            {
              year: '2012',
              mcap: 499690
            },
            {
              year: '2013',
              mcap: 500740
            },
            {
              year: '2014',
              mcap: 643120
            },
            {
              year: '2015',
              mcap: 583610
            },
            {
              year: '2016',
              mcap: 608960
            },
            {
              year: '2017',
              mcap: 860880
            },
            {
              year: '2018',
              mcap: 746070
            },
            {
              year: '2019',
              mcap: 1287000
            },
            {
              year: '2020',
              mcap: 2255000
            },
            {
              year: '2021',
              mcap: 2901000
            },
            {
              year: '2022',
              mcap: 2066000
            },
            {
              year: '2023',
              mcap: 2706000
            },
          ]
        },
        {
          id: 2,
          name: 'Saudi Aramco',
          info: [
            {
              year: '2019',
              mcap: 1880000
            },
            {
              year: '2020',
              mcap: 2053000
            },
            {
              year: '2021',
              mcap: 1908000
            },
            {
              year: '2022',
              mcap: 1881000
            },
            {
              year: '2023',
              mcap: 2071000
            },
          ]
        },
        {
          id: 3,
          name: 'Microsoft',
          info: [
            {
              year: '2010',
              mcap: 234520
            },
            {
              year: '2011',
              mcap: 218380
            },
            {
              year: '2012',
              mcap: 223660
            },
            {
              year: '2013',
              mcap: 310500
            },
            {
              year: '2014',
              mcap: 381720
            },
            {
              year: '2015',
              mcap: 439670
            },
            {
              year: '2016',
              mcap: 483160
            },
            {
              year: '2017',
              mcap: 659900
            },
            {
              year: '2018',
              mcap: 780360
            },
            {
              year: '2019',
              mcap: 1200000
            },
            {
              year: '2020',
              mcap: 1681000
            },
            {
              year: '2021',
              mcap: 2522000
            },
            {
              year: '2022',
              mcap: 1787000
            },
            {
              year: '2023',
              mcap: 2317000
            },
          ]
        },
        {
          id: 4,
          name: 'Amazon',
          info: [
            {
              year: '2010',
              mcap: 81180
            },
            {
              year: '2011',
              mcap: 78710
            },
            {
              year: '2012',
              mcap: 113890
            },
            {
              year: '2013',
              mcap: 183040
            },
            {
              year: '2014',
              mcap: 144310
            },
            {
              year: '2015',
              mcap: 318340
            },
            {
              year: '2016',
              mcap: 356310
            },
            {
              year: '2017',
              mcap: 563530
            },
            {
              year: '2018',
              mcap: 737460
            },
            {
              year: '2019',
              mcap: 920220
            },
            {
              year: '2020',
              mcap: 1634000
            },
            {
              year: '2021',
              mcap: 1691000
            },
            {
              year: '2022',
              mcap: 856940
            },
            {
              year: '2023',
              mcap: 1163000
            },
          ]
        },
      ]
    }
  },
  methods: {
    createChart() {
      const ctx = document.getElementById("myChart").getContext("2d");
      let gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(58, 123, 213, 1)")
      gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)")
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(ctx, {
        type: "line",
        data: this.chartData,
        options: {
          radius: 5,
          hitRadius: 30,
          hoverRadius: 12,
          backgroundColor: gradient,
        },
      });
    },
    saveAmount(item) {
      this.chartData.labels = item.map(e => e.year);
      this.chartData.datasets[0].data = item.map(e => e.mcap);
      this.createChart();
    },
  },
  mounted() {
    const box = document.getElementById('navbar')
    this.width = box.clientWidth
    console.log(this.width)
    this.createChart();
  }

}
</script>
<style scoped>
.router-link-active {
  font-weight: bold;
}</style>