import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts';
import { RoleBasedAccess } from '../role-based-access';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule, RoleBasedAccess],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.fetchPosts().subscribe((posts) => {
      this.userPosts = posts;
    });
  }

  userPosts: any[] = [];
  likedPosts: Set<number> = new Set();
  newComments: Record<number, string> = {};

  likePost(postId: number): void {
    if (this.likedPosts.has(postId)) {
      this.likedPosts.delete(postId);
    } else {
      this.likedPosts.add(postId);
    }
  }

  addComment(postId: number): void {
    const post = this.userPosts.find((post) => post.id === postId);
    const commentText = this.newComments[postId] ?? '';

    if (post && commentText.trim()) {
      post.comments.push(commentText);
      this.newComments[postId] = '';
    }
  }
}
