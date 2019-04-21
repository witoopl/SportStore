import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import { Product } from "./product.model";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule{}