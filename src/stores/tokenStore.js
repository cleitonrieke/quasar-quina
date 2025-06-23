import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    nomeUsuario: "",
    token: null,
    isAuthenticated: false,
  }),
  getters: {
    getToken: (state) => state.token,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getNomeUsuario: (state) => state.nomeUsuario,
  },
  actions: {
    setToken(nomeUsuario, token) {
      this.nomeUsuario = nomeUsuario;
      this.token = token;
      this.isAuthenticated = true;
    },
    clearToken() {
      this.nomeUsuario = "";
      this.token = null;
      this.isAuthenticated = false;
    },
  },
});
