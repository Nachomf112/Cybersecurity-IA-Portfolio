
Si quieres afinar cualquier frase para sonar más “tú”, lo cambiamos sin problema.

---

### 2. Cómo sustituir el README viejo

Tienes dos opciones, te explico rápido las dos:

#### Opción A – Editar desde GitHub (la más cómoda ahora)

1. Ve a tu repo: `https://github.com/Nachomf112/cybersecurity-portfolio`.
2. Haz clic en el archivo **`README.md`**.
3. Arriba a la derecha pulsa en el icono del lápiz **“Edit this file”**.
4. Selecciona todo el contenido actual y **pega** el texto nuevo de arriba.
5. Baja al final de la página:
   - En “Commit changes” pon por ejemplo:  
     `feat: update README with cybersecurity portfolio info`
   - Marca **“Commit directly to the main branch”**.
6. Pulsa **“Commit changes”**.

Listo: tu README nuevo quedará publicado inmediatamente.

#### Opción B – Editar desde tu Kali y hacer push

Si prefieres hacerlo en local:

```bash
cd ~/nacho/pruebas/simple-portfolio   # o la ruta donde tengas el repo

nano README.md        # pega aquí el contenido nuevo, guarda y sal

git status            # ver cambios
git add README.md
git commit -m "Update README with cybersecurity portfolio description"
git push
