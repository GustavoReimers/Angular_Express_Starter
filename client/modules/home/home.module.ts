import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import { ContactModule } from "../contact/contact.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        SharedModule.forRoot(),
        ContactModule
    ],
    declarations: [ HomeComponent ],
    bootstrap:    [ HomeComponent ]
})
export class HomeModule { }