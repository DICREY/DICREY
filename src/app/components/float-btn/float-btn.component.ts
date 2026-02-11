// Libraries 
import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matChatBubbleOutline, matWhatsappOutline } from "@ng-icons/material-icons/outline"

// Decor 
@Component ({
    selector: "app-float-btn",
    templateUrl: "./float-btn.component.html",
    styleUrls: ["./float-btn.component.css"],
    imports: [ NgIcon ],
    viewProviders: [ provideIcons({ matChatBubbleOutline, matWhatsappOutline }) ]
})

// Class Component
export class FloatBtnComponent { }