    $('p_method_paypal_plus').stopObserving('change');

    EsmartPaypalBrasilBtnContinue.setElement('#checkout-onepage-buttom', '#onestepcheckout_place_order_button');

    $$("input[type=radio][name='payment[method]']").each( function(el) {
        el.observe('change', function(el){
            el.preventDefault();
            if (this.value == 'paypal_plus') {
                //$jPPPlus('#ppplus').removeAttr('style').html('');
                if (!EsmartPaypalBrasilPPPlus.requestPending) {                    
                    setTimeout(function () {
                        EsmartPaypalBrasilPPPlus.generateUrl();
                    }, 500);
                }
            } else {
                EsmartPaypalBrasilBtnContinue.enable();
            }
         })
    });

    $$("li#opc-payment div.step-title").each( function(el) {
        el.observe('click', function(){  
            $('checkout-payment-method-load').select('input.radio').each(function(el){ el.checked = false});
            $$("ul#payment_form_paypal_plus")[0].hide();

        })
    });

    EsmartPaypalBrasilPPPlus.init();
