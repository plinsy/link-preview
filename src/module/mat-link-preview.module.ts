import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {MatLinkPreviewService} from './service/mat-link-preview.service';
import {DEFAULT_CONFIG, NgxLinkifyjsConfigToken, NgxLinkifyjsModule, NgxLinkifyjsService} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/spinner';
import {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
import {MatLinkPreviewComponent} from './components/mat-link-preview/mat-link-preview.component';
import {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';

// Export module's public API
export {LinkPreview} from './interfaces/linkpreview.interface'
export {MatLinkPreviewComponent} from './components/mat-link-preview/mat-link-preview.component';
export {MatLinkPreviewContainerComponent} from './components/mat-link-preview-container/mat-link-preview-container.component';
export {MatLinkPreviewDirective} from './directives/mat-link-preview.directive';
export {MatLinkPreviewService} from './service/mat-link-preview.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxLinkifyjsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [MatLinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective],
  declarations: [MatLinkPreviewComponent, MatLinkPreviewContainerComponent, MatLinkPreviewDirective]
})
export class MatLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatLinkPreviewModule,
      providers: [
        MatLinkPreviewService,
        NgxLinkifyjsService,
        {
          provide: NgxLinkifyjsConfigToken,
          useValue: DEFAULT_CONFIG
        }]
    };
  }
}
