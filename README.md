#  CryptoDash: AI-Powered Financial Dashboard

> Dashboard financiero de alto rendimiento construido con **Next.js 15**, **TypeScript** e integración real con la **IA de Google Gemini**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)

##  Características Principales

* ** AI Market Insights:** Análisis técnico en tiempo real generado por **Google Gemini 2.5 Flash**. La IA evalúa la volatilidad y el precio actual para emitir veredictos de inversión (Buy/Hold/Sell).
* ** Visualización de Datos:** Gráficas de área interactivas con **Recharts** que muestran la evolución del precio en los últimos 7 días.
* ** Arquitectura Moderna:** Uso de **Server Components** para optimizar la carga y **Server Actions** para procesar peticiones de IA de forma segura.
* ** Interfaz "Glassmorphism":** Diseño profesional con Tailwind CSS, efectos de desenfoque de fondo, modo oscuro nativo y estados de carga (Skeletons).
* ** Datos en Tiempo Real:** Integración con la API de CoinGecko para obtener precios actualizados y capitalización de mercado.



##  Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Lenguaje:** TypeScript
* **IA:** Google Generative AI SDK (Gemini)
* **Estilos:** Tailwind CSS
* **Gráficas:** Recharts
* **Iconos:** Lucide React

##  Instalación y Configuración

1.  **Clona el proyecto:**
    ```bash
    git clone [https://github.com/tu-usuario/crypto-dashboard.git](https://github.com/tu-usuario/crypto-dashboard.git)
    cd crypto-dashboard
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz y añade tu API Key:
    ```text
    GEMINI_API_KEY=tu_clave_de_google_ai_studio
    ```

4.  **Inicia el modo desarrollo:**
    ```bash
    npm run dev
    ```

##  Robustez y Resiliencia

El proyecto implementa un sistema de **manejo de errores** avanzado:
* **Rate Limit Protection:** Caché de datos para evitar bloqueos por parte de la API de CoinGecko.
* **Error Boundaries:** Pantallas de error personalizadas para fallos de red.
* **Skeleton Loaders:** Mejora de la percepción de velocidad (LCP) mediante esqueletos de carga animados.

---
Creado con <3 por **Unai Pastor**
