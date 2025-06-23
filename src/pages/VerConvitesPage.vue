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
    name: "convite",
    align: "left",
    label: "Convite",
    field: "convite",
    sortable: true,
  },
  {
    name: "url",
    align: "left",
    label: "URL",
    field: "url",
    sortable: true,
  },
  {
    name: "participante",
    align: "left",
    label: "Partcipante",
    field: "nome_participante",
    sortable: true,
  },
  {
    name: "status",
    align: "left",
    label: "Status",
    field: "status",
    sortable: true,
  },
];

recuperarConvites();

function recuperarConvites() {
  axios
    .get(`${process.env.URL_BACKEND}/convites`)
    .then((response) => {
      response.data.forEach((element) => {
        const row = {
          convite: element.chave_convite,
          url: `${process.env.URL_FRONTEND}/#/registrar?convite=${element.chave_convite}`,
          status: element.id_utilizado ? "Utilizado" : "Disponível",
          nome_participante: element.Participante.nome_participante,
        };
        rows.value.push(row);
      });
    })
    .catch((error) => {
      console.log("Houve um erro ao recuperar os convites: (" + error + ")");
    });
}
</script>
