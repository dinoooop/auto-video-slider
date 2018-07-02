var navigate = {
  carousel : ['A', 'B', 'C', 'D'],
  current : 0,
  updateIndex : function(event){

    if(event == 'next'){
      this.current++;
    }else{
      this.current--;
    }

    this.current = this.correction(this.current);
    this.setObj();
  },
  correction: function(val){
    if(val < 0){
      val = this.carouselCount;
    }

    if(val > this.carouselCount){
      val = 0;
    }
    return val;
  },
  init: function(obj){
    this.carousel = obj;
    this.carouselCount = this.carousel.length - 1;
    this.setObj();
  },
  setObj: function(){
    this.currentObj = this.carousel[this.current];
  }
};