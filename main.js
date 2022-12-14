const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AURIS</title>
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;900&family=Spartan:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu&display=swap"
          rel="stylesheet">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      <link rel="stylesheet" href="style.css">
  </head>
  <style>/* font-family: 'Montserrat', sans-serif;
font-family: 'Spartan', sans-serif;
font-family: 'Ubuntu', sans-serif; */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
}
h1{
    font-size: 50px;
    line-height: 64px;
    color: #222;
}
h2{
    font-size: 46px;
    line-height: 54px;
    color: #222;
}
h4{
    font-size: 20px;
   
    color: #222;
}
h6{
    font-size: 12px;
   font-weight: 700;
   
}
p{
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}
.section-p1{
    padding: 40px 80px;
}

.section-m1{
    margin: 40px 0;
}
button.normal{
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: black;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
}

button.white{
    font-size: 13px;
    font-weight: 600;
    padding: 11px 18px;
    color: #fff;
    background-color: transparent;
    /* border-radius: 4px; */
    cursor: pointer;
    border: 1px solid #fff;
    outline: none;
    transition: 0.2s;
}
body{
    width: 100%;
}
/* header start */

/* .rotate {
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  } */
#header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* add some padding into navbar */
    padding: 20px 80px;
    background: #e3e6f3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    /* we have added a shadow but it was not showing so use z index */
    z-index: 999;
    /* we also want to make our navbar sticky */
    position: sticky;
    top: 0;
    left: 0;
}
#navbar{
    display: flex;
    align-items: center;
    justify-content: center;
}
/* we want to remove the list dot */
#navbar li{
    list-style: none;
    padding: 0px 20px;
    /* we have  after that is absoloute before that make parent relative that is li */
    position: relative;

}
#mobile{
    display: none;
    align-items: center;
}
#close{
    display: none;
}

/* remove the underline under anchor tags */
#navbar li a{
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s ease;
}
#navbar li a:hover,
#navbar li a.active{
    /* first we have to give this active class */
color: #088178;
/* color changing is fast i need smoothness that will come from transition
when go to some home or about its highlighted by underline */

}
#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;

}
/* home page */
#hero{
    background-image: url("img/hero4.png");
    /* right know the image is till the text we want it to take full size */
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% 0%;
    /* text is upper left we want it to be center */
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
#hero h4{
    /* we want to give padding bottom to the h4 */
    padding-bottom: 15px;
}
#hero h1 {
    color: #088178;
}
#hero button {
    background-image: url(img/button.png);
    background-color: transparent;
    color: #088178;
    border: 0;
    /* we can only see a little bit of image to fix that we have to give little bit of paddng */
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;

}
/* i want all the features in a line */
#features{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    /* this will make the box responsive */

}
#features .fe-box{
    width: 180px;
    text-align: center;
    padding: 25px 15px;
/* beware of typo in writing id name or class */
/* right now we cant see the box first add box shadow */
box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
border: 1px solid #cce7d0;
border-radius: 4px;
margin: 15px 0;
/* i want that everytime i hover over the box it reduces its shadow */
}
#features .fe-box:nth-child(2) h6 {
    background-color: #cdebbc;
}
#features .fe-box:nth-child(3) h6 {
    background-color: #d1e8f2;
}
#features .fe-box:nth-child(4) h6 {
    background-color: #cdd4f8;
}
#features .fe-box:nth-child(5) h6 {
    background-color: #f6dbf6;
}
#features .fe-box:nth-child(6) h6 {
    background-color: #fff2e5;
}
#features .fe-box :hover{
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
}


#features .fe-box h6{
    /* now i want to add background color to text h6 */
    display: inline-block;
    padding: 9px 8px 6px 8px;
    line-height: 1;
    border-radius: 4px;
    color: #088178;
    background-color: #fddde4;
}
/*  i want to make image responsive */
#features .fe-box img{
    width: 100%;
    margin-bottom: 10px;
}
#product1{
    text-align: center;

}

#product1 .pro-container{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    /* i dont want slider and i want 4 and 4 groups in eaxh line */
    /* easist way to do this is flex wrap wrap */
    flex-wrap: wrap;
}

#product1 .pro{
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    /* when go to image a cursor will come */
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    /* for smooth transition */
    transition: 0.2s ease;
    position: relative;
    /* because this is the parent of shop cart */
}
#product1 .pro :hover{
    /* i want to increase shadow when i hover  */
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}


#product1 .pro img{
    /* now target image to fit in box */
    width: 100%;
    border-radius: 20px;
}
#product1 .pro .des{
    /* now i want to target text in description */
    text-align: start;
    padding: 10px 0;

}
#product1 .pro .des span{
    color: #606063;
    font-size: 12px;

}
#product1 .pro .des h5{
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}


#product1 .pro .des i{
    font-size: 12px;
    color: rgb(243, 181, 25);
}

#product1 .pro .des h4{
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}
/* golden baat whenever we apply position absolute to a child element first make is parent relative */
#product1 .pro .cart{
    /* now i want cart icon to be in  right side*/
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    font-weight: 500;
    color: #088178;
    border-color: 1px solid #cce7d0;
    position: absolute;
    /* parent element of this is pro div */
    bottom: 20px;
    right: 10px;

}
#banner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("img/banner/b2.jpg");
    /* the back image only taking height till text want to give it some extra height */
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
}
#banner h4{
    color: #fff;
    font-size: 16px;

}
#banner h2{
    color: #fff;
    font-size: 30px;
    padding: 10px 0;
    
}
#banner h2 span{
    color: #ef3636;
    

}
#banner button:hover{
    background-color: #088178;
    color: #fff;

}
#sm-banner{
    /* sm means smaller  */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
#sm-banner .banner-box{
/* copy the already made banner css */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

background-image: url("img/banner/b17.jpg");
/* the back image only taking height till text want to give it some extra height */
width: 45%;
height: 60vh;
margin-left: 10px;
background-size: cover;
background-position: center;
padding: 30px;
}
#sm-banner .banner-box2{
    background-image: url("img/banner/b10.jpg");
}
#sm-banner h4{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
}
#sm-banner h2{
    color: #fff;
    font-size: 28px;
    font-weight: 800;
}
#sm-banner span{
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 15px;
}
/* when hover over banner then the color of button is changing so we have to apply the hover to banner */
#sm-banner .banner-box:hover button{
    /* this line means that when hover over the banner the button prroperty should change like this */
    background-color: #088178;
    border: 1px solid #088178;
}

#banner3{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 80px;
}
#banner3 .banner-box{
    /* copy the already made banner css */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

background-image: url("img/banner/b7.jpg");
/* the back image only taking height till text want to give it some extra height */
min-width: 30%;
height: 30vh;
background-size: cover;
background-position: center;
padding: 20px;
margin-bottom: 20px;
}

#banner3 .banner-box2{
    background-image: url("img/banner/b4.jpg");
}

#banner3 .banner-box3{
    background-image: url("img/banner/b18.jpg");
}
#banner3 h2{
    color: #fff;
    font-size: 22px;
    font-weight: 900;
}
#banner3 h3{
    color: #ec544e;
    font-size: 15px;
    font-weight: 800;
}
#newsletter{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-image: url("img/banner/b14.png");
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #041e42;
    /* whenver we want to give padding to some setion we have creted a custom padding and margin class we just assign that class to that section */

    
}
#newsletter h4{
    font-size: 22px;
    font-weight: 700;
    color: #fff;

}
#newsletter p{
    font-size: 14px;
    font-weight: 600;
    color: #818ea0;
    
}
#newsletter p span{
   
   
    color: #ffbd27;
    
}
#newsletter .form{
    display: flex;
    width: 40%;
}
#newsletter input{
    height: 3.125rem;
    padding:0 1.25em;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
#newsletter button{
    background-color: #088178;
    color: #fff;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}  
footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
}
footer .col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}
footer .logo{
    margin-bottom: 30px;
}
footer h4{
    font-size: 14px;
    padding-bottom: 20px;
}
footer p {
    font-size: 13px;
    margin: 0 0 8px 0;

}
footer a {
  font-size: 13px;
  text-decoration: none;
  /* to remove the lines */
  color: #222;
  margin-bottom: 10px;

}
footer .follow{
    margin-top: 20px;
}
footer .follow i{
    color: #465b52;
    padding-right: 4px;
    
    cursor: pointer;
}
.icon{
    padding-bottom: 20px;
}
    
/* now we will target the image of google and etc */
   footer .install .row img{
       border: 1px solid #088178;
       border-radius: 6px;

   } 
   footer .install img{
       margin: 10px 0 15px 0;
   }
   footer .follow i:hover,
   footer a:hover {
       color: #088178;


   }
   /* footer .col .copyright {
       width: 100%;
       text-align: center;
   } */
   footer .copyright{
       position: absolute;
       right: 480px;
       bottom: 20px;
   }
/* main page ends */

/* shop page starts */

#page-header {
    background-image: url("img/banner/b1.jpg");
    width: 100%;
    height: 40vh;
    background-size: cover;
    /* now i want text to be center fo this i wil use display: flex; */
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 14px;

}
#page-header h2,
#page-header p{
    color: #fff;
}
#pagination {
    text-align: center;
}
#pagination a{
    text-decoration: none;
    background-color: #088178;
    padding: 15px 20px;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
}
#pagination a i{
    font-size: 16px;
    font-weight: 600;
}
/* shop ends */
/* single product details */
#prodetails{
    /* i want image and text to be in one row */
    display: flex;
    margin-top: 20px;
}



#prodetails .single-pro-image{
    width: 40%;
    margin-right: 50px;
}
.small-img-group {
    display: flex;
    justify-content: space-between;
    flex-basis: 30%;

}

.small-img-col{
    flex-basis: 24%;
    cursor: pointer;

}
#prodetails .single-pro-details{
    width: 50%;
    padding-top: 30px;
}

#prodetails .single-pro-details h4{
    padding: 40px 0 20px 0;
}

#prodetails .single-pro-details h2{
    font-size: 26px;
}
#prodetails .single-pro-details select{
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;

}
#prodetails .single-pro-details input{
    width: 50px;
    height: 47px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;
}

#prodetails .single-pro-details input:focus{
    outline: none;
}
#prodetails .single-pro-details button{
    background: #088178;
}
#prodetails .single-pro-details span{
    line-height: 25px;
}
/* shop page ends */
/* blog page start */

 #page-header.blog-header {
     /* by this all properties of page header will be applied here and i only want to change backg image */
     background-image: url("img/banner/b19.jpg");
    
}
#blog{
    padding: 150px 150px 0 150px;
    /* to give space around the blog */

}
#blog .blog-box{
    display: flex;
    align-items: center;
    width: 100%;
    /* parent of h1 so make its position relative */
    position: relative;
    padding-bottom: 90px;
}
#blog .blog-img{
    width: 50%;
    margin-right: 40px;

}

#blog img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}

#blog .blog-details{
    width: 50%;
    

}

#blog .blog-details a{
    text-decoration: none;
    font-size: 11px;
    color: black;
    font-weight: 700;
    position: relative;
    transition: 0.3s;
}

#blog .blog-details a::after{
    content: "";
    width: 50px;
    height: 1px;
    background-color: #000;
    position: absolute;
    top : 4px;
    right: -60px;
/* make parent relative first nhi toh slider aa rha h */

    
}


#blog .blog-details a:hover{
    color: #088178;
}
#blog .blog-details a:hover::after{
    background-color: #088178;
}

/* 
i want to put 13/01 above the girl pic */
#blog .blog-box h1{
    position: absolute;
    top: -40px;
    left: 0;
    font-size: 70px;
    font-weight: 700;
    color: #c9cbce;
    z-index: -1;
}


/* about page */
#page-header.about-header{
    /* in this we cant give space between over selectors */
    background-image: url("img/about/banner.png");
}
.marq {
  background-color: #ccc;
 
}

#about-head {
    display: flex;
   
}
#about-head img{
    width: 50%;
    height: auto;

}
#about-head div{
    padding-left: 40px;
}

#about-app {
    text-align: center;
}

#about-app .video{
    width: 70%;
    height: 100%;
    margin: 30px auto 0 auto;
}

#about-app .video video{
    width: 70%;
    height: 100%;
    border-radius: 20px;
}


/* contact page starts */
/* #contact-details{
    display: flex;
    align-items: center;
    justify-content: space-between;
} */
/* #contact-details{
    display: flex;
    text-align: start;
    justify-content: space-between;
} */
.row {
    display: flex;
  }
  
  .column {
    flex: 50%;
    padding: 5px;
  }
  .row .details{
      width: 40%;
  }
    

  .row .details span,
  #form-details form span{
      font-size: 12px;
  }

  .row .details h2,
  #form-details form h2{
    font-size: 26px;
    line-height: 35px;
    padding: 20px 0;
   
    
  }

  .row .details h3{
      font-size: 16px;
      padding-bottom: 15px;
  }

  .row .details li{
      list-style: none;
      display: flex;
      padding: 10px 0;
  }


  .row .details li i{
      font-size: 14px;
      padding-right: 22px;

  }


  .row .details li p{
      margin: 0;
      font-size: 14px;
  }
  .row .map{
      width: 55%;
      height: 400px;
  }
  .row .map iframe{
      width: 100%;
      height: 100%;
  }
  #form-details form{
      width: 65%;
      display: flex;
      flex-direction: column ;
     align-items: flex-start;

  }
  #form-details{
      display: flex;
      justify-content: space-between;
      margin: 30px;
      padding: 80px;
      border: 1px solid #e1e1e1;
  }


  #form-details form input,
  #form-details form textarea{
      width: 100%;
      padding: 12px 15px;
      outline: none;
      margin-bottom: 20px;
      border: 1px solid #e1e1e1;
  }
  

  #form-details form button{
      background-color: #088178;
      color: white;
  }


  #form-details .people div{
      padding-bottom: 25px;
      display: flex;
      align-items: flex-start;

  }

  #form-details .people div img{
      width: 65px;
      height: 65px;
      object-fit: cover ;
      margin-right: 15px;
     
  }
  #form-details .people div p{
      margin: 0;
      font-size: 13px;
      line-height: 25px;

  }

  #form-details .people div p span{
      display: block;
      font-size: 16px;
      font-weight: 600 ;
      color: #000;
     
  }
  /* cart page */

  #cart {
      overflow-x: auto;
  }
  #cart table{
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      white-space: nowrap;
  }

 #cart table img{
     width: 70px;
 }

 #cart table td:nth-child(1){
     width: 100px;
     text-align: center;
 }

 #cart table td:nth-child(2){
    width: 100px;
    text-align: center;
   
}
#cart table td:nth-child(3){
    width: 250px;
    text-align: center;
   
}

#cart table td:nth-child(4){
    width: 150px;
    text-align: center;
   
}
#cart table td:nth-child(5),
#cart table td:nth-child(6){
    width: 150px;
    text-align: center;
   
}

#cart table td:nth-child(5) input{
    width: 70px;
    padding: 10px 5px 10px 15px;

}

#cart table  thead{
    border: 1px solid #e2e9e1;
    border-left: none ;
    border-right: none;
   
}
#cart table  thead td{
    font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
    padding: 18px 0;

}
#cart table  tbody tr  td{
    padding-top: 15px;
}
#cart table  tbody   td{
    font-size: 13px;
}
#cart-add{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}

 #coupon{
     width: 50%;
     margin-bottom: 30px;

 }
 #coupon h3,
 #subtotal h3{
     padding-bottom: 15px;

 }
 #coupon input{
     padding: 10px 20px;
     outline: none;
     width: 60%;
     margin-right: 10px;
     border: 1px solid #e2e9e1;
 }
 #coupon button,
 #subtotal button {
     background-color: #088178;
     color: #fff;
     padding: 12px 20px;
 }
 #subtotal{
     width: 50%;
     margin-bottom: 30px;
     border: 1px solid #e2e9e1;
     padding: 30px;

 }
 #subtotal table{
     border-collapse: collapse ;
     width: 100%;
     margin-bottom: 20px;

    
 }
 #subtotal table td{
     width: 50%;
     border: 1px solid #e2e9e1;
     padding: 10px;
     font-size: 13px;

 }














   /* start media queries
     */
     @media (max-width:799px)  {

        .section-p1{
            padding: 40px 40px;
            /* padding of right and left kam ki taki side  by side aa zaye */
        }
        
        #navbar {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            right: -300px;
            height: 100vh;
            width: 300px;
            background-color: #fff;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.01);
            padding: 80px 0 0 10px;
            transition: 0.3s;
        }
        #navbar.active{
            right: 0px;

        }
        
        #navbar li{
            margin-bottom: 20px;
        }
        #hero{
            /* background-image: url("img/hero4.png");
            /* right know the image is till the text we want it to take full size */
            /* height: 90vh;
            width: 100%;
            background-size: cover;
            background-position: left 95% top 55%;
            text is upper left we want it to be center */ 
            height: 70vh;
            padding: 0 80px;
            background-position: top 30% right 30%;
           
        }
        #mobile {
            display:flex;
            align-items: center;
        }
        #mobile i {
            color: #1a1a1a;
            font-size: 24px;
            padding-left: 20px;
        }
        #close{
            display: initial;
            /* we removed close icon from large size and initialised here */
            position: absolute;
            top: 30px;
            left: 30px;
            color: #222;
            font-size: 24px;

        }
        #lg-bag{
            display: none;
        }
        #features {
                    justify-content: center;
        }
        #features .fe-box {
           
            margin: 15px 15px;
        }
        #product1 .pro-container{
            justify-content: center;
        }
        #product1 .pro {
           
            margin: 15px ;
            
        }
        #banner {
            height: 20vh;
        }
        #sm-banner .banner-box{
            min-width: 100%;
            height: 30vh;
        }
        #banner3{
            padding: 0 40px;
        }
        #banner3 .banner-box{
            width: 28%;
        }
        #newsletter .form{
            width: 70%;
        }
        footer .copyright{
            position: inherit;
        }
      /* about page */

      #about-head img {
        width: 52%;
        height: 400px;
    }
/* contact us page */
#form-details {
  
    padding: 40px;
    
}
#form-details form {
    width: 50%;
  
}
       

        
     }


     @media (max-width: 477px) {
         .section-p1{
             padding: 20px;
         }
        #header {
             padding: 10px 30px;
         }
         #hero {
             padding: 0 20px;
             background-position: 55%;

         }
         h1 {
             font-size: 38px;
         }
         h2 {
             font-size: 32px;
         }
         /* i want features 2 side by side so decrease the padding */
         #features {
             justify-content: space-between;
         }
         #features .fe-box{
             width: 155px;
             margin: 0 0 15px 0;
         }
         #product1 .pro{
             width: 100%;
        }
        #banner {
            height: 40vh;
        }
        #sm-banner .banner-box {
            height: 40vh;
        }
        #sm-banner .banner-box2 {
            margin-top: 20px;
        }
        /* padding zyada lga toh kam krdo side m like this */
        #banner3 {
                padding: 0 20px;
        }
        #banner3 .banner-box {
           width: 100%;
        }
        #newsletter {
            padding: 40px 20px;
        }
        #newsletter .form {
            width: 100%;
        }
        footer .copyright{
            text-align: start;
            position: inherit;
        }

        /* single product details */

        #prodetails {
            display: flex;
            flex-direction: column;
        }
        #prodetails .single-pro-image {
            width: 100%;
            margin-right: 0px;
        }
        #prodetails .single-pro-details {
            width: 100%;
           
        }
        /* blog page */

        #blog .blog-box {
            display: flex;
           flex-direction: column;
          align-items: flex-start;
        }
        #blog {
            padding: 100px 20px 0 20px;
        }
        #blog .blog-img {
            width: 100%;
            margin-right: 0px;
            margin-bottom: 30px;
        }
        #blog .blog-details {
            width: 100%;
        }
        /* about page */

        #about-head {
            
            flex-direction: column;

        }
        #about-head img {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }

        #about-head div {
            padding-left: 0px;
        }
        #about-app .video {
            width: 100%;
           
        }
        /* contact us page */

        .row{
           
            flex-direction: column;

        }
        .row .details{
            width: 100%;
            margin-bottom: 30px;
        }
        .row .map{
            width: 100%;
        }
        #form-details {
           
            margin: 10px;
            padding: 30px 10px;
           flex-wrap: wrap;
        }
        #form-details form {
            width: 100%;
            margin-bottom: 30px
            ;
        }
        /* cart page */
        #cart-add {
            
            flex-direction: column;
            
        }
        #coupon{
            width: 100%;

        }
        #subtotal{
            width: 100%;
            padding: 20px;
            
        }




     }

</style>
  <body>
  
      <!-- first we have to create a navbar  -->
      <section id="header">
          <!-- create an anchor tag to insert logo -->
          <img  src="Screenshot-2.png" class="logo rotate" width="600" height="150" alt="">
          <!-- now we want to create nav links -->
          <div>
              <ul id="navbar" >
                  <!-- i want our home page to be highlighted thats why it should have active class-->
                  <li><a class="active" href="index.html">Dashboard</a></li>
                  <li><a href="attendence.html">Attendance</a></li>
                  <li><a href="acedamicfees.html">Academic Fees</a></li>
                  <li><a href="academicper.html">Academic Performance</a></li>
                  <li><a href="unires.html">University Resources</a></li>
                  
              
                  <a href="#" id="close"><i class="far fa-times"></i></a>
              </ul>
          </div>
  
          <div id="mobile">
  
              
                  <i id="bar" class="fas fa-outdent"></i>
              
             
              <!-- we dont want bullet point so simply remove li -->
          </div>
      </section>
  
      <!-- nav bar section is done  -->
  
      <section id="hero">
          <h4>Your one-stop destination for learning and exploring !</h4>
          <h2>Dashboard</h2>
  
          <h1>Your academic aid!</h1>
      </section>
              <center><img src='Screenshot-1.png'></center>
      <br>
      <br>
      <br>
     
      <section id="features" class="section-p1">
          <div class="fe-box">
              
              <h6>Course Registration</h6>
          </div>
          <div class="fe-box">
              <h6>Academic Session Schedule</h6>
            </div>
           
         
            <div class="fe-box">
              
              <h6>University Resources</h6>
            </div>
            <div class="fe-box">
              
              <h6>Attendance</h6>
            </div>
      </section>
      <div class="box box-info">
          <div class="'box-header">
              <i><b><h3 class="box-title">Quick Links</h3></i></b>
              <br>
              <br>
          </div>
      </div>
      <h5><a href ="course.html">Course Registration Monsoon 2022</a></h5>
      <br>
      <br>
      <h5><a href="coursedir.html">Course Directory</a></h5>
      <br>
      <br>
      <h5><a href="P-NP Course.html">Your P/NP Course</a></h5>
      <br>
      <br>
      <h5><a href="https://docs.google.com/document/d/1DUc_EVP7deZmEWDaZjDqrljQ03FVKyUWGKmNid8Ib0I/edit">Leave a absence for a Semester or a Year</a></h5>
      <br>
      <br>
      
      <footer class="section-p1 section-m1">
          <!-- 4 diffrent columns -->
          <div class="col">
              <h4>Contact</h4>
              <p><strong>Address:</strong>  Commerce-6-Roads, Navrangpura </p>
              <p><strong>Phone:</strong> +91 851** 1***1 / +91 940** 7***1</p>
              <p><strong>Hours:</strong>  09.00 - 18.00, Mon - Sat </p>
              <div class="follow">
                  <h4>Follow us on Social Media</h4>
                  <div class="icon"> 
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                      <i class="fab fa-youtube"></i>
                  </div>
                   <!-- i also want to make click on icon take to the site page -->
                 
              </div>
             
          </div>
          
      
          <!-- second column -->
          <div class="col">
              <h4>About</h4>
              <a href="abt.html">About us</a>
              <!-- use a tag because these a tag are the links -->
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Contact Us</a>
          </div>
      
         <div>
              <p class="copyright"><span>&#169;</span>All Copyrights Reserved. This Website is made by Bhavya Khakhar and Milee Bajpai.</p>
          </div>
          
       
      </footer>
      <script src="index.js"></script>
      <script>
          console.log("Hello World");
      </script>
      </body>
      
      </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});