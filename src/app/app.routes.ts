import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./Layouts/blank-layout/blank-layout.component').then(c => c.BlankLayoutComponent), children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadComponent: () => import('./Components/discover/discover.component').then(c => c.DiscoverComponent) },
            { path: 'posts/:id', loadComponent: () => import('./Components/post-details/post-details.component').then(c => c.PostDetailsComponent) },
            { path: 'following', loadComponent: () => import('./Components/following/following.component').then(c => c.FollowingComponent) },
            { path: 'mentors', loadComponent: () => import('./Components/mentors/mentors.component').then(c => c.MentorsComponent) },
            { path: 'settings', loadComponent: () => import('./Components/settings/settings.component').then(c => c.SettingsComponent) },
            { path: 'settings/personal-data', loadComponent: () => import('./Components/personal-data/personal-data.component').then(c => c.PersonalDataComponent) },
            { path: 'settings/confirm-email', loadComponent: () => import('./Components/confirm-email/confirm-email.component').then(c => c.ConfirmEmailComponent) },
            { path: 'settings/confirm-phone', loadComponent: () => import('./Components/confirm-phone/confirm-phone.component').then(c => c.ConfirmPhoneComponent) },
            { path: 'settings/change-password', loadComponent: () => import('./Components/change-password/change-password.component').then(c => c.ChangePasswordComponent) },
            { path: 'profile', loadComponent: () => import('./Components/profile/profile.component').then(c => c.ProfileComponent) },
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
    {
        path: 'support', loadComponent: () => import('./Layouts/support-layout/support-layout.component').then(c => c.SupportLayoutComponent), children: [
            { path: '', redirectTo: 'report', pathMatch: 'full' },
            { path: 'report', loadComponent: () => import('./Components/report/report.component').then(c => c.ReportComponent) }
        ]
    },
    { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(c => c.NotFoundComponent) },
];
