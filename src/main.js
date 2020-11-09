import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Journal } from './journal.js';


$("#journal").submit(function() {
  let userEntry = new Journal($("#entry").val(), $("#name").val());
  })