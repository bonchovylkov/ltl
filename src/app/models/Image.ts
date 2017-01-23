export class Image {
  title: string;
  description: string;
  url: string;
  width:number;
  height:number;

   constructor(_title:string ,_description: string,_url:string, _width:number=null, _height:number=null)
   {

    this.title = _title;
    this.description = _description;
    this.url = _url;
    this.width = _width;
    this.height = _height;
  }
}