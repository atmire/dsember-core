export default function(self) {

  self.route('items', function() {
    this.route('show', {
      path: ':item_id'
    })
  });
}
