function doSomething(o){o>30?siteNavbar.classList.add("navbar-scroll"):siteNavbar.classList.remove("navbar-scroll")}$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(o){var r=$('form[name="contact-form"]').serialize();console.log(r),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:r}).done(function(o){1===parseInt(o)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(o,r){var n=r.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+n+" errores.")}});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar");doSomething(),window.addEventListener("scroll",function(o){last_known_scroll_position=o.view?o.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0});