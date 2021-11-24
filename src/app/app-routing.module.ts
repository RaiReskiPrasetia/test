import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'matakuliah',
    loadChildren: () => import('./matakuliah/matakuliah.module').then( m => m.MatakuliahPageModule)
  },
  {
    path: 'jadwal',
    loadChildren: () => import('./jadwal/jadwal.module').then( m => m.JadwalPageModule)
  },
  {
    path: 'nilai',
    loadChildren: () => import('./nilai/nilai.module').then( m => m.NilaiPageModule)
  },
  {
    path: 'krs',
    loadChildren: () => import('./krs/krs.module').then( m => m.KrsPageModule)
  },
  {
    path: 'keuangan',
    loadChildren: () => import('./keuangan/keuangan.module').then( m => m.KeuanganPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
