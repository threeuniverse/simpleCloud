
defineThreeUniverse(function (THREE,UNIVERSE,SPACE) {

    return new Promise(function (resolve) {

      
        var geometry = new THREE.BoxGeometry( 40, 10, 30 );
        var material = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.set(0,500,0);



        let prg = UNIVERSE.seedrandom("cloud 500 ft");

        let obj = new THREE.Object3D();
        
        SPACE.loadMTLNObject('resource/cloud/cloud.obj').then(cube => {



            for (let index = 0; index < 20; index++) {

                let clone = cube.clone();
                clone.rotateY(prg() * Math.PI * 2);
                clone.position.set(prg() * 800 - 400, 750, prg() * 800 - 400);
                obj.add(clone);

            }
            

            resolve(obj);

        })


      
    });
});
