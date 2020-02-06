new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        log: []  
        /**
         *[{ turnType: 'attack/heal', monster : 5, player : 10 }]
         */
    },
    methods: {
        startGame: function() {
            this.gameStarted = true,
            this.log = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calculateDamage: function(maxHit) {
            const damage = Math.round(maxHit * Math.random()) ;
            return damage;
        },
        causeDamageRange: function(monsterHit, playerHit) {
            if (this.playerHealth - monsterHit < 0) {
                this.playerHealth = 0;
            }
            else this.playerHealth -= monsterHit;
            if (this.monsterHealth - playerHit < 0) {
                this.monsterHealth = 0;
            }
            else this.monsterHealth -= playerHit;
        },
        causeHealing: function(monsterHit, playerHeal) {
            if (this.playerHealth - monsterHit < 0) {
                this.playerHealth = 0;
            }
            else this.playerHealth -= monsterHit;
            if (this.playerHealth + playerHeal > 100) {
                this.playerHealth = 100;
            }
            else this.playerHealth += playerHeal;
        },
        logTurn: function(turnType, monsterHit, playerHitHeal) {
            this.log.unshift({
                turnType: turnType,
                monster: monsterHit,
                player: playerHitHeal
            })  
        },
        attack: function() {
            const turnType = 'attack';
            const maxHit = 10;        
            const monsterHit = this.calculateDamage(maxHit) ;
            const playerHit = this.calculateDamage(maxHit);            
            this.causeDamageRange(monsterHit, playerHit);
            this.logTurn(turnType, monsterHit, playerHit);         
        },
        specialAttack: function() {
            const turnType = 'attack';
            const maxHitPlayer = 20;
            const maxHitMonster = 10;
            const monsterHit = this.calculateDamage(maxHitMonster) ;
            const playerHit = this.calculateDamage(maxHitPlayer);
            this.causeDamageRange(monsterHit, playerHit);
            this.logTurn(turnType, monsterHit, playerHit);         
        },
        heal: function() {
            const turnType = 'heal';
            const maxHealPlayer = 10;
            const maxHitMonster = 10;
            const monsterHit = Math.round(maxHitMonster * Math.random()) ;
            const playerHeal = Math.round(maxHealPlayer * Math.random())             
            this.causeHealing(monsterHit, playerHeal);
            this.logTurn(turnType, monsterHit, playerHeal);           
        }
    },
    computed: {
        playerWinLoose: function() {
            let decision = 'pending';
            if(this.playerHealth == 0) decision = 'lost'
            else if(this.monsterHealth == 0) decision = 'won'
            return decision;
        }
    },
    watch: {
        playerWinLoose: function(value) {
            if (value=='pending') return;
            const userResponse = confirm(`you have ${value}, start a new game?`);
            if(userResponse) {
                this.startGame();
            }else {
                this.gameStarted = false;
            }
        }
    }
})