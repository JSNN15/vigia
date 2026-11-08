# Vigía EPP

**Mira las cámaras de la faena, detecta a quien trabaja sin casco, avisa al supervisor con la foto y escribe el informe de turno. La IA corre en el equipo: las imágenes no salen de la faena.**

[![Abrir la máquina](https://img.shields.io/badge/Probar-jsnn15.github.io%2Fvigia-ffb020?style=for-the-badge)](https://jsnn15.github.io/vigia/)
![YOLOv8](https://img.shields.io/badge/YOLOv8-detector%20propio-111?style=flat-square)
![ONNX Runtime Web](https://img.shields.io/badge/ONNX%20Runtime-WebGPU-555?style=flat-square)
![Licencia](https://img.shields.io/badge/licencia-AGPL--3.0-blue?style=flat-square)

**Español** · [English](README.en.md)

<a href="https://jsnn15.github.io/vigia/app.html#sala"><img src="docs/demo.gif" alt="Sala de control con cuatro cámaras de faena, cascos detectados, cumplimiento por cámara e incidentes" width="100%"></a>

## El problema

Un supervisor no puede mirar cuatro cámaras durante todo el turno. Las infracciones se descubren al revisar la grabación, cuando ya pasó algo.

## Cómo funciona

<img src="docs/flujo.svg" alt="Cámaras, detector YOLOv8 local, pixelado de caras, aviso y informe" width="100%">

```mermaid
flowchart LR
    C1[CAM 01] & C2[CAM 02] & C3[CAM 03] & C4[CAM 04] --> D["Detector YOLOv8<br/>ONNX Runtime Web · WebGPU<br/>en el equipo de la faena"]
    D --> P[Caras pixeladas]
    P --> R{¿Persona sin casco?}
    R -->|sí| A["Aviso al supervisor<br/>con la foto"]
    R --> K["Cumplimiento por cámara<br/>e incidentes del turno"]
    A --> K
    K --> I[Informe de turno imprimible]
```

## Resultados

Evaluado con **200 fotos que el modelo nunca vio** (100 con infracción y 100 sin), las mismas con las que se probaron los modelos de visión de NVIDIA en [la prueba de EPP](https://jsnn15.github.io/ia-epp/):

| | Infracciones detectadas | Falsas alarmas en 100 fotos sin infracción |
|---|---|---|
| **Vigía (YOLOv8 propio, local)** | **93 de 100** | **2** |
| Mejor modelo de visión de NVIDIA probado (nube) | 100 de 100 | 25 |

Un modelo general por API detecta todo pero satura al supervisor con avisos falsos. Un detector propio, entrenado para esta tarea y corriendo en el equipo, da 12 veces menos falsas alarmas y no envía imágenes a internet.

## Privacidad

Las caras se pixelan antes de mostrar o guardar cualquier imagen. El detector corre en el navegador del equipo de la faena: no hay servidor que reciba video.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Presentación de la máquina. |
| `app.html`, `app.js` | Sala de control (`#sala`) y modo con la cámara propia (`#vivo`). |
| `det.js` | Preprocesamiento, inferencia ONNX y supresión de no máximos. |
| `model.onnx.part0`, `.part1` | Pesos del detector en dos partes (límite de tamaño de GitHub). |
| `frames/`, `frames.json` | Cuadros de demostración con rostros pixelados. |

## Licencias y créditos

- Detector entrenado con **Ultralytics YOLOv8 (AGPL-3.0)**; por eso este repositorio es AGPL-3.0. Un uso comercial cerrado requiere licencia de Ultralytics o cambiar de detector.
- Fotos de demostración: conjunto público **Hard Hat Workers (CC0)**, con rostros anonimizados.
- Inferencia con ONNX Runtime Web (MIT).

---

<sub>Proyecto personal de **Julián Neira Nova**, ingeniero eléctrico con 10 años en faena · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nada de lo publicado proviene de clientes ni de empleadores.
[Portafolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [Todas las máquinas](https://github.com/JSNN15)</sub>
