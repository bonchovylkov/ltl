export class AppSettings {
   public static API_ENDPOINT_BASE='http://localhost:50779/' 
   public static API_ENDPOINT=AppSettings.API_ENDPOINT_BASE + 'api/'
   public static API_ENDPOINT_REGISTER = AppSettings.API_ENDPOINT + 'account/register'
   public static API_ENDPOINT_GET_FITNESS_PROGRAMS = AppSettings.API_ENDPOINT + 'FitnessPrograms/ShowFitnessPrograms?skip={0}&take={1}'
   public static API_ENDPOINT_GET_FITNESS_PROGRAM_DETAILS = AppSettings.API_ENDPOINT + 'FitnessPrograms/GetFitnessProgramById/{0}'
   public static CURRENT_USER='*_CURRENT_USER_*'
   public static DEFAULT_PAGE = '/'
   public static DEFAULT_AUTH_PAGE = '/index'

//emitter keys
   public static EMITTER_KEY_HIDE_ASIDE = 'EMITTER_KEY_HIDE_ASIDE'
   public static EMITTER_KEY_USER_LOGGED_IN = 'EMITTER_KEY_USER_LOGGED_IN'

}