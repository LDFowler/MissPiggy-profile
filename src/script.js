$.ajax({
  url: 'https://muppet.fandom.com/wiki/Miss_Piggy',
  dataType: 'json',
  success: function(data) {
    var $user = data.results[0];
    $(".user-name").html($user.name.first + ' ' + $user.name.last);
    $(".profile-picture").attr('src' , $user.picture.large);  
  }
});