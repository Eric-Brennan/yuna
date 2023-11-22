<template>
  <q-page class="full-height">
    <Particles id="tsparticles"
               class="tsparticles"
               :particlesInit="particlesInit"
               :particlesLoaded="particlesLoaded"
               :options="po"></Particles>
    <div class="q-mx-auto bg-white full-height"
         style="max-width: 900px; width: 100%; z-index: 1; position: relative;">
      <q-img :src="require('assets/img/yuna_1.jpg')"
             img-class="image-blurred-edge"
             height="700px"
             class="rounded-borders"
             fit="cover"
             style="max-height: 100%">
        <div class="absolute-top text-center text-h3">
          Meet Yuna
        </div>
        <div class="absolute-bottom text-center text-h3">
          Our Journey
        </div>
      </q-img>
      <div class="bg-white q-px-md">
        <q-timeline :layout="Platform.is.mobile ? 'dense':'loose'"
                    class="">
          <q-timeline-entry side="left"
                            icon="mdi-cake-variant-outline">
            <template v-slot:title
                      class="text-h3"
                      style="font-size: 20px">
              <span style="font-size: 20px;">The Perfect Vanentines Gift</span>
              
            </template>
            <template v-slot:subtitle
                      style="text-transform: none !important">
              14th February 2023
              <div class="q-mt-sm">
                <q-img :src="require('assets/img/kay_yuna.jpg')"
                       img-class="image-blurred-edge"
                       class="rounded-borders"
                       no-caps>
                  <div class="absolute-bottom text-center text-h5 no-caps">
                    Mummy Kay
                  </div>
                </q-img>
              </div>
            </template>
            <div style="text-align: left;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
          <q-timeline-entry side="right"
                            icon="mdi-heart">

            <template v-slot:subtitle
                      style="text-transform: none !important">

              <div class="q-mt-sm">
                <q-img :src="require('assets/img/birth_aaron.jpg')"
                       img-class="image-blurred-edge"
                       class="rounded-borders"
                       no-caps>
                  <div class="absolute-bottom text-center text-h5 no-caps">
                    Daddy Aaron
                  </div>
                </q-img>
              </div>
            </template>
            <div style="text-align: left;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
          <q-timeline-entry side="left"
                            icon="mdi-heart">
            <template v-slot:title>

            </template>
            <template v-slot:subtitle
                      style="text-transform: none !important">
              <div class="q-mt-sm">
                <q-img :src="require('assets/img/logan_yuna.jpg')"
                       img-class="image-blurred-edge"
                       class="rounded-borders"
                       no-caps>
                  <div class="absolute-bottom text-center text-h5 no-caps">
                    Big Brother Logan
                  </div>
                </q-img>
              </div>
            </template>
            <div>
            </div>
          </q-timeline-entry>
          <q-timeline-entry side="right"
                            icon="mdi-heart">

            <template v-slot:subtitle
                      style="text-transform: none !important">

              <div class="q-mt-sm">
                <q-img :src="require('assets/img/storm_yuna.jpg')"
                       img-class="image-blurred-edge"
                       class="rounded-borders"
                       no-caps>
                  <div class="absolute-bottom text-center text-h5 no-caps">
                    Bigger Brother Storm
                  </div>
                </q-img>
              </div>
            </template>
            <div>

            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Platform, useMeta } from 'quasar';
import { loadFull } from 'tsparticles';
import { ref } from 'vue';
  import { getMetadata } from '../helpers/metadata-factory';
  
  useMeta(getMetadata({
    title: "Home",
    description: "Save Yuna",
    keywords: "",
    ogUrl: "",
    isSearchable: true
  }))

  const particlesInit = ref(async (engine: any) => {
    await loadFull(engine);
  });

  const particlesLoaded = ref(async (container: any) => {
  });

  const po = ref(
    {
      "autoPlay": true,
      "background": {
        "color": {
          "value": "#F1E1FF"
        },
        "image": "",
        "position": "",
        "repeat": "",
        "size": "",
        "opacity": 1
      },
      "backgroundMask": {
        "composite": "destination-out",
        "cover": {
          "color": {
            "value": "#fff"
          },
          "opacity": 1
        },
        "enable": false
      },
      "defaultThemes": {

      },
      "delay": 0,
      "fullScreen": {
        "enable": true,
        "zIndex": 0
      },
      "detectRetina": true,
      "duration": 0,
      "fpsLimit": 120,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": false,
            "mode": [

            ]
          },
          "onDiv": {
            "selectors": [
              "#repulse-div"
            ],
            "enable": true,
            "mode": [
              "repulse"
            ],
            "type": "circle"
          },
          "onHover": {
            "enable": false,
            "mode": [

            ],
            "parallax": {
              "enable": false,
              "force": 2,
              "smooth": 10
            }
          },
          "resize": {
            "delay": 0.5,
            "enable": true
          }
        },
        "modes": {
          "repulse": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": [

              ]
            }
          }
        }
      },
      "manualParticles": [
      ],
      "particles": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "collisions": {
          "absorb": {
            "speed": 2
          },
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "enable": false,
          "maxSpeed": 50,
          "mode": "bounce",
          "overlap": {
            "enable": true,
            "retries": 0
          }
        },
        "color": {
          "value": [
            "#9775AA",
            "#764B8E",
            "#582A72",
            "#3D1255"
          ],
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "delay": 0,
              "decay": 0,
              "sync": true
            },
            "s": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "delay": 0,
              "decay": 0,
              "sync": true
            },
            "l": {
              "count": 0,
              "enable": false,
              "offset": 0,
              "speed": 1,
              "delay": 0,
              "decay": 0,
              "sync": true
            }
          }
        },
        "groups": {

        },
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 3000,
              "y": 3000
            }
          },
          "center": {
            "x": 50,
            "y": 50,
            "mode": "percent",
            "radius": 0
          },
          "decay": 0,
          "distance": {

          },
          "direction": "top",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50
          },
          "path": {
            "clamp": true,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0
            },
            "enable": false,
            "options": {

            }
          },
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "random": false,
          "size": false,
          "speed": 1,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "trail": {
            "enable": false,
            "length": 10,
            "fill": {

            }
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": false,
            "width": 1920,
            "height": 1080
          },
          "limit": 0,
          "value": 10
        },
        "opacity": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": {
            "min": 0.4,
            "max": 0.8
          },
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 2,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "reduceDuplicates": false,
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000"
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0
          }
        },
        "shape": {
          "close": true,
          "fill": true,
          "options": {

          },
          "type": "circle"
        },
        "size": {
          "random": {
            "enable": false,
            "minimumValue": 1
          },
          "value": {
            "min": 300,
            "max": 400
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 100,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "stroke": {
          "width": 0
        },
        "zIndex": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        },
        "destroy": {
          "bounds": {

          },
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 3
            },
            "rate": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true
          }
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "tilt": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": {
            "angle": 50,
            "move": 10
          }
        },
        "life": {
          "count": 0,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "sync": false
          },
          "duration": {
            "random": {
              "enable": false,
              "minimumValue": 0.0001
            },
            "value": 0,
            "sync": false
          }
        },
        "rotate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "path": false
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": false
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 45
          },
          "width": 1
        },
        "links": {
          "blink": false,
          "color": {
            "value": "#fff"
          },
          "consent": false,
          "distance": 100,
          "enable": false,
          "frequency": 1,
          "opacity": 1,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#000"
            },
            "enable": false
          },
          "triangles": {
            "enable": false,
            "frequency": 1
          },
          "width": 1,
          "warp": false
        },
        "repulse": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        }
      },
      "pauseOnBlur": true,
      "pauseOnOutsideViewport": true,
      "responsive": [

      ],
      "smooth": false,
      "style": {

      },
      "themes": [

      ],
      "zLayers": 100,
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true
        }
      }
    }
  )
</script>
