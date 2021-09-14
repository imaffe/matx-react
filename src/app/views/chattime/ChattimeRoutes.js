import React from "react";
import {authRoles} from "../../auth/authRoles";

const chattimeRoutes = [
  {
    path: '/chattime',
    component: React.lazy(() => import('./Chattime')),
    exact: true,
    auth: authRoles.sa,
  },
  {
    path: '/chattime/:docId',
    component: React.lazy(() => import('./shared/ChattimeDoc')),
    auth: authRoles.sa,
  }
]

export default chattimeRoutes
