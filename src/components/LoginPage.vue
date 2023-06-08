<template>
  <div
    class="h-screen py-10 shadow-md bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-500 via-blue-700 to-indigo-900">
    <div class="container mx-auto bg-white bg-opacity-10 h-full rounded-lg flex">
      <div class="basis-1/2 rounded-lg bg-white flex items-center">
        <img src="@/assets/img/kurumsal-web-tasarim.png" class="object-cover" alt="">
      </div>
      <div class="basis-1/2 flex flex-col justify-between items-center py-5">
        <div class="flex space-x-4 items-center">
          <img src="@/assets/img/logoCSD.svg" alt="" class="h-14 w-14" />
          <p class="text-xs uppercase whitespace-nowrap dark:text-white font-thin">
            панель администратора
          </p>
        </div>
        <div class="second">
          <div class="header">
            <h1 class="mb-6 text-2xl font-extrabold leading-none tracking-tight text-white">
              Вход в панель
              <span class="text-blue-600 dark:text-blue-500">Администратора</span>
            </h1>
          </div>
          <div class="forms text-white">
            <form>
              <InputUI :label="'Login'" :type="'text'" v-model="userName" />
              <InputUI :label="'Password'" :type="'password'" v-model="password" /> 
              <ButtonUI type="submit" @click="submitHandler">Войти</ButtonUI>
            </form>
          </div>
        </div>
        <div class="third">
          <span class="text-xs text-white">© 2023
            <a href="#" class="hover:underline">Central Securities Depository of Uzbekistan</a>. All Rights
            Reserved.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){ 
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    async submitHandler(e) {
			e.preventDefault()
			const data = {
        password: this.password,
				userName: this.userName,
			}
      try {
        const res = await axios.post('http://192.168.5.2:5000/api/Account/login', data);
        sessionStorage.setItem(this.$globals.TOKEN, res.data.token)
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        console.log('Autorezation failed!!!');
      }		
		},
  }
}
</script>


