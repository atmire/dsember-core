export default function(self) {

  //defining this route is not strictly necessary,
  //it is implied, but I added it for clarity
  self.route('index', { path: '/' });

  self.route('communities', function() {
    this.route('community', {
      path: ':community_id'
    }, function() {
      this.route('home', { path: '/' });
    });
  });

  self.route('collections', function() {
    this.route('collection', {
      path: ':collection_id'
    }, function() {
      this.route('home', { path: '/' });
      this.route('items', function() {
      });
    });
  });

  self.route('items', function() {
    this.route('new');
    this.route('item', {
      path: ':item_id'
    }, function() {
      this.route('full', { path: '/' });
      this.route('edit', function() {
        this.route('metadata');
        this.route('bitstreams');
      });
    });
  });

  self.route('bitstreams', function() {
    this.route('bitstream', {
      path: ':bitstream_id'
    }, function() {
      this.route('edit');
    });
  });

  self.route('handle', {
    path: 'handle/:handle_prefix/:handle_postfix'
  });

  self.route('login');

}
