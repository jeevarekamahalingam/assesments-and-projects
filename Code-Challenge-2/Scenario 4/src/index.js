function calculateTip(amount, rating) {
    //your code here
    if(rating==='Excellent') 
      return Math.ceil((amount*20)/100);
    else if(rating==='great') 
      return Math.ceil((amount*15)/100);
    else if(rating==='good') 
      return Math.ceil((amount*10)/100);
    else if(rating==='Poor') 
      return Math.ceil((amount*5)/100);
    else if(rating==='terrible')
      return 0;
    else
      return "Rating not recognised"
  }

//Use SpecRunner to check the Test Cases.