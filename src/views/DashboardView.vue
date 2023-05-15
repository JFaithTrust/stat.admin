<template>
  <div class="flex text-white">
    <div class="basis-1/12">
      <aside class="flex-shrink-0 w-64">
        <nav class="h-screen flex justify-between flex-col pt-0 bg-blue-600 to-indigo-700">
          <div>
            <ul class="space-y-1 flex flex-col ">
              <div class="flex flex-col space-x-4 items-center">
                <img src="@/assets/img/logoCSD.svg" alt="" class="h-14 w-14" />
                <p class="text-xs uppercase whitespace-nowrap font-thin">
                  панель администратора
                </p>
              </div>
              <hr>
              <li class="pt-5">
                <router-link to="/" class="flex py-2 px-4 hover:bg-gray-200 text-white space-x-2 hover:text-black justify-center">
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
            <div class="flex items-center justify-center mt-4 space-x-2">
              <h1>Log Out</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </nav>
      </aside>
    </div>
    <div class="basis-11/12 bg-blue-600">
      <Navbar class="fixed w-10/12 border-b border-gray-400" />
      <div class="mt-[4.5rem] w-[1600px] bg-white text-black rounded-b-2xl">
        <div class="flex flex-col">
          <div class="text-left p-5 space-y-4">
            <h1 class="font-bold">General Report</h1>
            <div class="flex justify-between">
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">14,000</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-lime-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">12,621</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">10,431</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div>
                  <span class="font-semibold text-2xl">8,984</span>
                  <p class="text-gray-500">Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
          <div>

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
export default {
  components: {
    Navbar
  },
  name: 'HomeView',

}
</script>
<style scoped>
/* Style the active route link */
.router-link-active {
  font-weight: bold;
}
</style>