import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile';
// import { ComponentsActivitiesComponent } from './components-activities/components-activities';
import { UserActivitiesComponent } from './user-activities/user-activities';
import { UserConfigComponent } from './user-config/user-config';
@NgModule({
	declarations: [UserProfileComponent,
    UserActivitiesComponent,
    UserActivitiesComponent,
    UserActivitiesComponent,
    UserConfigComponent],
	imports: [],
	exports: [UserProfileComponent,
    UserActivitiesComponent,
    UserActivitiesComponent,
    UserActivitiesComponent,
    UserConfigComponent]
})
export class ComponentsModule {}
