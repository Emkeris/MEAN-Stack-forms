import { Injectable } from '@angular/core';
import { Post } from './post.metod';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({providedIn: 'root'})

export class PostService {
  private posts: Post[] = [];

  getPost = () => {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
  }
}
