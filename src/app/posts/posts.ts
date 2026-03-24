import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  @Input() userPosts: any[] = [];
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
