import { Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { TransferComponent } from '../components/transfer/transfer.component';
import { CardDetailComponent } from '../components/card/card-detail/card-detail.component';
import { CardComponent } from '../components/card/card.component';
import { TransferDetailComponent } from '../components/transfer/transfer-detail/transfer-detail.component';
import { UserCardDetailComponent } from '../components/user/user-card-detail/user-card-detail.component';

export const routes: Routes = [
  {path:"users", component: UserComponent},
  {path:"transfers", component: TransferComponent},
  {path:"cards", component:CardComponent},
  {path:"cards/:id", component:CardDetailComponent},
  {path:"transfers/:id", component:TransferDetailComponent},
  {path:"users/cards/:userId", component:UserCardDetailComponent}
];
