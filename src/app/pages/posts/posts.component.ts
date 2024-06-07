import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  @Input()
  mensajes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts()
    // .subscribe((posts: any) => {
    //   console.log(posts);
    //   this.mensajes = posts;
    // });
  }


}
