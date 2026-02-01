# 🔧 CONFIGURACIÓN GIT - SOLO PARA ESTE PROYECTO

## 📋 Configuración Actual

Este proyecto tiene configuración **LOCAL** de Git que solo afecta a este repositorio, sin cambiar la configuración global de otros proyectos.

### ✅ Configuración Local (Solo este proyecto)

```bash
# Ver configuración local
cd /home/innclod/Descargas/varios/kpn
git config --local --list
```

**Configuración actual:**
- **Usuario:** JordyCaro
- **Email:** jhordan_caro@hotmail.com
- **Remote:** https://github.com/joseMetNet/kpn-front.git
- **Branch:** feature/templateXlSX

### 📝 Archivo de Configuración

La configuración local está en: `.git/config`

```ini
[core]
	repositoryformatversion = 0
	filemode = true
	logallrefupdates = true
[user]
	name = JordyCaro
	email = jhordan_caro@hotmail.com
[remote "origin"]
	url = https://github.com/joseMetNet/kpn-front.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "feature/templateXlSX"]
	remote = origin
	merge = refs/heads/feature/templateXlSX
```

## 🔑 Cómo Funciona

### Configuración Local vs Global

- **Configuración LOCAL** (`.git/config`): Solo afecta a este proyecto
- **Configuración GLOBAL** (`~/.gitconfig`): Afecta a todos los proyectos

### Comandos para Configurar

```bash
# Configurar usuario SOLO para este proyecto (local)
cd /home/innclod/Descargas/varios/kpn
git config --local user.name "JordyCaro"
git config --local user.email "jhordan_caro@hotmail.com"

# Configurar remote SOLO para este proyecto
git config --local remote.origin.url "https://github.com/joseMetNet/kpn-front.git"

# Verificar que es local (no global)
git config --local --list
```

### Verificar que NO afecta otros proyectos

```bash
# Ver configuración global (otros proyectos)
git config --global --list

# Ver configuración local (solo este proyecto)
cd /home/innclod/Descargas/varios/kpn
git config --local --list
```

## 🚀 Para el Backend (sistemas-sostenibles-back)

Si necesitas configurar el backend de la misma forma:

```bash
cd /home/innclod/Descargas/varios/kpn/sistemas-sostenibles-back

# Si no tiene .git, inicializar
git init

# Configurar usuario LOCAL (solo para este proyecto)
git config --local user.name "JordyCaro"
git config --local user.email "jhordan_caro@hotmail.com"

# Agregar remote
git remote add origin https://github.com/joseMetNet/sistemas-sostenibles-back.git

# Verificar
git config --local --list
```

## ✅ Ventajas de Configuración Local

1. **No afecta otros proyectos**: Cada proyecto mantiene su propia configuración
2. **Flexibilidad**: Diferentes proyectos pueden tener diferentes usuarios/emails
3. **Seguridad**: No expones credenciales globalmente
4. **Colaboración**: Cada proyecto puede tener su propio remote

## 📌 Recordatorio

- ✅ **LOCAL** (`--local`): Solo este proyecto
- ❌ **GLOBAL** (`--global`): Todos los proyectos

Siempre usa `--local` cuando quieras configurar solo este proyecto.

