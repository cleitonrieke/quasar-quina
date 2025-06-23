<template>
  <div class="row q-pa-md">
    <h5>Listagem de Convites</h5>
  </div>
  <div class="row q-pa-md">
    <div class="col-12">
      <q-table title="Convites" :rows="rows" :columns="columns" row-key="name">
        <template v-slot:body-cell="props">
          <q-td
            :props="props"
            :class="
              props.row.status == 'Utilizado'
                ? 'bg-orange'
                : 'bg-green-9 text-white'
            "
          >
            {{ props.value }}
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
  <div class="row q-pa-md">
    <q-btn label="Voltar" to="/menu-admin" color="blue-4" />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useTokenStore } from "../stores/tokenStore";

const tokenStore = useTokenStore();
axios.defaults.headers.common = {
  Authorization: `Bearer ${tokenStore.getToken}`,
};

const rows = ref([]);

const columns = [
  ,
  {
    name: "nome",
    align: "left",
    label: "Nome",
    field: "nome",
    sortable: true,
  },
  {
    name: "pago",
    align: "left",
    label: "Pago",
    field: "ds_pago",
    sortable: true,
  },
];

recuperarParticipantes();

function recuperarParticipantes() {
  axios
    .get(`${process.env.URL_BACKEND}/participantes`)
    .then((response) => {
      response.data.forEach((element) => {
        const row = {
          id: element.id,
          nome: element.nome_participante,
          id_pago: element.id_pago,
          ds_pago: element.id_pagamento == true ? "Pago" : "Pendente",
          id_convite: element.id_convite,
        };
        rows.value.push(row);
      });
    })
    .catch((error) => {
      console.log("Houve um erro ao recuperar os convites: (" + error + ")");
    });
}
</script>
