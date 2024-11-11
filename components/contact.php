<?php

echo "en attente";
ini_set('SMTP','smtp.gmail.com');
ini_set('smtp_port',587);
ini_set('sendmail_from','mathys@gmail.com');

mail("mathys2004.b@gmail.com","sujet","message","");
echo "Mail envoyé"; 