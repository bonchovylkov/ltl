import { Injectable } from '@angular/core';
import {FeedModels} from '../../models'
import {layoutPaths} from '../../theme/index'

@Injectable()
export class FeedMapperService {
   
   unknownFeedAuthor = "unknown"

    mapCommentsToFeed(rawComments): FeedModels[] {
        let feed = [];
        for(let i=0;i<rawComments.length;i++){
            let modelFeed = new FeedModels();
            modelFeed.author = rawComments[i].UserName || this.unknownFeedAuthor;
            modelFeed.text =  rawComments[i].Content;
            modelFeed.authorPhotoUrl = rawComments[i].UserPicture || layoutPaths.images.noPhoto;
            modelFeed.time = rawComments[i].CreatedOn
            modelFeed.ago = rawComments[i].CreatedOn
            //static data
            modelFeed.expanded = false;
            modelFeed.type = 'text-message'; // type: 'video-message',type: 'image-message',type: 'geo-message',

            feed.push(modelFeed);
        }

        return feed;
    }
}