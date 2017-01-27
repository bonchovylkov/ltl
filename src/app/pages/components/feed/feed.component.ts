import {Component, ViewEncapsulation,Input} from '@angular/core';
import {FeedModels} from '../../../models'
import {FeedService} from './feed.service';

@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./feed.scss')],
  template: require('./feed.html'),
  providers:[FeedService]
})
export class Feed {

  @Input() inputFeed:Array<FeedModels>;

  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {
  }

  ngOnInit() {
    if(this.inputFeed){
        this.feed = this.inputFeed;
    }
    else  {
      this._loadFeed();   
    }
    
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
