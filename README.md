# Ignacio Menárguez — Cybersecurity & IA Portfolio

Portfolio web donde centralizo mis proyectos de **ciberseguridad**, **automatización con IA** y **scripts de soporte para Blue Team / SOC**.  [![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visitar-ffcc00?style=for-the-badge)](https://cybersecurity-portfolio-ashy.vercel.app)


La web está desplegada en Vercel y sirve como tarjeta de presentación técnica y demo de mis proyectos.

---

## 📸 Portfolio

![Ignacio Menárguez Portfolio](./cover.png)

La landing principal del portfolio muestra:

- Resumen rápido de mi perfil (Junior Cybersecurity Analyst | Blue Team | SOC | Forensics).
- Métricas de experiencia y horas de formación en ciberseguridad.
- Acceso directo a mi CV, LinkedIn y proyectos destacados.
- Sección de proyectos con tarjetas individuales (cada una viene de un MDX en `src/content/projects`).

---

## 📂 Proyectos incluidos

_(Resumen rápido; se corresponde con los MDX de `src/content/projects`.)_

- **Menárguez-IA Platform — Generador de landings con IA**  
  Constructor de páginas de venta a partir de un chat → JSON (PageSpec) → renderer propio, con precios en EUR y flujo de reservas `/book` mediante correo (Resend).

- **Port Scanner — Menárguez-IA Solutions**  
  Port scanner **mobile-first** con perfiles de escaneo (quick, top1000, full), validación de autorización y registro de histórico.

- **Nmap Auto Reporter**  
  Script en Python que lanza escaneos Nmap y genera informes en Markdown listos para pegar en un ticket del SOC.

- **AuthLog Auto Reporter**  
  Analiza ficheros `auth.log` (SSH/sudo/autenticación) y genera un informe con:
  - IPs con más intentos fallidos  
  - Usuarios más atacados  
  - Logins aceptados  

- **Blue Team IA Coach**  
  Asistente CLI para analistas SOC junior con checklists, comandos frecuentes y recomendaciones de buenas prácticas.

- **AML Suite (resumen)**  
  Prototipo de dashboard para ideas de detección de blanqueo de capitales (AML) con KPIs y módulos forense/alerting.

- **Finance App / Pro Accountant**  
  Utilidades sencillas para simulaciones financieras y gestión económica personal/profesional.

- **Menárguez-CTF-Lab**  
  Laboratorio personal para documentar retos de CTF y ejercicios prácticos de ciberseguridad.

_Ajusto la lista si es necesario, añadiendo o quitando proyectos según lo que tenga en `src/content/projects`._

---

## 🛠️ Stack técnico

- **Astro** como framework principal del portfolio.
- **TypeScript** + componentes tipo React.
- **Tailwind CSS** para el diseño (tema oscuro + acento amarillo).
- Despliegue en **Vercel**.

---

## 📁 Estructura rápida del repo

```text
cybersecurity-portfolio/
├─ public/                      # Imágenes públicas (favicon, og-image, etc.)
├─ src/
│  ├─ components/               # Componentes reutilizables del portfolio
│  ├─ content/
│  │  ├─ projects/              # Proyectos en formato MDX (cada tarjeta del portfolio)
│  │  └─ blog/                  # Entradas del blog (si las añado)
│  └─ layouts/                  # Layouts base para páginas
├─ astro.config.mjs             # Configuración principal de Astro
├─ package.json                 # Dependencias y scripts (npm run dev, build, etc.)
└─ README.md                    # Descripción del portfolio (este archivo)
