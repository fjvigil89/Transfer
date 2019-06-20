import { MatSidenavModule, MatCardModule, MatButtonModule, MatTabsModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
// For MDB Angular Free
// For MDB Angular Free
import { CarouselModule, ModalModule, WavesModule } from 'angular-bootstrap-md'
//import { CarouselComponent, SlideComponent, ModalDirective } from 'angular-bootstrap-md'
@NgModule({
    imports: [WavesModule, ModalModule, CarouselModule, MatSidenavModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
    exports: [WavesModule, ModalModule, CarouselModule, MatSidenavModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
})
export class MaterialModule { }
