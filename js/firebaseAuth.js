let user_uid = "massage";


document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
    const email = document.getElementById('cemail').value;
    const password = document.getElementById('cpassword').value;

<<<<<<< HEAD
    if(document.getElementById('cemail').value == "hyyadav48485@gmail.com" && document.getElementById('cusername').value == "Coordinator"){
        console.log('Good');
    
    }
    else if(document.getElementById('cemail').value == "21ucs095@lnmiit.ac.in" && document.getElementById("cusername").value == "Admin" ){
=======
    if(document.getElementById('cemail').value == "shivanshgoyal220903@gmail.com" && document.getElementById('cusername').value == "Coordinator"){
        console.log('Good');
    
    }
    else if(document.getElementById('cemail').value == "testmail14025@gmail.com" && document.getElementById("cusername").value == "test" ){
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
        admin(email,password);
        return;
    }
    else{
        alert('Bad credentials')
        return;
    }

  

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
          window.location.href = 'admin.html';
          displayMessages('usernames');

      })
      .catch(error => {
          console.error(error.message);
          alert('Login failed. Check your email and password.');
      });
});

function admin(email,password) {

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'admin2.html';
            displayMessages('usernames');

        })
        .catch(error => {
            console.error(error.message);
            alert('Login failed. Check your email and password.');
        });
}

var messageAdmin;

document.addEventListener('DOMContentLoaded', function () {
    const adminUserId = "adminUserId"; 
    displayMessages(adminUserId);
});

document.addEventListener('DOMContentLoaded', function () {
    const adminUserId = "adminUserId"; 
    displayMessages(adminUserId);
});

function displayMessages(userId) {
    const messagesRef = database.ref('messages/' + userId);

    messagesRef.on('value', snapshot => {
        const messages = snapshot.val();
        const messageList = document.getElementById('messageList');

        messageList.innerHTML = '';

        if (messages) {
            Object.entries(messages).forEach(([messageId, message]) => {
                const listItem = document.createElement('li');
                listItem.textContent = message.text;

                // Add approve and disapprove buttons
                const approveButton = document.createElement('button');
                approveButton.textContent = 'Approve';
                approveButton.addEventListener('click', () => approveMessage(userId, messageId, true));
                listItem.appendChild(approveButton);

                const disapproveButton = document.createElement('button');
                disapproveButton.textContent = 'Disapprove';
                disapproveButton.addEventListener('click', () => approveMessage(userId, messageId, false));
                listItem.appendChild(disapproveButton);

                messageList.appendChild(listItem);
            });
        }
    });
}

function approveMessage(userId, messageId, isApproved) {
    const messageRef = database.ref(`messages/${userId}/${messageId}`);
<<<<<<< HEAD
    
=======
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2

   
    return messageRef.transaction(messageData => {
        if (messageData === null || messageData.approved !== undefined) {
           
            return messageData;
        }

     
        messageData.approved = isApproved;

        const messageText = messageData.text;
<<<<<<< HEAD
        messageAdmin = messageText;
        
=======

>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
        return messageData;
    })
    .then(messageData => {
        
        if (!messageData) {
            console.error('Error: messageData is undefined. messageId:', messageId);
            return;
        }

        
        if (isApproved) {
<<<<<<< HEAD
            sendApprovalEmail(messageAdmin, 'hyyadav48485@gmail.com');
        } else {
           
            sendDisapprovalEmail(messageAdmin, 'hyyadav48485@gmail.com');
=======
            sendApprovalEmail(messageData.text, 'shivanshgoyal220903@gmail.com');
        } else {
           
            sendDisapprovalEmail(messageData.text, 'shivanshgoyal220903@gmail.com');
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
        }

       
        messageRef.remove();
    })
    .catch(error => {
        console.error('Error approving/disapproving message:', error);
    });
}



function sendDisapprovalEmail(messageText, toEmail) {
    (function () {
<<<<<<< HEAD
        emailjs.init("F2Xmzlfn7Pr3zHc6n");
=======
        emailjs.init("5GYCjratp_kB7LuEN");
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
    })();

    var params = {
        to_email: toEmail,
        message: messageText,
        subject: "Disapproved Event"
    };

<<<<<<< HEAD
    var serviceID = "service_67lcosw";
    var templateID = "template_qlug045";
=======
    var serviceID = "service_1ikqpgz";
    var templateID = "template_wweqba7";
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Disapproval Email Sent");
        })
        .catch(error => {
            console.error('Error sending disapproval email:', error);
        });
}


function sendApprovalEmail(messageText, toEmail) {
    (function(){
<<<<<<< HEAD
        emailjs.init("F2Xmzlfn7Pr3zHc6n");
=======
        emailjs.init("5GYCjratp_kB7LuEN");
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
  
     })();
  
     var params = {
        to_email : toEmail,
        message : messageText,
        subject : "Approved Event"
  
     };
  
<<<<<<< HEAD
     var serviceID = "service_67lcosw";
     var templateID = "template_qlug045";
=======
     var serviceID = "service_1ikqpgz";
     var templateID = "template_wweqba7";
>>>>>>> d11021e99b422e970f4e2ed1460a8bc32c831bc2
  
     emailjs.send(serviceID , templateID , params)
     .then( res=> {
        alert("Sucess");
     })
     .catch();
  }

function sendMessage(userId) {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const messagesRef = firebase.database().ref('messages/' + userId);
        messagesRef.push({
            text: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        messageInput.value = '';
    }
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'cordilogin.html';
    });
}