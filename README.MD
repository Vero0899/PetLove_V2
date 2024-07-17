# Proyecto Pets

- Versión python: 3.11

## 01 Crear entorno virtual

```bash
py -m venv venv
```

## 02 Activar entorno virtual

```bash
.\venv\Scripts\Activate
```

## 03 Instalar requerimientos

```bash
pip install -r requirements.txt

---POR SI FALLA EL ANTERIOR ---   .\venv\Scripts\python.exe -m pip install -r requirements.txt
```

## 04 Crear primeras Migraciones

```bash
python manage.py makemigrations
``` 

## 05 Aplicar Migraciones

```bash
python manage.py migrate
```

## 06 Crear superusuario

```bash
python manage.py createsuperuser
```

## 07 Correr servidor

```bash
python manage.py runserver
```

## 09 Ir a la página de administración

- Debes escribir en tu navegador la siguiente dirección

```bash
http://localhost:8000/admin
```