export default function(self) {

  self.route('communities', function() {
    this.route('show', {
      path: ':community_id'
    }, function() {
      this.route('home', { path: '/' });
    });
  });

  self.route('collections', function() {
    this.route('show', {
      path: ':collection_id'
    }, function() {
      this.route('home', { path: '/' });
      this.route('items', function() {
      });
    });
  });

  self.route('items', function() {
    this.route('show', {
      path: ':item_id'
    });
  });

  self.route('handle', {
    path: 'handle/:handle_prefix/:handle_postfix'
  });

}
