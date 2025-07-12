# Node.js MongoDB Homework Project

### 🇺🇸 English

## 📝 Project Description

This project is a Node.js application built with MongoDB as part of homework assignments for learning backend development. The application demonstrates core concepts of building RESTful APIs using modern Node.js technologies.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library
- **dotenv** - Environment variables management
- **cors** - Cross-Origin Resource Sharing middleware
- **swagger-ui-express** - Swagger UI for API documentation
- **swagger-jsdoc** - JSDoc comments to OpenAPI specification

### 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Ira-Panasiuk-2024/nodejs-hw-mongodb.git
cd nodejs-hw-mongodb
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```bash
PORT=5000                                    # Port for the server to run on

# MongoDB Configuration
MONGODB_USER=your_mongodb_username          # MongoDB username
MONGODB_PASSWORD=your_mongodb_password      # MongoDB password
MONGODB_URL=your_mongodb_cluster_url        # MongoDB cluster URL
MONGODB_DB=phonebook_db                     # Database name

# Authentication
JWT_SECRET=your_super_secret_jwt_key        # Secret key for JWT token generation

# Application Domain
APP_DOMAIN=http://localhost:5000            # Application domain URL

# Cloudinary Configuration (for image uploads)
CLOUD_NAME=your_cloudinary_cloud_name       # Cloudinary cloud name
API_KEY=your_cloudinary_api_key             # Cloudinary API key
API_SECRET=your_cloudinary_api_secret       # Cloudinary API secret
ENABLE_CLOUDINARY=true                      # Enable/disable Cloudinary integration

# Email Configuration  brevo.com
SMTP_HOST=                                  # SMTP server hostname
SMTP_PORT=                                  # SMTP server port number
SMTP_USER=                                  # SMTP authentication username  
SMTP_PASSWORD=                              # SMTP authentication password
SMTP_FROM=                                  # Email address for outgoing emails

# Google OAuth Configuration
GOOGLE_OAUTH_CLIENT_ID=                     # Google OAuth client ID
GOOGLE_OAUTH_CLIENT_SECRET=                 # Google OAuth client secret
```

4. Start the development server:

```bash
npm run dev
```

### 🛠️ Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (if configured)

## 🔧 API Endpoints

The application provides RESTful API endpoints for managing resources. Detailed API documentation will be added as the project develops.

## 🤝 Contributing

This is a homework project, but feedback and suggestions are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational purposes.

---

### 🇺🇦 Українська

## 📝 Опис проєкту

Цей проєкт є Node.js додатком, побудованим з використанням MongoDB в рамках домашніх завдань для вивчення backend розробки. Додаток демонструє основні концепції створення RESTful API з використанням сучасних Node.js технологій.

## 🚀 Використані технології

- **Node.js** - середовище виконання JavaScript
- **Express.js** - фреймворк для веб-додатків
- **MongoDB** - NoSQL база даних
- **Mongoose** - бібліотека для роботи з MongoDB
- **dotenv** - управління змінними середовища
- **cors** - міделвара для Cross-Origin Resource Sharing
- **swagger-ui-express** - Swagger UI для документації API
- **swagger-jsdoc** - генерація OpenAPI специфікації з JSDoc коментарів

### 📦 Встановлення

1. Клонуйте репозиторій:

```bash
git clone https://github.com/Ira-Panasiuk-2024/nodejs-hw-mongodb.git
cd nodejs-hw-mongodb
```

2. Встановіть залежності:

```bash
npm install
```

3. Створіть файл `.env` в кореневій директорії та додайте змінні середовища:

```bash
PORT=5000                                    # Порт для запуску сервера

# Конфігурація MongoDB
MONGODB_USER=your_mongodb_username          # Ім'я користувача MongoDB
MONGODB_PASSWORD=your_mongodb_password      # Пароль MongoDB
MONGODB_URL=your_mongodb_cluster_url        # URL кластера MongoDB
MONGODB_DB=phonebook_db                     # Назва бази даних

# Автентифікація
JWT_SECRET=your_super_secret_jwt_key        # Секретний ключ для генерації JWT токенів

# Домен додатка
APP_DOMAIN=http://localhost:5000            # URL домену додатка

# Конфігурація Cloudinary (для завантаження зображень)
CLOUD_NAME=your_cloudinary_cloud_name       # Назва хмари Cloudinary
API_KEY=your_cloudinary_api_key             # API ключ Cloudinary
API_SECRET=your_cloudinary_api_secret       # API секрет Cloudinary
ENABLE_CLOUDINARY=true                      # Увімкнути/вимкнути інтеграцію Cloudinary

# Конфігурація електронної пошти  brevo.com
SMTP_HOST=                                  # Ім'я хоста SMTP сервера
SMTP_PORT=                                  # Номер порту SMTP сервера
SMTP_USER=                                  # Ім'я користувача для аутентифікації SMTP
SMTP_PASSWORD=                              # Пароль для аутентифікації SMTP
SMTP_FROM=                                  # Адреса електронної пошти для вихідних листів

# Конфігурація Google OAuth
GOOGLE_OAUTH_CLIENT_ID=                     # ID клієнта Google OAuth
GOOGLE_OAUTH_CLIENT_SECRET=                 # Секретний ключ клієнта Google OAuth
```

4. Запустіть сервер розробки:

```bash
npm run dev
```

### 🛠️ Доступні скрипти

- `npm start` - Запуск продакшн сервера
- `npm run dev` - Запуск сервера розробки з nodemon
- `npm test` - Запуск тестів (якщо налаштовано)

## 🔧 API ендпоінти

Додаток надає RESTful API ендпоінти для управління ресурсами. Детальна документація API буде додана по мірі розвитку проєкту.

## 🤝 Внесення змін

Це навчальний проєкт, але відгуки та пропозиції вітаються! Будь ласка, не соромтеся:

1. Форкнути репозиторій
2. Створити гілку для нової функції
3. Внести свої зміни
4. Подати pull request

## 📄 Ліцензія

Цей проєкт створено в освітніх цілях.

---

## 👩‍💻 Author / Автор

**Ira Panasiuk** - [GitHub Profile](https://github.com/Ira-Panasiuk-2024) / **Ірина Панасюк** - [GitHub Профіль](https://github.com/Ira-Panasiuk-2024)

View Source Code: [Node.js MongoDB](https://github.com/Ira-Panasiuk-2024/nodejs-hw-mongodb) / Переглянути код: [Node.js MongoDB](https://github.com/Ira-Panasiuk-2024/nodejs-hw-mongodb)

---

_Made with ❤️ for learning Node.js and MongoDB / Створено з ❤️ для вивчення Node.js та MongoDB_
