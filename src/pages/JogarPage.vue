<!-- pages/ImagePage.vue -->
<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <img
        alt="Example Image"
        src="~assets/bolao_quina_25.png"
        style="width: 400px; height: 400px"
      />
    </div>
    <div class="q-pa-md row justify-center">
      <q-btn
        push
        color="black"
        text-color="white"
        label="Selecione 5 Dezenas"
      />
    </div>
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[0]"
          glossy
          text-color="white"
          @click="clickBotao(0)"
          >01</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[1]"
          glossy
          text-color="white"
          @click="clickBotao(1)"
          >02</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[2]"
          glossy
          text-color="white"
          @click="clickBotao(2)"
          >03</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[3]"
          glossy
          text-color="white"
          @click="clickBotao(3)"
          >04</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[4]"
          glossy
          text-color="white"
          @click="clickBotao(4)"
          >05</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[5]"
          glossy
          text-color="white"
          @click="clickBotao(5)"
          >06</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[6]"
          glossy
          text-color="white"
          @click="clickBotao(6)"
          >07</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[7]"
          glossy
          text-color="white"
          @click="clickBotao(7)"
          >08</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[8]"
          glossy
          text-color="white"
          @click="clickBotao(8)"
          >09</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[9]"
          glossy
          text-color="white"
          @click="clickBotao(9)"
          >10</q-btn
        >
      </div>
    </div>
    <!-- 2o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[10]"
          glossy
          text-color="white"
          @click="clickBotao(10)"
          >11</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[11]"
          glossy
          text-color="white"
          @click="clickBotao(11)"
          >12</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[12]"
          glossy
          text-color="white"
          @click="clickBotao(12)"
          >13</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[13]"
          glossy
          text-color="white"
          @click="clickBotao(13)"
          >14</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[14]"
          glossy
          text-color="white"
          @click="clickBotao(14)"
          >15</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[15]"
          glossy
          text-color="white"
          @click="clickBotao(15)"
          >16</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[16]"
          glossy
          text-color="white"
          @click="clickBotao(16)"
          >17</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[17]"
          glossy
          text-color="white"
          @click="clickBotao(17)"
          >18</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[18]"
          glossy
          text-color="white"
          @click="clickBotao(18)"
          >19</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[19]"
          glossy
          text-color="white"
          @click="clickBotao(19)"
          >20</q-btn
        >
      </div>
    </div>
    <!-- 3o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[20]"
          glossy
          text-color="white"
          @click="clickBotao(20)"
          >21</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[21]"
          glossy
          text-color="white"
          @click="clickBotao(21)"
          >22</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[22]"
          glossy
          text-color="white"
          @click="clickBotao(22)"
          >23</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[23]"
          glossy
          text-color="white"
          @click="clickBotao(23)"
          >24</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[24]"
          glossy
          text-color="white"
          @click="clickBotao(24)"
          >25</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[25]"
          glossy
          text-color="white"
          @click="clickBotao(25)"
          >26</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[26]"
          glossy
          text-color="white"
          @click="clickBotao(26)"
          >27</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[27]"
          glossy
          text-color="white"
          @click="clickBotao(27)"
          >28</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[28]"
          glossy
          text-color="white"
          @click="clickBotao(28)"
          >29</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[29]"
          glossy
          text-color="white"
          @click="clickBotao(29)"
          >30</q-btn
        >
      </div>
    </div>
    <!-- 4o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[30]"
          glossy
          text-color="white"
          @click="clickBotao(30)"
          >31</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[31]"
          glossy
          text-color="white"
          @click="clickBotao(31)"
          >32</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[32]"
          glossy
          text-color="white"
          @click="clickBotao(32)"
          >33</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[33]"
          glossy
          text-color="white"
          @click="clickBotao(33)"
          >34</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[34]"
          glossy
          text-color="white"
          @click="clickBotao(34)"
          >35</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[35]"
          glossy
          text-color="white"
          @click="clickBotao(35)"
          >36</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[36]"
          glossy
          text-color="white"
          @click="clickBotao(36)"
          >37</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[37]"
          glossy
          text-color="white"
          @click="clickBotao(37)"
          >38</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[38]"
          glossy
          text-color="white"
          @click="clickBotao(38)"
          >39</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[39]"
          glossy
          text-color="white"
          @click="clickBotao(39)"
          >40</q-btn
        >
      </div>
    </div>
    <!-- 5o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[40]"
          glossy
          text-color="white"
          @click="clickBotao(40)"
          >41</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[41]"
          glossy
          text-color="white"
          @click="clickBotao(41)"
          >42</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[42]"
          glossy
          text-color="white"
          @click="clickBotao(42)"
          >43</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[43]"
          glossy
          text-color="white"
          @click="clickBotao(43)"
          >44</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[44]"
          glossy
          text-color="white"
          @click="clickBotao(44)"
          >45</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[45]"
          glossy
          text-color="white"
          @click="clickBotao(45)"
          >46</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[46]"
          glossy
          text-color="white"
          @click="clickBotao(46)"
          >47</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[47]"
          glossy
          text-color="white"
          @click="clickBotao(47)"
          >48</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[48]"
          glossy
          text-color="white"
          @click="clickBotao(48)"
          >49</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[49]"
          glossy
          text-color="white"
          @click="clickBotao(49)"
          >50</q-btn
        >
      </div>
    </div>
    <!-- 6o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[50]"
          glossy
          text-color="white"
          @click="clickBotao(50)"
          >51</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[51]"
          glossy
          text-color="white"
          @click="clickBotao(51)"
          >52</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[52]"
          glossy
          text-color="white"
          @click="clickBotao(52)"
          >53</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[53]"
          glossy
          text-color="white"
          @click="clickBotao(53)"
          >54</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[54]"
          glossy
          text-color="white"
          @click="clickBotao(54)"
          >55</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[55]"
          glossy
          text-color="white"
          @click="clickBotao(55)"
          >56</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[56]"
          glossy
          text-color="white"
          @click="clickBotao(56)"
          >57</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[57]"
          glossy
          text-color="white"
          @click="clickBotao(57)"
          >58</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[58]"
          glossy
          text-color="white"
          @click="clickBotao(58)"
          >59</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[59]"
          glossy
          text-color="white"
          @click="clickBotao(59)"
          >60</q-btn
        >
      </div>
    </div>
    <!-- 7o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[60]"
          glossy
          text-color="white"
          @click="clickBotao(60)"
          >61</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[61]"
          glossy
          text-color="white"
          @click="clickBotao(61)"
          >62</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[62]"
          glossy
          text-color="white"
          @click="clickBotao(62)"
          >63</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[63]"
          glossy
          text-color="white"
          @click="clickBotao(63)"
          >64</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[64]"
          glossy
          text-color="white"
          @click="clickBotao(64)"
          >65</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[65]"
          glossy
          text-color="white"
          @click="clickBotao(65)"
          >66</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[66]"
          glossy
          text-color="white"
          @click="clickBotao(66)"
          >67</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[67]"
          glossy
          text-color="white"
          @click="clickBotao(67)"
          >68</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[68]"
          glossy
          text-color="white"
          @click="clickBotao(68)"
          >69</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[69]"
          glossy
          text-color="white"
          @click="clickBotao(69)"
          >70</q-btn
        >
      </div>
    </div>
    <!-- 8o linha -->
    <div class="q-pa-md row justify-center">
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[70]"
          glossy
          text-color="white"
          @click="clickBotao(70)"
          >71</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[71]"
          glossy
          text-color="white"
          @click="clickBotao(71)"
          >72</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[72]"
          glossy
          text-color="white"
          @click="clickBotao(72)"
          >73</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[73]"
          glossy
          text-color="white"
          @click="clickBotao(73)"
          >74</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[74]"
          glossy
          text-color="white"
          @click="clickBotao(74)"
          >75</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[75]"
          glossy
          text-color="white"
          @click="clickBotao(75)"
          >76</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[76]"
          glossy
          text-color="white"
          @click="clickBotao(76)"
          >77</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[77]"
          glossy
          text-color="white"
          @click="clickBotao(77)"
          >78</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[78]"
          glossy
          text-color="white"
          @click="clickBotao(78)"
          >79</q-btn
        >
      </div>
      <div class="col-1">
        <q-btn
          round
          :color="corBotao[79]"
          glossy
          text-color="white"
          @click="clickBotao(79)"
          >80</q-btn
        >
      </div>
    </div>

    <br />
    <div class="q-pa-md row justify-center">
      <div class="col-4">
        Quantidade de Números selecionados: <b>{{ qtdNumeros }}</b>
      </div>
    </div>
    <q-form @submit="registraParcipante" @reset="resetar" class="q-gutter-md">
      <div class="q-pa-md row justify-center">
        <div class="col-9">
          <q-input
            rounded
            outlined
            v-model="nomeParticipante"
            label="Informe aqui seu nome!"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Digite seu nome para poder se registrar !',
            ]"
          />
          <q-checkbox
            v-model="aceite"
            label="Eu quero ser milionário e me registrar no Bolão Mega Brothers da Quina de São João 2025!"
            color="red"
          />
        </div>
      </div>
      <div class="q-pa-md row justify-center">
        <div class="col-3">
          <q-btn label="Registrar" type="submit" color="red" />
          <q-btn
            label="Resetar"
            type="reset"
            color="red"
            flat
            class="q-ml-sm"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const route = useRoute();
const router = useRouter();
const nomeParticipante = ref(null);
const aceite = ref(false);
let numerosSelecionados = [];
var convite = route.query["convite"];
console.log(`convite ${convite}`);

let qtdNumeros = 0;
const corBotao = ref([
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
  "red",
]);
const selecionado = [
false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

validarConvite(convite);

function clickBotao(indice) {
  if (selecionado[indice] == false) {
    if (numerosSelecionados.length == 5) {
      $q.dialog({
        title: "CALMA CALABRESO!",
        message:
          "Você já selecionou 5 números! Deselecione um número para poder selecionar outro.",
      });
      return;
    }
    selecionado[indice] = true;
    corBotao.value[indice] = "green";
    qtdNumeros++;
    numerosSelecionados.push(indice + 1);
  } else {
    selecionado[indice] = false;
    corBotao.value[indice] = "red";
    qtdNumeros--;
    numerosSelecionados = numerosSelecionados.filter(function (item) {
      return item !== indice + 1;
    });
  }
}

function validarConvite(convite) {
  console.log(`URL DO BACKEND: ${process.env.URL_BACKEND}`);
  axios
    .get(`${process.env.URL_BACKEND}/convites/validar-convite?id=${convite}`)
    .then((response) => {
      if (!response.data.id_utilizado) {
        console.log("Convite is valid");
      } else {
        console.log("Convite is not valid");
      }
    })
    .catch((error) => {
      console.error("Error validating convite:", error);
      router.push({ path: "/convite-invalido" });
    });
}

function resetar() {}

function registraParcipante() {
  if (!aceite.value) {
    $q.dialog({
      title: "Alerta!",
      message:
        "Você precisa aceitar ser um milionário para se registrar. Clique no checkbox e tente novamente.",
    });
    return;
  }
  if (numerosSelecionados.length != 5) {
    $q.dialog({
      title: "Alerta!",
      message:
        "Selecione 5 números para poder se registrar. Nem Mais Nem Menos !",
    });
    return;
  }
  axios
    .post(`${process.env.URL_BACKEND}/participantes/registrar`, {
      nome_participante: nomeParticipante.value,
      convite: convite,
      numeros_selecionados: numerosSelecionados.toString(),
    })
    .then((response) => {
      console.log(response.data);
      router.push({ path: "/registrado" });
    })
    .catch((error) => {
      console.error("Error registering participant:", error);
      $q.dialog({
        title: "Erro!",
        message:
          "Erro ao se registrar. Tente novamente mais tarde. (" + error + ")",
      });
    });
}
</script>
