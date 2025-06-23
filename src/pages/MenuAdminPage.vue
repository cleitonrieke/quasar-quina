<template>
  <div class="row q-pa-md">
    <h5>
      Bem vindo {{ username }} ao menu de administrador do Bolão Mega Brothers
      <q-btn label="Deslogar" to="/login" color="black" />
    </h5>
  </div>
  <div class="row">
    <div class="col-4 q-px-md">
      <q-card class="my-card bg-red-6 text-white">
        <q-card-section>
          <div class="text-h6">Visualizar Convites</div>
        </q-card-section>

        <q-card-section>
          Visualizar convites disponíveis e indisponíveis
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat @click="acessarOpcao(1)">Acessar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-4 q-px-md">
      <q-card class="my-card bg-red-6 text-white">
        <q-card-section>
          <div class="text-h6">Gerar Novos Convites</div>
        </q-card-section>

        <q-card-section> Gerar Novos Convites e visualizá-los</q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>Acessar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-4 q-px-md">
      <q-card class="my-card bg-red-6 text-white">
        <q-card-section>
          <div class="text-h6">Ver Participantes</div>
        </q-card-section>

        <q-card-section>
          Listar todos os participantes do bolão
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat @click="acessarOpcao(3)">Acessar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTokenStore } from "../stores/tokenStore";
import { useRouter } from "vue-router";

const router = useRouter();
const tokenStore = useTokenStore();
console.log(tokenStore.getToken);
const username = ref(tokenStore.getNomeUsuario);

function acessarOpcao(opcao) {
  if (opcao == 1) {
    router.push("/ver-convites");
  } else if (opcao == 2) {
    router.push("/novoconvite");
  } else if (opcao == 3) {
    router.push("/ver-participantes");
  }
}
</script>
