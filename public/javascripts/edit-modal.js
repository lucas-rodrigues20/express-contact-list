$(document).ready(function() {

  // Updates Modal Form With Contact Data
  $('#edit-modal').on('show.bs.modal', function(event) {
    var triggerButton = $(event.relatedTarget);
    var id = triggerButton.data('id');
    var email = triggerButton.data('email');
    
    var modal = $(this);
    var modalForm = modal.find('.modal-body form');

    modalForm.attr('action', `/contacts/${id}?_method=PUT`);
    modal.find('.modal-body input').val(email);
  });

  // Triggers Modal Form Submition From The Modal Footer Button
  $('#submit-edit').on('click', function(event) {
    $('#edit-modal form').submit();
  });

});