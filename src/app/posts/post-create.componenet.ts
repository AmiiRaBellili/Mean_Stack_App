import { Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls :['./post-create.component.css']
})
export class PostCreateComponent{
    entredTitle = '';
    entredContent = '';
   @Output() postCreated = new EventEmitter(); 
    onAddPost(){
        const post = {
          title: this.entredTitle,

          content:this.entredContent
                 };
        this.postCreated.emit(post);
    }
  
}

