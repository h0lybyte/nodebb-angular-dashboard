// A RESTful factory for retreiving mails from 'mails.json'
app.factory('chat', ['$http', function ($http) {
  var api_location = 'https://kbve.com/forum/api/chats';
  var f_data = $http.get(api_location).then(function (resp) {
    return resp.data;
  });
  
  var factory = {};
  factory.rooms = function () {
    return f_data.rooms;
  };
  
  
  
  factory.get = function (id) {
    return f_data.then(function(data){
      for (var i = 0; i < data.rooms.length; i++) {
        if (data.rooms[i].roomId == id) return data.rooms[i];
      }
      return null;
    })
  };
  return factory;
}]);


app.controller('ChatListCtrl', ['$scope', 'chat', '$stateParams', function($scope, chat, $stateParams) {
  $scope.fold = $stateParams.fold;
  chat.all().then(function(data_list){
    $scope.roomlist = data_list;
  });
}]);


app.controller('ChatRoomCtrl', ['$scope', 'chat', '$stateParams', function($scope, chat, $stateParams) {
  chat.get($stateParams.roomId).then(function(data){
    $scope.room = data;
  })
}]);
