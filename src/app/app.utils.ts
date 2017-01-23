export class Utils {

     static stringFormat (format:String,args:any[]):String {
            
            return format.replace(/{(\d+)}/g, function (match:any, number:any) {
                return typeof args[number] != 'undefined'
                  ? args[number]
                  : match
                ;
            });
        }

}