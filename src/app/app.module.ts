import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NavService } from './iap/iap-admin/nav.service';
// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule,
  MatStepperModule,
  MatSidenavModule,
  MatIconModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';
// import {  } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { IapContentModule } from './iap/iap-admin/iap-content/iap-content.module';
import { AppComponent } from './app.component';
import { IapComponent } from './iap/iap.component';
import { IapAdminComponent } from './iap/iap-admin/iap-admin.component';
import { HeaderComponent } from './iap/iap-admin/header/header.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';
import { IapAgentComponent } from './iap/iap-agent/iap-agent.component';
import { LoginComponent } from './iap/login/login.component';
import { AgentResourcesComponent } from './iap/iap-agent/agent-resources/agent-resources.component';
import { MenuListItemComponent } from './iap/iap-admin/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IapComponent,
    IapAdminComponent,
    HeaderComponent,
    IapContentComponent,
    IapHomeComponent,
    AgentResourcesComponent,
    IapAgentComponent,
    LoginComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IapContentModule,
    FormsModule,
    QuillModule.forRoot(),
    HttpClientModule,
    HttpModule,
    // Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
