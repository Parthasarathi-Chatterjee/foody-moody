import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewItemRoutingModule } from './add-new-item-routing.module';
import { AddNewItemComponent } from './add-new-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';
import { HeadersModule } from "../../../core/headers/headers.module";


@NgModule({
    declarations: [
        AddNewItemComponent
    ],
    imports: [
        CommonModule,
        AddNewItemRoutingModule,
        // mat
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        // form
        ReactiveFormsModule,
        HeadersModule
    ]
})
export class AddNewItemModule { }
