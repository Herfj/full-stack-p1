$(document).ready(function(){
    //$("[data-toggle='tooltip']").tooltip();
    //$("[data-toggle='popover']").popover();
    //$('.carousel').carousel({
    //	interval: 1000
    //});
    //$("#reservaBtn").click(function(){
    //	$("#reserva-hotel").modal("show");
    //});
    $("#carouselIndicators").carousel({
        interval: 2500
    });
    $("#reserva-hotel").on('show.bs.modal', function(){
        console.log('por fin lo logre')		

        $('.reservaBtn').prop('disabled', true);
    });
    $("#reserva-hotel").on('hide.bs.modal', function(){
        console.log('por fin lo logre lo oculto')		

        $('.reservaBtn').prop('disabled', false);
    });
        
    

});