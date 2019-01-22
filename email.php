<?php
# alterar a variavel abaixo colocando o seu email

$destinatario = "willianbello.s@gmail.com";

$nome = $_POST['nome'];
$email = $_POST['email'];
$ddd = $_POST['ddd'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['pergunta'];
$assunto = "Formulário Site";
 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "Teste de Email" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "DDD: " . $ddd . "\n";
$body = $body . "Telefone: " . $telefone . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

echo "enviando";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
echo '<meta HTTP-EQUIV="Refresh" CONTENT="0; URL=obrigado.html">';

?>