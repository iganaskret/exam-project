
const burgerMenu = document.querySelector(".burger-menu");
const hamburger = document.querySelector(".hamburger")
const barLogo = document.querySelector(".bar-logo")

hamburger.addEventListener("click", () => {
    burgerMenu.classList.toggle("hide");
     burgerMenu.style.zIndex = "1";

    barLogo.classList.toggle("hide");
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };

  slides[slideIndex-1].style.display= "block";
};




//fetching

let myLink = "https://andreamakarova.dk/kea/wp-exam/wp-json/wp/v2/T-shirt?_embed";
const template = document.querySelector("template").content;
const parent = document.querySelector("main");

function loadData(){
fetch(myLink).then(e => e.json()).then(show);
}

function show(data){
data.forEach(post => {



    //clone
    const clone = template.cloneNode(true);
    //populate
    const img = clone.querySelector("img");


    img.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;



    //append
    parent.appendChild(clone);
}
);
}

loadData(myLink);


$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});

