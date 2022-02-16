
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
            position: [-71.05400740304519,
  42.36596919270093,
          450// elevation in meters
        ],
        tilt:60,
        heading: 0
      })
      
      var camera3 = new Camera({
            position: [-71.1167,
  42.3770,
          450// elevation in meters
        ],
        tilt:60,
        heading: 0
      })
      
      var camera2 = new Camera({
  position: [
							 -71.04444248967123,
							42.35123081816361,
							500// elevation in meters
						],
        tilt: 60,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera3,
        viewingMode:"global",
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });
     

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [stl, bei,v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
     v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: -70.9628559,
          y: 42.33616242, 
          z: 500
        },
        tilt: 75,
        heading: 285
      });
    });
    stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });


    });
