# Fund Management - Prueba Técnica

Aplicación web para manejo de fondos (FPV/FIC) para clientes BTG, desarrollada en **Angular 20** usando **Signals**, **RxJS**, **Angular Material** y **Tailwind CSS**.

### Funcionalidades
- Visualizar la lista de fondos disponibles.
- Suscribirse a un fondo si cumple con el monto mínimo.
- Cancelar suscripciones y ver el saldo actualizado.
- Visualizar historial de transacciones.
- Seleccionar método de notificación (Email o SMS) al suscribirse.

---

## Requisitos

- Node.js >= 18
- npm >= 9
- Angular CLI >= 17
- Navegador moderno (Chrome, Edge, Firefox)

---

## Instalación y ejecución

### 2. Instalar dependencias

```bash
npm install

### 3. Configuración y ejecución del backend simulado

Se utiliza **json-server** para simular la API REST.

```bash
npm run mock

- Este comando levanta el mock en el **puerto 3000** por defecto.  
- Si otro servicio ya está usando el puerto 3000, modifica el puerto en el archivo `proxy.conf.json`.


### 4. Ejecución del frontend

```bash
npm start

### Notas adicionales

- La aplicación usa **Signals** para el estado reactivo del usuario y los fondos.
- Todas las operaciones de suscripción y cancelación actualizan el saldo y las transacciones en **tiempo real**.
- Se utiliza **Angular Material** para la interfaz y **Tailwind CSS** para estilos adicionales.
- En caso de errores de conexión con el backend, revisa que **json-server** esté corriendo en el puerto correcto.
- No es necesario configurar backend ni autenticación; el usuario inicial tiene un saldo de **COP $500.000**.
