# Ignacio Menárguez — Cybersecurity & IA Portfolio

![Portfolio home](cover.png)

Portfolio web donde centralizo mis proyectos de **ciberseguridad**, **automatización con IA** y scripts de soporte para **Blue Team / SOC**.

La web está desplegada en Vercel y sirve como tarjeta de presentación técnica y demo de mis proyectos.

---

## 🧩 Proyectos incluidos

*(Resumen rápido; se corresponde con los MDX de `src/content/projects`)*

- **Menárguez-IA Platform — Generador de landings con IA**  
  Constructor de páginas de venta a partir de un chat → JSON (PageSpec) → renderer propio, con precios en EUR y flujo de reservas `/book` mediante correo (Resend).

- **Port Scanner — Menárguez-IA Solutions**  
  Port scanner *mobile-first* con perfiles de escaneo (quick, top1000, full), validación de autorización y registro de histórico.

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

> Ajusta la lista si quieres, añadiendo o quitando proyectos según lo que tengas ahora mismo en `src/content/projects`.

---

## 🛠️ Stack técnico

- **Astro** como framework principal del portfolio.
- **TypeScript** + componentes tipo React.
- **Tailwind CSS** para el diseño (tema oscuro + acento amarillo).
- Despliegue en **Vercel**.

---

## ▶️ Cómo ejecutar el portfolio en local

```bash
git clone https://github.com/Nachomf112/cybersecurity-portfolio.git
cd cybersecurity-portfolio
npm install
npm run dev
