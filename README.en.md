# Vigía PPE

**Watches site cameras, detects people working without a hard hat, alerts the supervisor with the photo and writes the shift report. The AI runs on site: images never leave the operation.**

[![Open the tool](https://img.shields.io/badge/Try%20it-jsnn15.github.io%2Fvigia-ffb020?style=for-the-badge)](https://jsnn15.github.io/vigia/)
![YOLOv8](https://img.shields.io/badge/YOLOv8-custom%20detector-111?style=flat-square)
![ONNX Runtime Web](https://img.shields.io/badge/ONNX%20Runtime-WebGPU-555?style=flat-square)
![License](https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square)

[Español](README.md) · **English**

> The interface is in Spanish.

<a href="https://jsnn15.github.io/vigia/app.html#sala"><img src="docs/demo.gif" alt="Control room with four site cameras, detected hard hats, compliance per camera and incidents" width="100%"></a>

## The problem

A supervisor cannot watch four cameras for a whole shift. Violations are found when someone reviews the footage, after something already happened.

## How it works

<img src="docs/flow.svg" alt="Cameras, local YOLOv8 detector, face blurring, alert and report" width="100%">

```mermaid
flowchart LR
    C1[CAM 01] & C2[CAM 02] & C3[CAM 03] & C4[CAM 04] --> D["YOLOv8 detector<br/>ONNX Runtime Web · WebGPU<br/>on the site computer"]
    D --> P[Faces blurred]
    P --> R{Person without hard hat?}
    R -->|yes| A["Alert to supervisor<br/>with the photo"]
    R --> K["Compliance per camera<br/>and shift incidents"]
    A --> K
    K --> I[Printable shift report]
```

## Results

Evaluated on **200 photos the model never saw** (100 with a violation, 100 without), the same set used to test NVIDIA vision models in [the PPE study](https://jsnn15.github.io/ia-epp/):

| | Violations detected | False alarms in 100 clean photos |
|---|---|---|
| **Vigía (custom YOLOv8, local)** | **93 of 100** | **2** |
| Best NVIDIA vision model tested (cloud) | 100 of 100 | 25 |

A general-purpose API model catches everything but floods the supervisor with false alerts. A task-specific detector running on site gives 12× fewer false alarms and sends no images to the internet.

## Privacy

Faces are blurred before any image is shown or stored. The detector runs in the site computer's browser: there is no server receiving video.

## Files

| File | What it is |
|---|---|
| `index.html` | Landing page. |
| `app.html`, `app.js` | Control room (`#sala`) and your-own-camera mode (`#vivo`). |
| `det.js` | Preprocessing, ONNX inference and non-max suppression. |
| `model.onnx.part0`, `.part1` | Detector weights split in two (GitHub file-size limit). |
| `frames/`, `frames.json` | Demo frames with blurred faces. |

## Licenses and credits

- Detector trained with **Ultralytics YOLOv8 (AGPL-3.0)**, so this repository is AGPL-3.0. Closed commercial use needs an Ultralytics license or a different detector.
- Demo photos: public **Hard Hat Workers** dataset (CC0), faces anonymized.
- Inference with ONNX Runtime Web (MIT).

---

<sub>Personal project by **Julián Neira Nova**, electrical engineer with 10 years in mining operations · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nothing here comes from clients or employers.
[Portfolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [All tools](https://github.com/JSNN15)</sub>
