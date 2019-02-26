import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { invalid } from '@angular/compiler/src/render3/view/util';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle: '';
  enteredContent: '';

  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  onAddPost = (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}
