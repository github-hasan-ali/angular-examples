import { Component, OnInit } from '@angular/core';
import { UserWithCardDto } from '../../../src/models/user';
import { UserService } from '../../../src/services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-card-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card-detail.component.html',
  styleUrl: './user-card-detail.component.scss'
})
export class UserCardDetailComponent implements OnInit {
  cardClasses:{id:number,class:string}[]=[];
  userWithCardDto!:UserWithCardDto;

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.getWithCard(param["userId"]);
    })
  }

  getWithCard(id:number){
    this.userService.getWithCardById(id).subscribe(result=>{
      this.userWithCardDto=result;
      this.cardClasses=[]
      this.userWithCardDto.cards.forEach(card=>{
        this.cardClasses.push({id:card.id,class:''});
      })
      if(this.cardClasses.length>0){
        this.cardClasses[0].class=' active';
      }
    })
  }
  getClass(cardId:number):string{
    return this.cardClasses.find(card=>card.id==cardId)?.class??''
  }
  left(){
    let active=this.cardClasses.findIndex(card=>card.class==' active')
    if(active>0){
      this.cardClasses[active-1].class=' active';
      this.cardClasses[active].class='';

    }
  }
  right(){
    let active=this.cardClasses.findIndex(card=>card.class==' active')
    if(active+1<this.cardClasses.length){
      this.cardClasses[active].class=' before';
      this.cardClasses[active+1].class=' active';

    }
  }
}
