$( document ).ready(function()
{
    
    
    $(".hidden").hide().fadeIn(1500);

    $(".navbar-brand").click(function()
    {
        window.location.href = "/";
    });

    $("#profile").click(function()
    {
        window.location.href = "/profile";
    });
    $("#acad").click(function()
    {
        window.location.href = "/academics";
    });

    $("#acts").click(function()
    {
        window.location.href = "/activities";
    });
    var typed = new Typed('#pls', {
        strings:["Hi! I'm Raf!", "I'm a second-year computer science student attending  De La Salle University.", "This website is a testament to what I've learned during my stay, and the things that I want to do in the future."],
        backSpeed: 55,
        typeSpeed: 55
    });

});
