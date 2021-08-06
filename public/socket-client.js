const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');



const mensajeTxt = document.querySelector('#mensaje-txt');
const btnSent    = document.querySelector('#btn-send');

socket.on("connect", () => {

    lblOnline.classList.remove("d-none");
    lblOffline.classList.add("d-none");
    console.log('conectado');
});


socket.on("disconnect", () => {

    lblOffline.classList.remove("d-none");
    lblOnline.classList.add("d-none");

    console.log('desconectado');
  
});


socket.on("sendMessageToClient", (payload) => {

    console.log('resuesta del server-->',payload);
  
});


btnSent.addEventListener('click', () => {

    
    const menssage = mensajeTxt.value;

    const payload = {
        menssage,
        id:'12345ddsdsds'
    }

    // callback id es para retorna a un unico usuario la res del server
    socket.emit("sendMessageToServer",payload, (id)=>{

        console.log('respuesta del server para unico user',id);
    });

});
  
  