$( ()=> {
    $(document).scroll(()=> {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() != $nav.height());
    });
  });
  $( ()=> {
    $(document).scroll(()=> {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolledBack', $(this).scrollTop() < $nav.height());
    });
  });
  $( ()=> {
    $(document).scroll(()=> {
      var $nav = $(".adjustLi");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

const pratosContainer=document.getElementById("Pratos")
