import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconExampleComponent } from './pages/icon-example/icon-example.component';
import { LabelExampleComponent } from './pages/label-example/label-example.component';
import { ButtonExampleComponent } from './pages/button-example/button-example.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

  { path: 'icon-example', component: IconExampleComponent },
  { path: 'label-example', component: LabelExampleComponent },
  { path: 'button-example', component: ButtonExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
