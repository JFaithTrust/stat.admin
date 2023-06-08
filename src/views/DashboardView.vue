<template>
  <div>
      <Navbar class="container mx-auto border-b border-gray-400" />
      <div class="container mx-auto bg-white text-black rounded-b-2xl h-[92%]">
        <div class="flex flex-col">
          <div class="text-left p-5 space-y-4">
            <h1 class="font-bold">Сегодняшние Результаты</h1>
            <div class="flex justify-between">
              <CardUI class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md w-48" :propData="this.items" />
            </div>
          </div>
          <div class="text-left p-5 flex space-x-4">
            <div class="rounded-lg shadow-md border basis-3/5">
              <h1 class="font-bold pl-5 py-3">Итоги месяца</h1>
              <TableUI :tableData='this.statistics' />
            </div>
            <div class="rounded-lg shadow-md border basis-2/5">
              <h1 class="font-bold pl-5 py-3">Выберите дату</h1>
              <div class="mx-10">
                  <form @submit.prevent="sendDateHendler">
                    <InputUI :label="'От'" :type="'date'" v-model="dateFrom" />
                    <InputUI :label="'До'" :type="'date'" v-model="dateTo" /> 
                    <ButtonUI type="submit">Войти</ButtonUI>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarPage.vue'
export default {
  components: {
    Navbar
  },
  name: 'HomeView',
  data() {
    return {
      locales: ["ru", "en", "uz"],
      dateFrom: null,
      dateTo: null,
      items: [
        { id: 1, name: 'БПИ', count: null },
        { id: 2, name: 'ГНК', count: null },
        { id: 3, name: 'АУГА', count: null },
        { id: 4, name: 'Департамент', count: null }
      ],
      statistics: [
        { id: 1, name: 'БПИ', count: null },
        { id: 2, name: 'ГНК', count: null },
        { id: 3, name: 'АУГА', count: null },
        { id: 4, name: 'Департамент', count: null }
      ]
    }
  },
  
  methods: {
    async sendDateHendler() {
      var today = new Date()
      if(!this.dateFrom && !this.dateTo){
        this.dateFrom = new Date(today.getFullYear(), today.getMonth(), 1)
        this.dateTo = new Date()
      }
      
      console.log(this.dateFrom, this.dateTo);
      const date = {
        dateFrom : this.dateFrom,
				dateTo : this.dateTo,
			}
      
      const endpoints = [
        this.axios.post("api/Admin/GetMibDataFromToDate", date),
        this.axios.post("api/Admin/GetSoliqDataFromToDate", date),
        this.axios.post("api/Admin/GetAugaDataFromToDate", date),
        this.axios.post("api/Admin/GetDepartmentDataFromToDate", date),
      ];

      await this.axios
        .all(endpoints)
        .then(
        this.axios.spread((mib, soliq, auga, department) => {
          this.statistics[0].count = mib.data
          this.statistics[1].count = soliq.data
          this.statistics[2].count = auga.data
          this.statistics[3].count = department.data
        })
        )
        .catch((error) => {
        console.log(error);
        })
		},
    async loadTodayData() {
      try {
        const res = await this.axios.get('api/Admin/GetTodayStatistic');
        
        this.items[0].count = res.data.mibCount
        this.items[1].count = res.data.soliqCount
        this.items[2].count = res.data.augaCount
        this.items[3].count = res.data.departmentCount
      } catch (error) {
        console.log('Data failed!!!');
      }		
		},
  },
  mounted() {
    this.loadTodayData()
    this.sendDateHendler()
  }
}
</script>
<style scoped>
.router-link-active {
  font-weight: bold;
}</style>