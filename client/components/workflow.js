/**
 * workboard.js
 * Aduno project (http://aduno.meteor.com)
 * @author Braden Simpson (@bradensimpson)
 * 
 * Workboard code.  Used for manipulating the 'workboard' which is the name of the
 * main working area of Aduno.
 */

$(function() {
  if (window.workflow == undefined)
  {
    window.workflow = new WorkFlow(); 
  }
  function WorkFlow() {
    this.IS_LOGGING_IN = false;
    this.IS_LOGGED_IN = false;
    this.loggedIn = function () {
      this.IS_LOGGED_IN = true;
      if (Meteor.user())
        Meteor.call('keepalive', Meteor.user()._id);
      console.log("logged in");
      
      // TODO @bradens load up the repos.
      Meteor.call('loadRepos', Meteor.user()._id, workflow.loadedReposCallback);
    };
    this.loadedReposCallback = function(res) {
      console.log("finished loading repos");
    };
  }
});