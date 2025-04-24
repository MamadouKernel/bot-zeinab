/* document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Ajouter le message utilisateur
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Ajouter une indication "Le bot écrit..."
    let botTyping = document.createElement("div");
    botTyping.className = "bot-message typing";
    botTyping.textContent = "Le bot écrit...";
    chatBox.appendChild(botTyping);

    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        chatBox.removeChild(botTyping);
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = "GDG-Yamoussoukro 🤖: " + data.response;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        
    })
    .catch(error => {
        chatBox.removeChild(botTyping);
        console.error("Erreur:", error);
    });
}
 */


/* document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Ajouter le message utilisateur
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Ajouter l'animation de réponse du bot
    let botTyping = document.createElement("div");
    botTyping.className = "bot-message typing";
    botTyping.innerHTML = "GDG-Yamoussoukro 🤖 est en train d'écrire...";
    chatBox.appendChild(botTyping);
    chatBox.scrollTop = chatBox.scrollHeight;

    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Supprimer l'indication "Le bot écrit..."
        chatBox.removeChild(botTyping);

        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = "GDG-Yamoussoukro 🤖: " + data.response;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        chatBox.removeChild(botTyping);
        console.error("Erreur:", error);
        let errorMessage = document.createElement("div");
        errorMessage.className = "bot-message error";
        errorMessage.textContent = "❌ Une erreur est survenue. Réessayez plus tard.";
        chatBox.appendChild(errorMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}
 */


/* document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Ajouter le message utilisateur
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Ajouter l'animation des trois points
    let botTyping = document.createElement("div");
    botTyping.className = "bot-message typing";
    botTyping.innerHTML = "GDG-Yamoussoukro 🤖 <span class='dots'>.</span><span class='dots'>.</span><span class='dots'>.</span>";
    chatBox.appendChild(botTyping);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Animation des trois points
    let dots = botTyping.querySelectorAll(".dots");
    let dotIndex = 0;
    let typingInterval = setInterval(() => {
        dots.forEach(dot => dot.style.opacity = "0.2");
        dots[dotIndex].style.opacity = "1";
        dotIndex = (dotIndex + 1) % dots.length;
    }, 500);

    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
        .then(response => response.json())
        .then(data => {
            clearInterval(typingInterval);
            chatBox.removeChild(botTyping);

            let botMessage = document.createElement("div");
            botMessage.className = "bot-message";
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

            // Effet de frappe pour la réponse du bot
            let text = "GDG-Yamoussoukro 🤖: " + data.response;
            let index = 0;
            function typeEffect() {
                if (index < text.length) {
                    botMessage.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeEffect, 40);
                }
            }
            typeEffect();
        })
        .catch(error => {
            clearInterval(typingInterval);
            chatBox.removeChild(botTyping);
            console.error("Erreur:", error);
            let errorMessage = document.createElement("div");
            errorMessage.className = "bot-message error";
            errorMessage.textContent = "❌ Une erreur est survenue. Réessayez plus tard.";
            chatBox.appendChild(errorMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        });
} */

/* 
        document.addEventListener("DOMContentLoaded", function () {
            const sendBtn = document.getElementById("send-btn");
            const userInput = document.getElementById("user-input");
        
            sendBtn.addEventListener("click", sendMessage);
            userInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter" && !sendBtn.disabled) {
                    sendMessage();
                }
            });
        });
        
        function sendMessage() {
            let userInput = document.getElementById("user-input");
            let chatBox = document.getElementById("chat-box");
            let sendBtn = document.getElementById("send-btn");
        
            let userMessage = userInput.value.trim();
            if (userMessage === "") return;
        
            // Désactiver les entrées utilisateur
            userInput.disabled = true;
            sendBtn.disabled = true;
        
            // Ajouter le message utilisateur
            let userMessageDiv = document.createElement("div");
            userMessageDiv.className = "user-message";
            userMessageDiv.textContent = userMessage;
            chatBox.appendChild(userMessageDiv);
        
            userInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        
            // Ajouter l'animation des trois points
            let botTyping = document.createElement("div");
            botTyping.className = "bot-message typing";
            botTyping.innerHTML = "Zeïnab 🤖 <span class='dots'>.</span><span class='dots'>.</span><span class='dots'>.</span>";
            chatBox.appendChild(botTyping);
            chatBox.scrollTop = chatBox.scrollHeight;
        
            // Animation des trois points
            let dots = botTyping.querySelectorAll(".dots");
            let dotIndex = 0;
            let typingInterval = setInterval(() => {
                dots.forEach(dot => dot.style.opacity = "0.2");
                dots[dotIndex].style.opacity = "1";
                dotIndex = (dotIndex + 1) % dots.length;
            }, 500);
        
            fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            })
                .then(response => response.json())
                .then(data => {
                    clearInterval(typingInterval);
                    chatBox.removeChild(botTyping);
        
                    let botMessage = document.createElement("div");
                    botMessage.className = "bot-message";
                    chatBox.appendChild(botMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
        
                    // Effet de frappe pour la réponse du bot
                    let text = "Zeïnab 🤖: " + data.response;
                    let index = 0;
                    function typeEffect() {
                        if (index < text.length) {
                            botMessage.textContent += text.charAt(index);
                            index++;
                            setTimeout(typeEffect, 40);
                        } else {
                            // Réactiver les entrées utilisateur après la réponse complète
                            userInput.disabled = false;
                            sendBtn.disabled = false;
                            userInput.focus();
                        }
                    }
                    typeEffect();
                })
                .catch(error => {
                    clearInterval(typingInterval);
                    chatBox.removeChild(botTyping);
                    console.error("Erreur:", error);
                    let errorMessage = document.createElement("div");
                    errorMessage.className = "bot-message error";
                    errorMessage.textContent = "❌ Une erreur est survenue. Réessayez plus tard.";
                    chatBox.appendChild(errorMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
        
                    // Réactiver l'entrée utilisateur et le bouton en cas d'erreur
                    userInput.disabled = false;
                    sendBtn.disabled = false;
                });
        }
         */


/* 
        document.addEventListener("DOMContentLoaded", function () {
            const sendBtn = document.getElementById("send-btn");
            const userInput = document.getElementById("user-input");
            const chatBox = document.getElementById("chat-box");
        
            sendBtn.addEventListener("click", sendMessage);
            userInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter" && !sendBtn.disabled) {
                    sendMessage();
                }
            });
        
            // 🎉 Affichage automatique du message de présentation de Zeïnab
            setTimeout(() => {
                let welcomeMessage = document.createElement("div");
                welcomeMessage.className = "bot-message";
                chatBox.appendChild(welcomeMessage);
        
                let text = "👋 Bonjour ! Je suis Zeïnab 🤖, votre assistante virtuelle. Comment puis-je vous aider aujourd’hui ?";
                let index = 0;
                
                function typeEffect() {
                    if (index < text.length) {
                        welcomeMessage.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeEffect, 40);
                    }
                }
                typeEffect();
            }, 500); // Petit délai pour un effet naturel
        });
        
        function sendMessage() {
            let userInput = document.getElementById("user-input");
            let chatBox = document.getElementById("chat-box");
            let sendBtn = document.getElementById("send-btn");
        
            let userMessage = userInput.value.trim();
            if (userMessage === "") return;
        
            // Désactiver les entrées utilisateur pendant la réponse
            userInput.disabled = true;
            sendBtn.disabled = true;
        
            // Ajouter le message utilisateur
            let userMessageDiv = document.createElement("div");
            userMessageDiv.className = "user-message";
            userMessageDiv.textContent = userMessage;
            chatBox.appendChild(userMessageDiv);
        
            userInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        
            // Ajouter l'animation des trois points
            let botTyping = document.createElement("div");
            botTyping.className = "bot-message typing";
            botTyping.innerHTML = "Zeïnab 🤖 <span class='dots'>.</span><span class='dots'>.</span><span class='dots'>.</span>";
            chatBox.appendChild(botTyping);
            chatBox.scrollTop = chatBox.scrollHeight;
        
            // Animation des trois points
            let dots = botTyping.querySelectorAll(".dots");
            let dotIndex = 0;
            let typingInterval = setInterval(() => {
                dots.forEach(dot => dot.style.opacity = "0.2");
                dots[dotIndex].style.opacity = "1";
                dotIndex = (dotIndex + 1) % dots.length;
            }, 500);
        
            fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            })
                .then(response => response.json())
                .then(data => {
                    clearInterval(typingInterval);
                    chatBox.removeChild(botTyping);
        
                    let botMessage = document.createElement("div");
                    botMessage.className = "bot-message";
                    chatBox.appendChild(botMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
        
                    // Effet de frappe pour la réponse du bot
                    let text = "Zeïnab 🤖: " + data.response;
                    let index = 0;
                    function typeEffect() {
                        if (index < text.length) {
                            botMessage.textContent += text.charAt(index);
                            index++;
                            setTimeout(typeEffect, 40);
                        } else {
                            // Réactiver les entrées utilisateur après la réponse complète
                            userInput.disabled = false;
                            sendBtn.disabled = false;
                            userInput.focus();
                        }
                    }
                    typeEffect();
                })
                .catch(error => {
                    clearInterval(typingInterval);
                    chatBox.removeChild(botTyping);
                    console.error("Erreur:", error);
                    let errorMessage = document.createElement("div");
                    errorMessage.className = "bot-message error";
                    errorMessage.textContent = "❌ Une erreur est survenue. Réessayez plus tard.";
                    chatBox.appendChild(errorMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
        
                    // Réactiver l'entrée utilisateur et le bouton en cas d'erreur
                    userInput.disabled = false;
                    sendBtn.disabled = false;
                });
        }
  */   
 
        document.addEventListener("DOMContentLoaded", function () {
            const sendBtn = document.getElementById("send-btn");
            const userInput = document.getElementById("user-input");
            const chatBox = document.getElementById("chat-box");
        
            sendBtn.addEventListener("click", sendMessage);
            userInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter" && !sendBtn.disabled) {
                    sendMessage();
                }
            });
        
            // Message de présentation spécialisé
            setTimeout(() => {
                let welcomeMessage = document.createElement("div");
                welcomeMessage.className = "bot-message";
                chatBox.appendChild(welcomeMessage);
        
                let text = "👋 Bonjour ! Je suis Zeïnab 🤖, spécialisée en **santé féminine, puériculture et bonnes manières**. Posez-moi vos questions !";
                let index = 0;
                
                function typeEffect() {
                    if (index < text.length) {
                        welcomeMessage.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeEffect, 40);
                    }
                }
                typeEffect();
            }, 500);
        });
        
        function sendMessage() {
            let userInput = document.getElementById("user-input");
            let chatBox = document.getElementById("chat-box");
            let sendBtn = document.getElementById("send-btn");
        
            let userMessage = userInput.value.trim();
            if (userMessage === "") return;
        
            // Désactiver les entrées utilisateur pendant la réponse
            userInput.disabled = true;
            sendBtn.disabled = true;
        
            // Ajouter le message utilisateur
            let userMessageDiv = document.createElement("div");
            userMessageDiv.className = "user-message";
            userMessageDiv.textContent = userMessage;
            chatBox.appendChild(userMessageDiv);
        
            userInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        
            // Ajouter l'animation de Zeïnab en train d'écrire
            let botTyping = document.createElement("div");
            botTyping.className = "bot-message typing";
            botTyping.innerHTML = "Zeïnab 🤖 <span class='dots'>.</span><span class='dots'>.</span><span class='dots'>.</span>";
            chatBox.appendChild(botTyping);
            chatBox.scrollTop = chatBox.scrollHeight;
        
            fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            })
            .then(response => response.json())
            .then(data => {
                chatBox.removeChild(botTyping);
        
                let botMessage = document.createElement("div");
                botMessage.className = "bot-message";
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
        
                let text = "Zeïnab 🤖: " + data.response;
                let index = 0;
                function typeEffect() {
                    if (index < text.length) {
                        botMessage.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeEffect, 40);
                    } else {
                        userInput.disabled = false;
                        sendBtn.disabled = false;
                        userInput.focus();
                    }
                }
                typeEffect();
            })
            .catch(error => {
                chatBox.removeChild(botTyping);
                console.error("Erreur:", error);
                let errorMessage = document.createElement("div");
                errorMessage.className = "bot-message error";
                errorMessage.textContent = "❌ Une erreur est survenue. Réessayez plus tard.";
                chatBox.appendChild(errorMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
        
                userInput.disabled = false;
                sendBtn.disabled = false;
            });
        }
        