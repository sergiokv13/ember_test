import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  authChanger: null,
  isAuthenticated: computed('authChanger',function(){
    let userId = localStorage.getItem('userId');
    return ( userId != "null" && userId != 'undefined' && userId != "" );
  }),

  actions:{

    logout() {
      localStorage.setItem('userId', null);
      localStorage.setItem('locationId', null);
      this.set('authChanger',false);
     
    },
    authenticate() {
      let {userId,locationId} = this.getProperties('userId','locationId');
      let userIdError = "";
      let locationIdError = "";

      if (userId == null || userId == "" ) 
      {
        userIdError = "Can't be blank.";  
      }
      
      if (locationId == null || locationId == "")
      {
        locationIdError = "Can't be blank";
      } 

      this.set('userIdError',userIdError);
      this.set('locationIdError',locationIdError);
      if (!userIdError && !locationIdError)
      {
        localStorage.setItem('userId', userId);
        localStorage.setItem('locationId', locationId);
        this.set('authChanger',true);
      }
    }
  }

});