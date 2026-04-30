# 🔀 Git Workflow - Guía Paso a Paso

## Flujo básico

### 1. Crear una nueva rama (feature)

```bash
git checkout -b feature/tu-caracteristica
```

Ejemplo:

```bash
git checkout -b feature/dark-mode
```

### 2. Hacer cambios y commitear

```bash
git add .
git commit -m "feat: implementar dark mode"
```

### 3. Subir la rama a GitHub

```bash
git push -u origin feature/tu-caracteristica
```

### 4. Volver a main (cuando termines)

```bash
git checkout main
git merge feature/tu-caracteristica
```

## Visualizar ramas

```bash
# Ramas locales
git branch

# Todas las ramas (local + remoto)
git branch -a

# Historial visual
git log --oneline --graph --all
```

## Sincronizar con remoto

```bash
# Descargar cambios
git fetch

# Descargar y fusionar
git pull origin develop

# Enviar cambios
git push origin main
```

## Deshacer cambios (cuidado)

```bash
# Deshacer commit, mantener cambios
git reset --soft HEAD~1

# Deshacer TODO
git reset --hard HEAD~1

# Descartar cambios de un archivo
git checkout -- archivo.txt
```
