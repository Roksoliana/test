import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addData: function(){
            let data = {
                title: this.get('title'),
                begin: this.get('start'),
                end: this.get('end'),
                color: this.get('color')
            }
            console.log(data);
        }
    }
});
