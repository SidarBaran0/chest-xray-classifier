# 🫁 Chest X-Ray Pneumonia Classifier

Dette er et maskinlæringsprosjekt utviklet som en del av faget Deep Learning ved Høgskulen på Vestlandet (HVL). Prosjektet bruker en dyp læringsmodell som vi selv har trent fra bunnen av til å klassifisere røntgenbilder av lunger som enten **"Normal"** eller **"Pneumonia"** (lungebetennelse).

Modellen ble trent av et gruppemedlem på et medisinsk datasett og deretter lagret i `.h5`-format. Dette gjør det mulig å bruke modellen direkte i applikasjonen uten behov for å trene den på nytt hver gang.

---

## 📦 Innhold

- `backend/` – Flask-backend som laster modellen og gjør prediksjoner
- `frontend/` – React-app hvor brukeren kan laste opp røntgenbilder
- `xray_classifier_scratch.h5` – Treningsresultat (modell vi selv har trent fra bunnen av)
- `README.md` – Denne filen
  
---

## 📊 Modellinformasjon

- **Base-arkitektur:** Convolutional Neural Network (CNN)
- **Treningsdata:** Chest X-Ray Images (Pneumonia) ([Kaggle-link](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia))
- **Bildeformat:** 224x224 px, RGB
- **Modellformat:** Keras `.h5`


## ⚙️ Hvordan kjøre prosjektet lokalt
📌 Systemkrav:
- Python 3.8+
- Node.js 16+
- npm

#### 1. Klon repoet
git clone https://github.com/SidarBaran0/chest-xray-classifier.git

cd chest-xray-classifier

#### 2. Installer avhengigheter for backend
- Gå inn i backend-mappen og installer avhengigheter:

cd backend

pip install -r requirements.txt

(Merk: Sørg for at du har Python 3.8 eller nyere installert)

#### 3. Start Flask-backend
python app.py

Dette starter API-et på http://127.0.0.1:5000.

#### 4. Start frontend
- Gå inn i frontend-mappen:

cd ../frontend

npm install

npm start

React-appen kjører da på http://localhost:3000.

## 🧪 Testing
Når appen kjører, kan du laste opp et røntgenbilde og få følgende informasjon:

- Et prediksjonsresultat: Positive eller Negative

- En sikkerhetsprosent (for eksempel: Modellen er 97.85 % sikker)

## 🧠 Formål
Prosjektet viser hvordan deep learning kan brukes i helserelaterte problemstillinger. Vi demonstrerer en komplett pipeline fra datainnsamling og modelltrening til webbasert deployering og testing.

Løsningen kan danne grunnlag for videre forskning eller produktutvikling innen automatisk medisinsk bildediagnostikk.

## 📄 Lisens og ansvar
Dette prosjektet er utviklet til undervisningsformål som en del av HVL sitt Deep Learning-kurs. Det er ikke ment for klinisk bruk uten videre testing og validering.



---------------------------------------

🫁 Chest X-Ray Pneumonia Classifier

Dette er et maskinlæringsprosjekt utviklet som en del av faget Deep Learning ved Høgskulen på Vestlandet (HVL). Prosjektet bruker en dyp læringsmodell som vi selv har trent fra bunnen av til å klassifisere røntgenbilder av lunger som enten "Normal" eller "Pneumonia" (lungebetennelse).

Modellen ble trent av et gruppemedlem på et medisinsk datasett og deretter lagret i .h5-format. Dette gjør det mulig å bruke modellen direkte i applikasjonen uten behov for å trene den på nytt hver gang.

📦 Innhold

backend/ – Flask-backend som laster modellen og gjør prediksjoner

frontend/ – React-app hvor brukeren kan laste opp røntgenbilder

xray_classifier_scratch.h5 – Treningsresultat (modell vi selv har trent fra bunnen av)

README.md – Denne filen

📊 Modellinformasjon

Base-arkitektur: Convolutional Neural Network (CNN)

Treningsdata: Chest X-Ray Images (Pneumonia) (Kaggle-link)

Bildeformat: 224x224 px, RGB

Modellformat: Keras .h5

⚙️ Hvordan kjøre prosjektet lokalt

📌 Systemkrav:

Python 3.8+

Node.js 16+

npm

1. Klon repoet

git clone https://github.com/SidarBaran0/chest-xray-classifier.git
cd chest-xray-classifier

2. Installer avhengigheter for backend

Gå inn i backend-mappen og installer avhengigheter:

cd backend
pip install -r requirements.txt

🔧 Merk: Sørg for at du har Python 3.8 eller nyere installert.

3. Start Flask-backend

python app.py

Dette starter API-et på http://127.0.0.1:5000.

4. Start frontend

Gå inn i frontend-mappen:

cd ../frontend
npm install
npm start

React-appen kjører da på http://localhost:3000.

✅ Testing

Når appen kjører, kan du laste opp et røntgenbilde og få følgende informasjon:

Et prediksjonsresultat: Positive eller Negative

En sikkerhetsprosent (for eksempel: Modellen er 97.85 % sikker)

🎯 Formål

Prosjektet viser hvordan deep learning kan brukes i helserelaterte problemstillinger. Vi demonstrerer en komplett pipeline fra datainnsamling og modelltrening til webbasert deployering og testing.

Løsningen kan danne grunnlag for videre forskning eller produktutvikling innen automatisk medisinsk bildediagnostikk.

📄 Lisens og ansvar

Dette prosjektet er utviklet til undervisningsformål som en del av HVL sitt Deep Learning-kurs. Det er ikke ment for klinisk bruk uten videre testing og validering.




