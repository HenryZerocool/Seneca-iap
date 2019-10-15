import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModuleComponent } from './test-module/test-module.component';
import { TestModule2Component } from './test-module2/test-module2.component';



@NgModule({
  declarations: [TestModuleComponent, TestModule2Component],
  imports: [
    CommonModule
  ]
})
export class AdmintestModule { }
