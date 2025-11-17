# Ignacio Menárguez — Cybersecurity & IA Portfolio

Portfolio web donde centralizo mis proyectos de **ciberseguridad**, **automatización con IA** y **scripts de soporte para Blue Team / SOC**.  
[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visitar-ffcc00?style=for-the-badge)](https://cybersecurity-portfolio-ashy.vercel.app)

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

## 🚀 Cómo probar el portfolio en local

Si quieres levantar el portfolio en tu máquina:

```bash
# 1. Clonar el repositorio
git clone https://github.com/Nachomf112/Cybersecurity-IA-Portfolio.git

# 2. Entrar en la carpeta
cd Cybersecurity-IA-Portfolio

# 3. Instalar dependencias
npm install

# 4. Levantar el entorno de desarrollo
npm run dev
# Luego abre http://localhost:4321 en tu navegador
```
---

## 🗺️ Roadmap & próximas mejoras

Voy usando los **GitHub Issues** como sistema de roadmap y lista de tareas:

- [Añadir secciones estándar](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues/5)
- [Crear plantilla de nota en Markdown/MDX](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues/4)
- [Blog / Notas de SOC y ciberseguridad (v1)](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues/3)
- [Mejorar rendimiento y accesibilidad (Lighthouse)](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues/2)
- [Roadmap v1 del portfolio](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues/1)

> Si ves algo interesante o tienes feedback, puedes abrir un nuevo issue en el repositorio.
---

## 🌐 Contacto & enlaces útiles

- 🌍 Portfolio en producción: https://cybersecurity-portfolio-ashy.vercel.app
- 💼 LinkedIn: https://www.linkedin.com/in/ignacio-menarguez-fernandez/
- 🧠 Menarguez-IA Solutions (automatización e IA): https://menarguez-ia.com

Si estás buscando perfiles **Junior SOC / Blue Team / Ciberseguridad**,  
puedes contactarme por LinkedIn o a través del formulario de contacto de mi portfolio.
---

## 🇬🇧 Quick summary (EN)

This repository contains my personal **Cybersecurity & AI portfolio**.  
The website showcases:

- Projects focused on **Blue Team / SOC**, network scanning and log analysis.
- **Automation with Python, Bash and AI**, to speed up incident response and reporting.
- A growing collection of tools like *Nmap Auto Reporter*, *AuthLog Auto Reporter* and AML / forensics experiments.
- A modern portfolio UI built with **Astro + Tailwind CSS**, deployed on **Vercel**.

If you’re hiring for **Junior SOC / Blue Team / Cybersecurity** roles, feel free to reach out via LinkedIn or the contact form on the portfolio site.

---
También puedes seguir la evolución del portfolio en el roadmap público:
[GitHub Issues del proyecto](https://github.com/Nachomf112/Cybersecurity-IA-Portfolio/issues).
---
