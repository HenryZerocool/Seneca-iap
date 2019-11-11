import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
  MatDividerModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatExpansionModule,
  MatSelectModule,
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
import { AgentNewsfeedComponent } from './iap/iap-agent/agent-newsfeed/agent-newsfeed.component';
import { AgentResourcesComponent } from './iap/iap-agent/agent-resources/agent-resources.component';
import { AgentHeaderComponent } from './iap/iap-agent/agent-header/agent-header.component';
import { LoginComponent } from './iap/login/login.component';
import { AgentNewsfeedDetailsComponent } from './iap/iap-agent/agent-newsfeed/agent-newsfeed-details/agent-newsfeed-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IapComponent,
    IapAdminComponent,
    HeaderComponent,
    IapContentComponent,
    IapHomeComponent,
    IapAgentComponent,
    AgentNewsfeedComponent,
    AgentResourcesComponent,
    AgentHeaderComponent,
    IapAgentComponent,
    LoginComponent,
    AgentNewsfeedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IapContentModule,
    FormsModule,
    QuillModule.forRoot(),
    HttpClientModule,
    // HttpModule,
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
    MatDividerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
