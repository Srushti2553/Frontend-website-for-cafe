window.alert = function (message, timeout = null) {
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');

    alertButton.innerText = 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style', `
        position: fixed;
        top: 100px;
        left: 50%;
        padding: 20px;
        width: 400px; /* Increase width */
        height:200px; /* Adjust height as needed */
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 5px 0 #00000022;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #333;
        transform: translate(-50%);
        z-index: 1000;
         font-family:"Play Display,serif" ;
        font-size:25px;
         font-style:italic;
    `);

    alertButton.setAttribute('style', `
        border: 1px solid #333;
        background: white;
        border-radius: 5px;
        padding: 5px 10px;
        margin-top: 30px;
        cursor: pointer;
        color:orange;
        font-color:white;

    `);

    alert.innerHTML = `<span>${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', () => {
        alert.remove();
    });

    if (timeout !== null) {
        setTimeout(() => {
            alert.remove();
        }, Number(timeout));
    }

    document.body.appendChild(alert);
}
