const routes = [
  {
    path: "/",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [{ path: "", component: () => import("pages/JogarPage.vue") }],
  },
  {
    path: "/registrar",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [{ path: "", component: () => import("pages/JogarPage.vue") }],
  },
  {
    path: "/convite-invalido",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ConviteInvalidoPage.vue") },
    ],
  },
  {
    path: "/registrado",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RegistradoPage.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/menu-admin",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [
      { path: "", component: () => import("pages/MenuAdminPage.vue") },
    ],
  },
  {
    path: "/ver-convites",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [
      { path: "", component: () => import("pages/VerConvitesPage.vue") },
    ],
  },
  {
    path: "/ver-participantes",
    component: () => import("layouts/SimpleLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ParticipantesPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
