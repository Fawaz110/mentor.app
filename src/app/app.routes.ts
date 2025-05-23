import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./Layouts/blank-layout/blank-layout.component').then(c => c.BlankLayoutComponent), children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadComponent: () => import('./Components/discover/discover.component').then(c => c.DiscoverComponent) },
            { path: 'following', loadComponent: () => import('./Components/following/following.component').then(c => c.FollowingComponent) },
            {
                path: 'users/:id', loadComponent: () => import('./Components/user/user.component').then(c => c.UserComponent), children: [
                    { path: '', redirectTo: 'experience', pathMatch: 'full' },
                    { path: 'experience', loadComponent: () => import('./Components/experience/experience.component').then(c => c.ExperienceComponent) },
                    { path: 'skills', loadComponent: () => import('./Components/skills/skills.component').then(c => c.SkillsComponent) },
                    { path: 'reviews', loadComponent: () => import('./Components/reviews/reviews.component').then(c => c.ReviewsComponent) },
                ]
            },
        ]
    },
    {
        path: 'auth', loadComponent: () => import('./Layouts/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent), children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadComponent: () => import('./Components/login/login.component').then(c => c.LoginComponent) },
            { path: 'signup', loadComponent: () => import('./Components/signup/signup.component').then(c => c.SignupComponent) },
        ]
    },
    { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(c => c.NotFoundComponent) },
];
