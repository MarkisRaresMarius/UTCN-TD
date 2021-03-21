
function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      bool: false
    },
    methods: {
      doSomething: function () {
        //console.log('The input string value is: ' + this.message);
        if(this.message == '123')
        {
          console.log('The input string value is: ' + this.message);
          this.bool=true;
        } else {this.bool= false;}
      },
      changeVal: function ()  {
      if(this.message != '123')
              {
              this.bool=false;
               console.log('Mesajul este egal cu: ' + this.bool);
              }
      }
    }
  });

}

document.addEventListener('DOMContentLoaded', () => {
  run();
});

