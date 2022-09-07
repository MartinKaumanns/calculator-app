import React from 'react';
import './ColorToggleButton.scss';

const ColorToggleButton = () => {
  /*  $(document).ready(function () {
    $('#toggle-button1').addClass('active');
    $('.tri-state-toggle-button').click(function () {
      $('.tri-state-toggle-button').removeClass('active');
      var id = $(this).attr('id');
      $('#' + id).addClass('active');
    });
  }); */

  return (
    <div class="tri-state-toggle">
      <button class="tri-state-toggle-button" id="toggle-button1"></button>

      <button
        class="tri-state-toggle-button active"
        id="toggle-button2"
      ></button>

      <button class="tri-state-toggle-button" id="toggle-button3"></button>
    </div>
  );
};

export default ColorToggleButton;
