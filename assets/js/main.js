// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


var app = new Vue(
  {
    el: '#root',
    data: {
      message: "Ciao, questo è il messaggio all'interno di un h1",
      img: 'https://lh3.googleusercontent.com/proxy/3mfqIcwYHh-t3gGITnClBV1_f97-zq4-cl1pi7NEPPG45ajg_k5dipjbCJJJMkZANFYHEJqh6NfnjkcRnEHLa83iNKLdyRt4eEoSkkp57WNOrCY1'
    }
  }
);
