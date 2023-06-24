# Izberite sliko osnove; uporabite uradno Node.js sliko osnove
FROM node:14

# Nastavite delovni imenik v containerju
WORKDIR /app

# Kopirajte package.json in package-lock.json v delovni imenik
COPY package*.json ./

# Namestite odvisnosti
RUN npm install

# Kopirajte ostalo kodo in datoteke v delovni imenik
COPY . .

# Izpostavite vrata, ki jih vaša aplikacija uporablja (5500 v vašem primeru)
EXPOSE 5500

# Ukaz za zagon vaše aplikacije
CMD [ "node", "server.js" ]