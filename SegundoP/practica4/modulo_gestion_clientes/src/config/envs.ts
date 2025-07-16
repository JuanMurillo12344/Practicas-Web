import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
  NATS_SERVERS: string[];
}

// Definición manual (sin process.env)
const configToValidate = {
  PORT: 3003,
  DATABASE_URL: 'mysql://root:root@localhost:3306/base3',
  NATS_SERVERS: ['nats://localhost:4222'],
};

const envsSchema = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required(),
  NATS_SERVERS: joi.array().items(joi.string()).required(),
}).unknown(true);

const { error, value } = envsSchema.validate(configToValidate);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;


export const envs = {
  port: envVars.PORT ?? 3003, // Puerto por defecto 3000 si no está definido
  databaseUrl: envVars.DATABASE_URL ?? 'mysql://root:root@localhost:3306/base3',
  natsServers: envVars.NATS_SERVERS ?? ['nats://localhost:4222'],
};