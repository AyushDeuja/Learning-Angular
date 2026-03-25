import { Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'posts', component: Posts },
  { path: 'profile', component: Profile },
];
