import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GameComponent } from './pages/game/game.component';

export const routes: Routes = [
		{path: '', component: MainComponent, pathMatch: 'full'},
		{path: 'game', component: GameComponent}
];
