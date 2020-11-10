import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal } from './journal.js';

$(document).ready(function()  {
  $('#journal').submit(function(event) {
  let userEntry = new Journal($("#entry").val(), $("#name").val());
  });
});