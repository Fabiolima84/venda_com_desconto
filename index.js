function calcular(){
    if(validapreco_do_produto() && validaquantidade() && validadesconto() ){ 

                
        let valortotal = parseFloat(preco_do_produto.value) * parseFloat (quantidade.value)
        let valor_com_desconto = (valortotal*parseFloat (desconto.value))/100
        let total = valortotal - valor_com_desconto
        valor_total.value = total
        console.log(total)
            
        
    }
    function validapreco_do_produto(){
        console.log(preco_do_produto.value)
        if(preco_do_produto.value.trim() === ""){
            preco_do_produto.style.background = "red";
            mensagem.innerHTML = "Preencha o preço do produto!";
            $('#alerta').modal('show');
            return false;
            } else {
                preco_do_produto.style.background = "white";
                return true;
            }
        }
    function validaquantidade(){
        if(quantidade.value.trim() === ""){
            quantidade.style.background = "red";
            mensagem.innerHTML = "Preencha a quantidade!";
            $('#alerta').modal('show');
            return false;
            } else {
                quantidade.style.background = "white";
                return true;
            }
        }
    function validadesconto(){
        if(desconto.value.trim() === ""){
            desconto.style.background = "red";
            mensagem.innerHTML = "Preencha o desconto!";
                $('#alerta').modal('show');
                return false;
                } else {
                    desconto.style.background = "white";
                    return true;
                }
            }
    
            }
            

    
       