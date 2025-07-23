import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userEmail = '';

  topProducts = [
    {
      id: 1,
      name : 'jacket',
      price : 500,
      imageUrl: 'https://images.openai.com/thumbnails/url/D81Yp3icDclLDoIwFADA27hD0BBDTYypChU1JvLV7qB8ikgt9KHizTyKt9HZzvfDAaSa63ouWDdIyDMNUmGMSwUJVGzM7o2u-F3KSpTLdvG_OT5miDCvC_bktHXtBvV9SF6TKDtAO6xWTxxtphGlFrHe-cUvH8wzHTKYMQobxofT23yJ-IIw0kI_E9e-vflgPYK0SPgMtLOxr_FuQxFXBrFdr3Yo2WFX3KiAgBRdOepVKxdrbP8A9cJB3A',
      color: 'black',
      gender: 'male',
      category: 'casual',
      brand: 'addidas',
      is_in_inventory: true

    },
    {
      id: 2,
      name : 't-shirt1',
      price : 500,
      imageUrl: 'https://images.openai.com/thumbnails/url/DLgXFHicDclRCoIwGADg2_SWFmKpIDFtGSoLnQT1IupExdRN_1HrSp2o29T3-n0_LQBfHF2vx2pWHGq2hnLcas0CBXSVVk2DvrQT593YHIT7PwcRZgcVXYsLfpWhQvadFOPjZLSz8gLp1fn7JIfUn7GKcr6PzqqTBAnL322to725BvPrQhE1b2DyJ415lDBTNGD0XmruhiLuekkwy5K0JiEFO9us5CK46yP8A3RHPKk',
      color: 'black',
      gender: 'male',
      category: 'casual',
      brand: 'addidas',
      is_in_inventory: true

    },
    {
      id: 3,
      name : 't-shirt2',
      price : 500,
      imageUrl: 'https://images.openai.com/thumbnails/url/D81Yp3icDclLDoIwFADA27hD0BBDTYypChU1JvLV7qB8ikgt9KHizTyKt9HZzvfDAaSa63ouWDdIyDMNUmGMSwUJVGzM7o2u-F3KSpTLdvG_OT5miDCvC_bktHXtBvV9SF6TKDtAO6xWTxxtphGlFrHe-cUvH8wzHTKYMQobxofT23yJ-IIw0kI_E9e-vflgPYK0SPgMtLOxr_FuQxFXBrFdr3Yo2WFX3KiAgBRdOepVKxdrbP8A9cJB3A',
      color: 'black',
      gender: 'male',
      category: 'casual',
      brand: 'addidas',
      is_in_inventory: false

    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    this.isLoggedIn = !!user;
    this.userEmail = user?.email || '';
  }
}
