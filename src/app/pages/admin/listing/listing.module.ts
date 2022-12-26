import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { HeadersModule } from "../../../core/headers/headers.module";
import { FoodItemModule } from "../../../shared/food-item/food-item.module";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        ListingComponent
    ],
    imports: [
        CommonModule,
        ListingRoutingModule,
        HeadersModule,
        FoodItemModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class ListingModule { }
