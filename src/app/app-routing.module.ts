import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TfIconComponent} from './tf/tf-icon/tf-icon.component';
import { IconExampleComponent } from './pages/icon-example/icon-example.component';
import{LabelExampleComponent}from'./pages/label-example/label-example.component';
import {TfLabelComponent}from'./tf/tf-label/tf-label.component';
import {ButtonExampleComponent}from'./pages/button-example/button-example.component';
  import { from } from 'rxjs';
const routes: Routes = [{ path: '',
redirectTo: '/Home',
pathMatch: 'full'
},

{ path: 'icon-example', component: IconExampleComponent },
{path:'label-example',component:LabelExampleComponent},
{path:'button-example',component:ButtonExampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
