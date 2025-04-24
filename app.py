""" from flask import Flask, request, jsonify, render_template
import ollama  # Utilisation d'un modèle IA local via Ollama

app = Flask(__name__)

# Charger le modèle une seule fois pour éviter le rechargement à chaque requête
MODEL_NAME = "mistral"  # Change par "gemma" si besoin

def ask_ollama(prompt):
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

# Route pour afficher la page Web du chatbot
@app.route('/')
def home():
    return render_template('index.html')

# Route API pour gérer les requêtes du chatbot
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400
    
    # Obtenir la réponse de l'IA
    ai_response = ask_ollama(user_input)
    
    return jsonify({"response": ai_response})


if __name__ == '__main__':
    app.run(debug=True, threaded=True)  # Activation du mode multi-thread pour plus de rapidité
 """

""" from flask import Flask, request, jsonify
import ollama  # Modèle IA local
import telegram
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, Dispatcher
import threading

TOKEN = "7776513976:AAGa30HezC-_dyXYc7ohljIM3ZyTGcX6dwk"  # Remplace par ton token
bot = telegram.Bot(token=TOKEN)

app = Flask(__name__)

# Initialiser le modèle IA
MODEL_NAME = "mistral"

def ask_ollama(prompt):
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

# Gérer les messages Telegram
def start(update, context):
    update.message.reply_text("👋 Bonjour ! Je suis GDG-Yamoussoukro Bot 🤖. Pose-moi une question !")

def handle_message(update, context):
    user_text = update.message.text
    ai_response = ask_ollama(user_text)  # Appeler l'IA
    update.message.reply_text(ai_response)

# Configurer le webhook pour Telegram
@app.route(f"/{TOKEN}", methods=["POST"])
def webhook():
    update = telegram.Update.de_json(request.get_json(), bot)
    dispatcher.process_update(update)
    return "OK"

# Ajouter les handlers de commandes et messages
def setup_dispatcher(dp):
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))
    return dp

# Configurer le bot Telegram en arrière-plan
def run_telegram_bot():
    global dispatcher
    updater = Updater(TOKEN, use_context=True)
    dispatcher = setup_dispatcher(updater.dispatcher)
    updater.start_polling()
    updater.idle()

# Lancer le bot Telegram dans un thread séparé
threading.Thread(target=run_telegram_bot).start()

if __name__ == "__main__":
    app.run(debug=True, threaded=True)
 """


""" from flask import Flask, request, jsonify, render_template
import ollama
import functools
import time
from flask_caching import Cache

app = Flask(__name__)
app.config["CACHE_TYPE"] = "simple"
cache = Cache(app)

# Charger le modèle une seule fois
MODEL_NAME = "mistral"  # Peut être changé pour "gemma" si besoin
print(f"Chargement du modèle {MODEL_NAME}...")

def ask_ollama(prompt):
    Appelle Ollama avec une mise en cache pour éviter les requêtes redondantes.
    @functools.lru_cache(maxsize=100)  # Cache mémoire pour stocker les réponses récentes
    def cached_request(p):
        response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": p}])
        return response["message"]["content"]
    
    return cached_request(prompt)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400
    
    start_time = time.time()
    ai_response = ask_ollama(user_input)
    elapsed_time = time.time() - start_time
    print(f"Réponse générée en {elapsed_time:.2f}s")
    
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
"""

""" import ollama
import time
from flask import Flask, request, jsonify, render_template
from flask_caching import Cache
from functools import lru_cache

app = Flask(__name__)
app.config["CACHE_TYPE"] = "simple"
cache = Cache(app)

MODEL_NAME = "gemma2:latest"
print(f"🔄 Chargement du modèle {MODEL_NAME}...")

@lru_cache(maxsize=100)  # Cache les 100 dernières réponses
def ask_ollama(prompt):
    
    Appelle Ollama avec mise en cache pour accélérer les réponses.
    
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400
    
    start_time = time.time()
    ai_response = ask_ollama(user_input)
    elapsed_time = time.time() - start_time
    print(f"✅ Réponse générée en {elapsed_time:.2f}s")
    
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
"""

""" 
import ollama
import time
from flask import Flask, request, jsonify, render_template
from flask_caching import Cache
from functools import lru_cache

app = Flask(__name__)
app.config["CACHE_TYPE"] = "simple"
cache = Cache(app)

MODEL_NAME = "gemma2:latest"
print(f"🔄 Chargement du modèle {MODEL_NAME}...")

@lru_cache(maxsize=100)  # Cache les 100 dernières réponses
def ask_ollama(prompt):
    
    Appelle Ollama avec mise en cache pour accélérer les réponses.
    
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400
    
    start_time = time.time()
    ai_response = ask_ollama(user_input)
    elapsed_time = time.time() - start_time
    print(f"✅ Réponse générée en {elapsed_time:.2f}s")
    
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
 """
""" 
import ollama
import time
from flask import Flask, request, jsonify, render_template
from flask_caching import Cache
from functools import lru_cache

app = Flask(__name__)
app.config["CACHE_TYPE"] = "simple"
cache = Cache(app)

MODEL_NAME = "gemma2:latest"
print(f"\U0001F504 Chargement du modèle {MODEL_NAME}...")

# Liste des sujets autorisés
SUJETS_AUTORISES = [
    "gynécologie", "grossesse", "cycle menstruel", "contraception", "santé féminine",
    "puériculture", "bébé", "allaitement", "sommeil du bébé", "développement de l'enfant",
    "bonnes manières", "étiquette", "savoir-vivre", "politesse"
]

def est_question_valide(question):
    
    Vérifie si la question concerne les domaines de spécialisation de Zeïnab.
    
    question = question.lower()
    return any(sujet in question for sujet in SUJETS_AUTORISES)

@lru_cache(maxsize=100)  # Cache les 100 dernières réponses
def ask_ollama(prompt):
    
    Appelle Ollama avec mise en cache pour accélérer les réponses.
    
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": prompt}])
    return response["message"]["content"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400
    
    if not est_question_valide(user_input):
        return jsonify({"response": "Désolé, je suis spécialisée en gynécologie, puériculture et bonnes manières. Posez-moi une question dans ces domaines 😊."})
    
    start_time = time.time()
    ai_response = ask_ollama(user_input)
    elapsed_time = time.time() - start_time
    print(f"✅ Réponse générée en {elapsed_time:.2f}s")
    
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
"""


# -*- coding: utf-8 -*-
import time
import logging
from flask import Flask, request, jsonify, render_template
from flask_caching import Cache
from functools import lru_cache
import ollama

# Configuration du logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config["CACHE_TYPE"] = "simple"
cache = Cache(app)

MODEL_NAME = "mistral"
logger.info(f"⏳ Chargement du modèle {MODEL_NAME}...")

# Liste des sujets autorisés
SUJETS_AUTORISES = [
    # Gynécologie
    "gynécologie", "grossesse", "cycle menstruel", "contraception", "santé féminine",
    "règles", "menstruations", "douleurs menstruelles", "SPM", "syndrome prémenstruel", "fertilité", "ovulation", 
    "syndrome des ovaires polykystiques", "SOPK", "endométriose", "ménopause", "symptômes ménopause", 
    "traitements ménopause", "hormonothérapie", "IST", "infections sexuellement transmissibles", "infection vaginale",
    "accouchement", "préparation accouchement", "complications accouchement", "travail", "césarienne", "post-partum", 
    "baby blues", "dépression post-partum", "périnée", "rééducation périnéale", "suivi gynécologique", "frottis", 
    "mammographie", "hormones", "PMA", "procréation médicalement assistée", "FIV", "fécondation in vitro", 
    "contrôle des naissances", "stérilet", "implant contraceptif", "pilule", "diaphragme", "aménorrhée", "dysménorrhée", 
    "fibromes", "kystes ovariens", "vaginite", "mycose vaginale", "candidose", "infections urinaires", "vulvodynie",
    "douleurs pelviennes", "cancer du sein", "cancer de l'utérus", "HPV", "papillomavirus",
    
    # Puériculture
    "puériculture", "bébé", "allaitement", "biberon", "sevrage", "montée de lait", "lait maternel", "lait infantile",
    "sommeil du bébé", "cododo", "bercement", "troubles du sommeil bébé", "développement de l'enfant", 
    "réflexes du nouveau-né", "motricité", "développement moteur", "marche", "premiers pas", "langage", "babillage", 
    "premiers mots", "alimentation du bébé", "diversification alimentaire", "DME", "coliques", "reflux gastro-œsophagien", 
    "allergies alimentaires", "eczéma bébé", "santé infantile", "fièvre", "vaccins", "calendrier vaccinal", 
    "maladies infantiles", "varicelle", "rougeole", "coqueluche", "bronchiolite", "otites", "poussées dentaires",
    "éducation positive", "communication avec bébé", "signes avec bébé", "gestion des pleurs", "crises de colère",
    "terribles two", "autonomie", "apprentissage de la propreté", "sécurité bébé", "chutes", "prévention accidents domestiques",
    "période d'opposition", "attachement",
    
    # Bonnes manières
    "bonnes manières", "étiquette", "savoir-vivre", "politesse", "savoir-vivre en société", "respect des autres",
    "comment saluer", "présentation personnelle", "respect des aînés", "courtoisie", "gestion des conflits", 
    "politesse avec les enfants", "communication non violente", "comment bien recevoir", "accueil des invités", 
    "comportement en public", "comment parler en public", "au téléphone", "étiquette numérique", "codes sociaux",
    "remerciements", "excuses", "étiquette à table", "comment tenir ses couverts", "conversation à table", 
    "protocole", "bonnes manières professionnelles", "savoir s'habiller", "étiquette dans les transports", 
    "respect de l'espace personnel"
]

def est_question_valide(question):
    """
    Vérifie si la question traite d’un sujet autorisé.
    """
    question = question.lower()
    mots_question = set(question.split())
    for sujet in SUJETS_AUTORISES:
        mots_sujet = set(sujet.split())
        if mots_sujet & mots_question:
            return True
    return False

@lru_cache(maxsize=100)
def ask_ollama(prompt):
    """
    Appelle Ollama avec un contexte spécialisé dans les domaines définis.
    """
    contexte = (
        "Tu es une intelligence spécialisée en gynécologie, puériculture et bonnes manières. "
        "Réponds précisément, avec un ton professionnel mais bienveillant. "
        "Donne des conseils pratiques et adaptés à la question."
    )
    full_prompt = f"{contexte}\n\nQuestion: {prompt}"
    response = ollama.chat(model=MODEL_NAME, messages=[{"role": "user", "content": full_prompt}])
    return response["message"]["content"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "Message vide"}), 400

    if not est_question_valide(user_input):
        return jsonify({
            "response": "Désolé, je suis spécialisée en **gynécologie, puériculture et bonnes manières**. "
                        "Posez-moi une question dans ces domaines 😊."
        })

    start_time = time.time()
    ai_response = ask_ollama(user_input)
    elapsed_time = time.time() - start_time
    logger.info(f"✅ Réponse générée en {elapsed_time:.2f}s")

    return jsonify({"response": ai_response})

@app.route('/health')
def health():
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
