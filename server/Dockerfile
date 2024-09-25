FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=base /app ./

EXPOSE 3000

CMD [ "npm","start" ]
