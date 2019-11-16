
defineThreeUniverse(function (THREE,UNIVERSE,SPACE) {

    return new Promise(function (resolve) {

      
        


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
