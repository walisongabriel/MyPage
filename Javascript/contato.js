

//alertando ao usuario a necessidade de preecher o nome caso ele saia do campo nome deixando o mesmo vazio
function LimpaName(){
    var name = document.getElementById('name_msg').value
    if(name.length > 4){
        document.getElementById('label_name').style.color = 'green'
        document.getElementById('erro_name').innerHTML = ''
    }else{
        document.getElementById('label_name').style.color = 'red'
        document.getElementById('erro_name').innerHTML = 'Por favor, informe seu nome!'
    }
}
//alertando ao usuario a necessidade de preecher o email caso ele saia do campo nome deixando o mesmo vazio
function LimpaEmail(){
    var email = document.getElementById('email_msg').value
    if( email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1 ){
        document.getElementById('label_email').style.color = 'red'
        document.getElementById('erro_email').innerHTML = 'Por favor, informe um e-mail valido!'
    }else{
        document.getElementById('label_email').style.color = 'green'
        document.getElementById('erro_email').innerHTML = ''
    }
}
//alertando ao usuario a necessidade de preecher o email caso ele saia do campo nome deixando o mesmo vazio
function LimpaMessage(){
    var message = document.getElementById('message_msg').value
    if(message.length < 10 || message == ""){
        document.getElementById('label_message').style.color = 'red'
        document.getElementById('erro_message').innerHTML = 'Por favor, insira uma mensagem!'

    }else{
        document.getElementById('label_message').style.color = 'green'
        document.getElementById('erro_message').innerHTML = ''
    }
}


function ValidaMensagem(){
    var name = document.getElementById('name_msg').value
    
    
    if(name.length < 4 || name == ""){// Validação do campo Nome
        document.getElementById('label_name').style.color = 'red'
        document.getElementById('erro_name').innerHTML = 'Por favor, informe seu nome!'
        return false;
        
    }
    else{ //Validação do campo email caso o nome esteja d acordo com o permitido

        var email = document.getElementById('email_msg').value
        if( email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1 ){
            document.getElementById('label_email').style.color = 'red'
            document.getElementById('erro_email').innerHTML = 'Por favor, informe um e-mail valido!'
            return false;
        }else{//Validação do campo mensagem caso os dois campos anteriores estejam de acordo com o permitido

            var message = document.getElementById('message_msg').value
            if(message.length < 10 || message == ""){
                document.getElementById('label_message').style.color = 'red'
                document.getElementById('erro_message').innerHTML = 'Por favor, insira uma mensagem antes de enviar!'
                return false;
            }
            else{
                document.getElementById('mensagem_sucesso').innerHTML = '<strong>Mensagem enviada com sucesso</strong>'
            }
        }
    }

}