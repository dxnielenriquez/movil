import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },

  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule)
  },

  {
    path: 'historialventas',
    loadChildren: () => import('./pages/historialventas/historialventas.module').then(m => m.HistorialventasPageModule)
  },

  {
    path: 'registroqr',
    loadChildren: () => import('./pages/registroqr/registroqr.module').then(m => m.RegistroqrPageModule)
  },

    {
    path: 'recomendaciones',
    loadChildren: () => import('./pages/recomendaciones/recomendaciones.module').then(m => m.RecomendacionesPageModule)
  },


  {
    path: 'productoinfo',
    loadChildren: () => import('./pages/productoinfo/productoinfo.module').then(m => m.productoinfoPageModule)
  },

  {
    path: 'analisisventas',
    loadChildren: () => import('./pages/analisisventas/analisisventas.module').then(m => m.AnalisisventasPageModule)
  },


  {
    path: 'editproducto',
    loadChildren: () => import('./pages/editproducto/editproducto.module').then(m => m.EditproductoPageModule)
  },

  {
    path: 'registroproductoqr',
    loadChildren: () => import('./pages/registroproductoqr/registroproductoqr.module').then(m => m.RegistroproductoqrPageModule)
  },


  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosPageModule)
  },

  {
    path: 'addproductos',
    loadChildren: () => import('./pages/addproductos/addproductos.module').then(m => m.AddproductosPageModule)
  },


  {
    path: 'registroventas',
    loadChildren: () => import('./pages/registroventas/registroventas.module').then(m => m.RegistroventasPageModule)
  },


  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialPageModule)
  },

  {
    path: 'addempleado',
    loadChildren: () => import('./pages/addempleado/addempleado.module').then(m => m.AddempleadoPageModule)
  },

  {
    path: 'editempleado',
    loadChildren: () => import('./pages/editempleado/editempleado.module').then(m => m.EditempleadoPageModule)
  },



  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then(m => m.IniciarSesionPageModule)
  },
  {
    path: 'empleadoinfo',
    loadChildren: () => import('./pages/empleadoinfo/empleadoinfo.module').then(m => m.EmpleadoinfoPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./pages/empresa/empresa.module').then(m => m.EmpresaPageModule)
  },
  {
    path: 'editarempresa',
    loadChildren: () => import('./pages/editarempresa/editarempresa.module').then(m => m.EditarempresaPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
