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
            <form @submit.prevent="onSubmit">
              <div class="mb-6">
                <label for="username" class="block mb-2 text-sm font-medium">Логин</label>
                <input type="text" class="text-black text-sm rounded-lg block w-full p-2.5 shadow-md" />
                <div v-if="!validUsername" class="text-xs text-red-500 mt-1">
                  *Введите корректный e-mail адрес
                </div>
              </div>

              <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium">Пароль</label>
                <input type="password" id="password" class="text-black text-sm rounded-lg block w-full p-2.5 shadow-md" />
                <div v-if="!validPassword" class="text-xs text-red-500 mt-1">
                  *Пароль должен содерждать минимум 8 знаков
                </div>
              </div>

              <button type="submit"
                class="bg-blue-400 shadow-md focus:ring-4 focus:outline-non font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                Войти
              </button>
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
export default {

}
</script>


