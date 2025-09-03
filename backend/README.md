# Trueo Backend

The backend for Trueo – a mindful, minimal, and inclusive social media application where users control their feed by choosing topics that matter to them.
Built to reduce noise, the platform uses AI-powered filtering to cut through propaganda while surfacing under-reported realities from around the world.

## 🚀 Tech Stack

* Node.js – Runtime environment
* Express.js – Web framework
* TypeScript – Strongly typed development
* Swagger (swagger-jsdoc + swagger-ui-express) – API documentation
* pnpm – Package manager (monorepo-friendly)

## ⚙️ Setup & Installation
1. Clone the monorepo
```bash
git clone https://github.com/your-username/trueo.git
cd trueo
```

2. Install dependencies

From the monorepo root:
```bash
pnpm install
```

3. Navigate to the backend
cd backend

4. Start the development server
pnpm dev


Backend should now be running at:  
👉 http://localhost:8080/

## 📖 API Documentation

Swagger docs are available at:  
👉 http://localhost:8080/api-docs

## 📂 Project Structure
```bash
/backend
 ├── src
 │   ├── routes       # Express routes
 │   ├── swagger.ts   # Swagger setup
 │   ├── server.ts    # Entry point
 ├── package.json
 ├── tsconfig.json
```

## 🛠️ Notes

* Default backend port: 8080 (changeable via PORT env variable).
* Make sure to configure CORS if connecting from the frontend (http://localhost:3000).

## License

[MIT](https://choosealicense.com/licenses/mit/)