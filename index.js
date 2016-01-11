exports.handler = function(event, context) {
  console.log(event);
  var pusher = new Pusher({
    appId: '<your_app_id>',
    key: '<your_key>',
    secret: '<your_secret>',
    encrypted: true
  });
  pusher.port = 443;
  event.timeStamp_Lambda = (new Date()).getTime();
  pusher.trigger(
    event.room,
    event.from,
    event,
    null,
    function(err, req, res) {
      console.log('ERR', err);
      console.log('REQ', req);
      console.log('RES', res);
      context.succeed();
    }
  );
};
