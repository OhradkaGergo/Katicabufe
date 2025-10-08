import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/categories/list/list.component';
import { TrafficListComponent } from './components/traffic/list/list.component';
import { TrafficFormComponent } from './components/traffic/form/form.component';
import { CatFormComponent } from './components/categories/form/form.component';
import { CustomersFormComponent } from './components/customers/form/form.component';
import { CustomersListComponent } from './components/customers/list/list.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { ProductsFormComponent } from './components/products/form/form.component';
import { ProductsListComponent } from './components/products/list/list.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoryListComponent
    },
    {
        path: 'traffic',
        component: TrafficListComponent
    },
    {
        path: 'trafficform',
        component: TrafficFormComponent
    },
    {
        path: 'catform',
        component: CatFormComponent
    },
    
    {
        path: 'customersform',
        component: CustomersFormComponent
    },
    {
        path: 'customerslist',
        component: CustomersListComponent
    },

    {
        path: 'pricelist',
        component: PricelistComponent
    },

    {
        path: 'productsform',
        component: ProductsFormComponent
    },
    {
        path: 'productslist',
        component: ProductsListComponent
    }
];
