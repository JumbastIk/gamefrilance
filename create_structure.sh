#!/bin/bash

# Создаем корневую папку проекта
mkdir -p gamefrilance
cd gamefrilance

# Создаем структуру бэкенда
mkdir -p cmd/api
mkdir -p internal/domain
mkdir -p internal/usecases
mkdir -p internal/repo/{postgres/migrations,interfaces}
mkdir -p internal/api/{handlers,middleware,dto}
mkdir -p internal/services/{telegram,payment,cache}
mkdir -p internal/config

# Создаем структуру фронтенда
mkdir -p web/{components/{ui,layout,orders},pages/{order,profile},styles,public,utils}

# Создаем остальные папки
mkdir -p docker
mkdir -p scripts
mkdir -p .github/workflows

# Создаем пустые файлы для бэкенда (чтобы git их видел)
touch cmd/api/main.go
touch internal/domain/{user.go,order.go,wallet.go,review.go}
touch internal/usecases/{user.go,order.go,payment.go,matching.go}
touch internal/repo/interfaces.go
touch internal/repo/postgres/{conn.go,user_repo.go,order_repo.go,wallet_repo.go}
touch internal/repo/postgres/migrations/{001_create_users_table.sql,002_create_orders_table.sql,003_create_wallets_table.sql}
touch internal/api/handlers/{auth.go,orders.go,wallet.go,health.go}
touch internal/api/middleware/{auth.go,logger.go,rate_limit.go}
touch internal/api/dto/{order_dto.go,user_dto.go}
touch internal/api/routes.go
touch internal/services/telegram/{client.go,notifications.go}
touch internal/services/payment/{client.go,escrow.go}
touch internal/services/cache/redis_client.go
touch internal/config/config.go
touch internal/config/.env.example

# Создаем пустые файлы для фронтенда
touch web/components/ui/{Button.tsx,Input.tsx,Card.tsx}
touch web/components/layout/{Header.tsx,Footer.tsx}
touch web/components/orders/{OrderCard.tsx,OrderList.tsx}
touch web/pages/{index.tsx,_app.tsx}
touch web/pages/order/{[id].tsx,create.tsx}
touch web/pages/profile/{[id].tsx}
touch web/styles/globals.css
touch web/utils/{api.ts,telegram.ts}
touch web/.env.local.example
touch web/package.json
touch web/tsconfig.json

# Создаем остальные файлы
touch docker/{Dockerfile.backend,Dockerfile.frontend,docker-compose.yml}
touch scripts/seed.sql
touch .github/workflows/{tests.yml,deploy.yml}
touch .gitignore go.mod Makefile README.md

echo "Структура проекта gamefrilance успешно создана!"