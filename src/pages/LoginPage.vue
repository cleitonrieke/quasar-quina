<template>
  <div class="row justify-center">&nbsp;</div>
  <div class="row justify-center">&nbsp;</div>
  <div class="row justify-center">&nbsp;</div>
  <div class="row justify-center">
    <h4 class="text-red">Bolão Mega Brothers - ADMIN AREA</h4>
  </div>
  <div class="row justify-center" v-if="loginError">
    <q-banner dense inline-actions class="text-white bg-red">
      Usuário/Senha inválidos. Verifique e tente novamente!
    </q-banner>
  </div>
  <q-form @submit="logar">
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-px-md">
        <div class="text-center">
          <img
            src="~assets/admin_icon.png"
            style="width: 100px; height: 100px"
          />
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-px-md">
        <q-input
          v-model="username"
          label="Usuário"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Favor informar seu usuário',
          ]"
        />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-px-md">
        <q-input
          v-model="password"
          label="Senha"
          type="password"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Favor informar sua senha',
          ]"
        />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-md-4 q-px-md">
        <q-btn type="submit" color="red" label="Login" />
      </div>
    </div>
  </q-form>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useTokenStore } from "../stores/tokenStore";
import { useRouter } from "vue-router";

const router = useRouter();
const tokenStore = useTokenStore();

// Clear the token
tokenStore.clearToken();

const username = ref("");
const password = ref("");
const loginError = ref(false);

function logar() {
  loginError.value = false;
  axios
    .post(`${process.env.URL_BACKEND}/usuarios/autenticar`, {
      user_id: username.value,
      password: password.value,
    })
    .then((response) => {
      console.log(Object.keys(response.headers));
      console.log(`Token ${response.data.token}`);
      console.log("agora tentando o token");
      console.log(response.headers["authentication"]);
      console.log(response.headers["date"]);
      console.log("pega a porra da autenticacao");
      console.log(response.headers.authentication);
      // Set the token
      tokenStore.setToken(username.value, response.data.token);
      router.push({ path: "/menu-admin" });
    })
    .catch((error) => {
      loginError.value = true;
    });
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
