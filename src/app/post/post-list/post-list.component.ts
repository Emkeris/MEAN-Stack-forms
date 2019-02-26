import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.metod';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  // posts = [
  //   {title: "First Posts, content: "This is first post"},
  //   {title: "Second Post", content: "This is second post"},
  //   {title: "Third Post", content: "This is third post"}
  // ];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
  }

}
