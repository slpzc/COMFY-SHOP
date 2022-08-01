var vm = new Vue({
    el: '#app',
    data() {
        return {
            products: [
                {
                    name: 'Мороженое',
                    bonus: 10,
                    price: 4,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Пачка чипсов',
                    bonus: 10,
                    price: 16,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Салат',
                    bonus: 10,
                    price: 3,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Груша',
                    bonus: 10,
                    price: 32,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Молоко',
                    bonus: 10,
                    price: 999,
                    length: 1,
                    type: 'water'
                },
                {
                    name: 'Вино',
                    bonus: 10,
                    price: 78,
                    length: 1,
                    type: 'water'
                },
                {
                    name: 'Сыр',
                    bonus: 10,
                    price: 3,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Арбуз',
                    bonus: 10,
                    price: 1,
                    length: 1,
                    type: 'food'
                },
                {
                    name: 'Кока-Кола',
                    bonus: 10,
                    price: 3,
                    length: 1,
                    type: 'water'
                },
                {
                    name: 'Бутылка воды',
                    bonus: 10,
                    price: 3,
                    length: 1,
                    type: 'water'
                }
            ],
            tools:[
                {
                    name: 'Щепцы',
                    length: 1,
                    price: 3,
                },
                {
                    name: 'Отвёртка',
                    length: 1,
                    price: 3,
                },
                {
                    name: 'Ножницы',
                    length: 1,
                    price: 3,
                },
                {
                    name: 'Электрошокер',
                    length: 1,
                    price: 3,
                },
                {
                    name: 'Заглушка',
                    length: 1,
                    price: 3,
                },
                {
                    name: 'Член',
                    length: 1,
                    price: 3,
                }
            ],
            other: [
                    {
                        name: 'Телефон',
                        length: 1,
                        price: 3,
                    },
            ],
            comp: 1,
            money: 6000,
            lastObj: null
        }
    },
    methods: {
        buy(card) {
            if (this.money < card.price) {
                return;
            };
            if(card == null){
                return;
            };
            console.log('купил', card.name);
        },
        lot(card, r) {
            if(card.length == 1 && r == 0) {return}
            if(r == 0){
                card.length--;
            }else if(r == 1){
                if(card.length == 20){
                    return;
                }
                if(card.name == 'Телефон'){
                    return;
                }else{
                    card.length++;
                }
            }
        },
        
    },
    
    mounted () {
        let sthis = this;
        window.addEventListener('keydown', function(event) {
            if(event.code == 'Enter'){
                sthis.buy(sthis.lastObj)
            }
          });
    }
})