<?php
if(empty($_POST)){
    die();
}
$chatId=5693399415;
$botToken="6111387918:AAF0VoqLBLfAVzkPrvfLmBLuwIfA6O2Xj88";
$email = 'stowarszawa@gmail.com';

function getRusName($name){
    switch ($name){
        case 'name':
            return 'Имя';
            break;
        case 'phone':
            return 'Телефон';
            break;
        default:
            return $name;
            break;
    }
}

$mailTitle = 'Заполнена форма на сайте stowarszawa';
$arPost = [];
foreach ($_POST as $name => $value){
    $arPost[getRusName(htmlspecialchars($name))] = htmlspecialchars($value);
}
$arResult = [
    $mailTitle => "\r\n"
];

if(!empty($arPost['formname'])){
    $arResult['Форма'] = $arPost['formname'];
    unset($arPost['formname']);
}
if(!empty($arPost)){
    $arResult += $arPost;
}

$mailMessage = '';
foreach ($arResult as $key => $val){
    $mailMessage.= $key . ': ' . $val . "\r\n";
}
if(!empty($email)){
    mail($email, $mailTitle, $mailMessage);
}


$website="https://api.telegram.org/bot".$botToken;

$params=[
    'chat_id'=>$chatId,
    'text'=>$mailMessage,
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);

var_dump($result);

