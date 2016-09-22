/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn-grid-estoque */
    
    
        /* button  #btn-grid-clientes */
    
    
        /* button  #btn-grid-clientes */
    
    
        /* button  #btn-grid-clientes */
    
    
        /* button  #btn-grid-estoque */
    
    
        /* button  #btn-grid-estoque */
    $(document).on("click", "#btn-grid-estoque", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#listaEstoque"); 
         return false;
    });
    
        /* button  #btn-grid-clientes */
    
    
        /* button  #btncompras-grid- */
    
    
        /* button  #btn-grid-clientes */
    $(document).on("click", "#btn-grid-clientes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#listaCliente"); 
         return false;
    });
    
        /* button  #btncompras-grid- */
    
    
        /* button  #btncompras-grid- */
    $(document).on("click", "#btncompras-grid-", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btn-nav-home */
    $(document).on("click", "#btn-nav-home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_41_99"); 
         return false;
    });
    
        /* button  #btn-grid-compras */
    $(document).on("click", "#btn-grid-compras", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#addCompra"); 
         return false;
    });
    
        /* button  #btn-grid-pedidos */
    
    
        /* button  #btn-grid-pedidos */
    $(document).on("click", "#btn-grid-pedidos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#listaPedidos"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
