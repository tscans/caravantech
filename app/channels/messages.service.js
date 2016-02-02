angular.module('angularfireSlackApp')
	.factory('Messages', function($firebaseArray, FirebaseUrl) {
		var channelMessageRef = new Firebase(FirebaseUrl+'channelMessage');
		var userMessageRef = new Firebase(FirebaseUrl+'userMessage');

		return {
			forChannel: function(channelId){
				return $firebaseArray(channelMessageRef.child(channelId));
			},

			forUsers: function(uid1, uid2) {
				var path = uid1 < uid2 ? uid1+"/"+uid2 : uid2+"/"+uid1;
				return $firebaseArray(userMessageRef.child(path));
			}
		};
	});