import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostsServiceService]
})
export class UserComponent implements OnInit {
  myData: any;
  posts: any[];

  constructor(private postsService: PostsServiceService) {
    this.myData = {
      name: "mostafa",
      h1:"reading",
      h2:"writtdasdasing",
      h3:"codding"
    }
    this.postsService.getPosts()
                    .subscribe(posts => {
                      this.posts = posts
                    });
   }

  ngOnInit() {
  }
  setSubmit(value: any){
    console.log(value);
  }

}
