# Discord Bot Base ⚡

This is the public **base of BocchiBOT**, created to serve as a starting point for anyone who wants to develop new commands.
The base bot already works with the **ping command**.

---

## 💡 About this base

- **Initial command:** `ping` ✅  
- **Configuration** via `config.js`:
  - Global deploy and deploy to specific guilds
  - Customizable cache
  - MongoDB connection with multiple options
  - **debug** and **info** logs
- Ready structure to easily add new commands
- Ideal for learning or creating your own bot based on BocchiBOT

---

## 📦 Full Bot

If you want the **full bot** with all commands and features, it is also available:  

🔗 [Official BocchiBOT Repository](https://github.com/EoKz/BocchiBOT-discord)  

---

## 🏁 Getting Started

Follow the steps below to run the BocchiBOT base locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **git** (v2.14 or higher) – required to clone the repository

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/EoKz/BocchiBOT-discord.git 
```
2. **Install NPM packages (inside the bot folder)**

```bash
npm install
```
3. **Rename `.env.example` to `.env`**  

   **Linux / macOS:**
   ```bash
   mv .env.example .en
   ```

  **Windows (cmd):**
  ```bash
  rename .env.example .env
  ```
4. **Fill in the .env variables correctly**


``DISCORD_TOKEN=`` - **get one [here](https://discord.com/developers/applications)**

``CLIENT_ID=`` - **just copy your bot’s ID from Discord**

``BOT_PREFIX=`` - **set the default bot prefix**

``GUILD_ID=`` - **guild ID for deploying slash commands (usually used for testing)**

``OWNER=`` - **Owner’s profile ID, if you need to create commands with specific permissions**

``MONGO_URI=`` - **Required for features that store data, get one [here](https://www.mongodb.com/products/platform/atlas-database)**

``MONGO_DB_NAME=`` **Your database name**

``LOG_LEVEL=`` **Log level that will appear >** ``debug`` or ``info``

5. **Run the bot (make sure you completed step 4 correctly)**

  ```bash
  npm start
  ```
