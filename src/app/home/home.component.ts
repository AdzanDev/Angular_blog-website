import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = "Our Blog"

  assets = [
    { gambar: 'assets/gambar1.jpg', titleCard: 'Post 1 Headline' },
    { gambar: 'assets/gambar2.jpg', titleCard: 'Post 2 Headline' },
    { gambar: 'assets/gambar3.jpg', titleCard: 'Post 3 Headline' },
  ]
}
