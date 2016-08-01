// A RESTful factory for retreiving user_data from NodeBB api

app.factory('user_data', ['$http', function ($http) {
  var personal_data_url = 'https://kbve.com/forum/api/me';
  var p_data = $http.get(personal_data_url).then(function (resp) {
    return resp.data;
  });

  var factory = {};
  factory.all = function () {
    return p_data;
  };
  
  
  factory.get = function (id) {
    return p_data.then(function(p_data){
      
        if (p_data.id) 
          {
            return p_data;
          }
      return null;
    })
  };
  
  
  return factory;
}]);