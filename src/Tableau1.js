/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
            //tree
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');

        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');

        this.load.image('bridgebg1', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('bridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('water', 'assets/level/ground/g-water.png');
        //treesG
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('shroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('tronc','assets/level/ground/g-fellen-tree-1.png');
        //props
        this.load.image('bigrock','assets/level/ground/g-big-stone.png')
        this.load.image('rock1','assets/level/ground/g-stone-1.png')
        this.load.image('rock2','assets/level/ground/g-stone-2.png')
        this.load.image('rock3','assets/level/ground/g-stone-3.png')
        this.load.image('rock4','assets/level/ground/g-stone-4.png')
        this.load.image('box1','assets/level/ground/g-box-1.png')
        this.load.image('box2','assets/level/ground/g-box-2.png')

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        for(let i=1;i<=3;i++) {
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');

            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain1=this.add.image(650,150, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);

        let bg2Terrain2=this.add.image(-200,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
                /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree3=this.add.image(650,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10;


        let bg2Tree2=this.add.image(330,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,-70);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain1=this.add.image(650,270, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1.scale=0.6;
        this.bg1Container.add(bg1Terrain1);

        let bg1Terrain3=this.add.image(-435,210, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1b=this.add.image(530,450, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1b.scale=1;
        this.bg1Container.add(bg1Terrain1b);

        let bg1Terrain1R=this.add.image(1240,250, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1R.scale=1;
        this.bg1Container.add(bg1Terrain1R);

        let bridgebg=this.add.image(960,250, 'bridgebg1').setOrigin(0,0);
        bridgebg.scale = 1.3;
        this.bg1Container.add(bridgebg);
        /**
         * trees
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-10,350, 'bg1-tree-1').setOrigin(0,1);
        bg1Tree1.scale = 0.7;
        this.bg1Container.add(bg1Tree1);

        let bg1Tree3=this.add.image(150,350, 'bg1-tree-3').setOrigin(0,1);
        bg1Tree3.scale = 0.7;
        this.bg1Container.add(bg1Tree3);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(-150,30);
        /**
         * Arbre + rocks
         * @type {Phaser.GameObjects.Image}
         */
        let water=this.add.image(595,580, 'water').setOrigin(0,1);
        this.groundContainer.add(water);

        let treeL1=this.add.image(180,375, 'gTree2').setOrigin(0,1);
        treeL1.scale=0.9;
        treeL1.flipX=true;
        this.groundContainer.add(treeL1);

        let treeL2=this.add.image(430,375, 'gTree2').setOrigin(0,1);
        treeL2.scale=0.7;
        this.groundContainer.add(treeL2);

        let treeR1=this.add.image(1010,365, 'gTree1').setOrigin(0,1);
        treeR1.scale=0.8;
        treeR1.flipX=true;
        treeR1.angle = -10;
        this.groundContainer.add(treeR1);

        let treeR2=this.add.image(1200,400, 'gTree2').setOrigin(0,1);
        treeR2.scale=1.1;
        this.groundContainer.add(treeR2);



        let shroom1=this.add.image(330,360, 'shroom1').setOrigin(0,1);
        shroom1.scale=1.1;
        shroom1.flipX=true;
        this.groundContainer.add(shroom1);

        let rock3=this.add.image(490,360, 'rock3').setOrigin(0,1);
        rock3.flipX=true;
        this.groundContainer.add(rock3);


        let rockBridgeL=this.add.image(963,360, 'rock1').setOrigin(0,1);
        rockBridgeL.flipX=true;
        this.groundContainer.add(rockBridgeL);

        let cliffL=this.add.image(950,730, 'gLeft').setOrigin(0,1);
        this.groundContainer.add(cliffL);

        let rock4=this.add.image(1060,370, 'rock4').setOrigin(0,1);
        rock4.scale=1.4;
        rock4.angle=1;
        this.groundContainer.add(rock4);

        let rock4R=this.add.image(1100,350, 'rock1').setOrigin(0,1);
        rock4R.scale=1.4;
        rock4R.angle=1;
        this.groundContainer.add(rock4R);

        let rockRR=this.add.image(1230,368, 'rock4').setOrigin(0,1);
        rockRR.scale=1.4;
        rockRR.flipX= true;
        rockRR.angle=1;
        this.groundContainer.add(rockRR);

        let shroom2=this.add.image(1600,370, 'shroom1').setOrigin(0,1);
        shroom2.scale=1;
        this.groundContainer.add(shroom2);

        let tronc=this.add.image(1950,353, 'tronc').setOrigin(0,1);
        tronc.scale=1;
        tronc.angle=6;
        this.groundContainer.add(tronc);
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);

        let gL1=this.add.image(1070,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gL1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid2);

        let gMidR1=this.add.image(gL1.x+gL1.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMidR1);

        let gMidR2=this.add.image(gMidR1.x+gMidR1.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMidR2);

        let gMidR3=this.add.image(gMidR2.x+gMidR2.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMidR3);

        let gRight1=this.add.image(gMidR3.x+gMidR3.width,350, 'gLeft').setOrigin(0,0);
        gRight1.flipX = true;
        this.groundContainer.add(gRight1);

        let cliffR=this.add.image(2310,750, 'gLeft').setOrigin(0,1);
        this.groundContainer.add(cliffR);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);

        this.add.tileSprite(1050,410,gMidR1.x+gRight1.width-600,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);



        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass1b=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass1b);

        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        let grassR2=this.add.tileSprite(1000,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grassR2);

        let bridge=this.add.image(530,280, 'bridge').setOrigin(0,0);
        bridge.scale=0.9;
        this.groundContainer.add(bridge);

        let box2=this.add.image(640,260, 'box2').setOrigin(0,0);
        box2.scale = 0.9;
        box2.angle = 7;


        this.groundContainer.add(box2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */


        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 4000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=10;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-10;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
