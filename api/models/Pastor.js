/**
* Pastor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: "String",
  	channel: {
  		model: "Channel"
  	},
  	audios: {
  		collection: "Audio"
  	},
  	users: {
    	collection: 'User',
    	via: "pastors"
    }
  }
};

