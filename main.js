$(document).ready(function() {

  var navicon = document.getElementById('navicon')
  var navbar = document.getElementById('navbar')
  var main = document.getElementById('main')
  var acknowledgement = document.getElementById('acknowledgement')
  var content = document.getElementById('content')

  var installation = document.getElementById('installation')
  var watercolour = document.getElementById('watercolour')
  var painting = document.getElementById('painting')
  var photography = document.getElementById('photography')

  var installcontent = document.getElementById('installcontent')
  var watercontent = document.getElementById('watercontent')
  var paintcontent = document.getElementById('paintcontent')
  var photocontent = document.getElementById('photocontent')

  var roofs = document.getElementById('roofs')
  var showRoofs = document.getElementById('showRoofs')
  var lessRoofs = document.getElementById('lessRoofs')

  navicon.onclick =function(){
      $('#navbar').slideToggle(1000);
  }

  acknowledgement.onmouseover = function(){
    content.style.display = "block";
  }

  acknowledgement.onmouseout = function(){
    content.style.display = "none";
  }

  navbar.onmouseleave = function(){
    $("#navbar").animate({
      width: "hide"
    }, 1000);
  }

  installation.onclick = function(){
    main.style.display = "none";
    installcontent.style.display = "block";
    watercontent.style.display = "none";
    paintcontent.style.display = "none";
    photocontent.style.display = "none";
    $("#navbar").animate({
      width: "hide"
    }, 1000);
  }

  watercolour.onclick = function(){
    main.style.display = "none";
    installcontent.style.display = "none";
    watercontent.style.display = "block";
    paintcontent.style.display = "none";
    photocontent.style.display = "none";
    $("#navbar").animate({
      width: "hide"
    }, 1000);
  }

  painting.onclick = function(){
    main.style.display = "none";
    installcontent.style.display = "none";
    watercontent.style.display = "none";
    paintcontent.style.display = "block";
    photocontent.style.display = "none";
    $("#navbar").animate({
      width: "hide"
    }, 1000);
  }

  photography.onclick = function(){
    main.style.display = "none";
    installcontent.style.display = "none";
    watercontent.style.display = "none";
    paintcontent.style.display = "none";
    photocontent.style.display = "block";
    $("#navbar").animate({
      width: "hide"
    }, 1000);
  }

  $('#roofs').click(showMoreRoofs);

  function showMoreRoofs(event) {
    event.preventDefault();
    $('#showRoofs').slideDown(1000);
  }

  $('#lessRoofs').click(showLessRoofs);

  function showLessRoofs(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showRoofs').slideUp(1000);
  }

  $('#russia').click(showMoreRussia);

  function showMoreRussia(event) {
    event.preventDefault();
    $('#showRussia').slideDown(1000);
  }

  $('#lessRussia').click(showLessRussia);

  function showLessRussia(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showRussia').slideUp(1000);
  }

  $('#horror').click(showMoreHorror);

  function showMoreHorror(event) {
    event.preventDefault();
    $('#showHorror').slideDown(1000);
  }

  $('#lessHorror').click(showLessHorror);

  function showLessHorror(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showHorror').slideUp(1000);
  }

  $('#dog').click(showMoreDog);

  function showMoreDog(event) {
    event.preventDefault();
    $('#showDog').slideDown(1000);
  }

  $('#lessDog').click(showLessDog);

  function showLessDog(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showDog').slideUp(1000);
  }

  $('#draw').click(showMoreDraw);

  function showMoreDraw(event) {
    event.preventDefault();
    $('#showDraw').slideDown(1000);
  }

  $('#lessDraw').click(showLessDraw);

  function showLessDraw(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showDraw').slideUp(1000);
  }

  $('#under').click(showMoreUnder);

  function showMoreUnder(event) {
    event.preventDefault();
    $('#showUnder').slideDown(1000);
  }

  $('#lessUnder').click(showLessUnder);

  function showLessUnder(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showUnder').slideUp(1000);
  }

  $('#therap').click(showMoreTherap);

  function showMoreTherap(event) {
    event.preventDefault();
    $('#showTherap').slideDown(1000);
  }

  $('#lessTherap').click(showLessTherap);

  function showLessTherap(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showTherap').slideUp(1000);
  }

  $('#sinc').click(showMoreSinc);

  function showMoreSinc(event) {
    event.preventDefault();
    $('#showSinc').slideDown(1000);
  }

  $('#lessSinc').click(showLessSinc);

  function showLessSinc(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showSinc').slideUp(1000);
  }

  $('#acca').click(showMoreAcca);

  function showMoreAcca(event) {
    event.preventDefault();
    $('#showAcca').slideDown(1000);
  }

  $('#lessAcca').click(showLessAcca);

  function showLessAcca(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showAcca').slideUp(1000);
  }

  $('#aesth').click(showMoreAesth);

  function showMoreAesth(event) {
    event.preventDefault();
    $('#showAesth').slideDown(1000);
  }

  $('#lessAesth').click(showLessAesth);

  function showLessAesth(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showAesth').slideUp(1000);
  }

  $('#grad').click(showMoreGrad);

  function showMoreGrad(event) {
    event.preventDefault();
    $('#showGrad').slideDown(1000);
  }

  $('#lessGrad').click(showLessGrad);

  function showLessGrad(event) {
    event.preventDefault();
    $('#showLess').hide();
    $('#showGrad').slideUp(1000);
  }

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

})
